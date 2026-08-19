#!/usr/bin/env python3
"""Regenerate everything in public/ that is a favicon.

The mark is the site wordmark's Instrument Serif "S", outlined to a vector path
so the icon never depends on a webfont being available at render time, set on
vermilion (--vermilion-500). Vermilion is the one brand colour that keeps its
silhouette against both a light and a dark browser tab strip — ink dissolves
into Chrome's dark strip, paper into its light one.

Instrument Serif is a high-contrast display face, so a single drawing cannot
serve 16px and 512px: its hairlines vanish on a 16px grid, but the stroke that
rescues them visibly flattens the thick/thin contrast at 180px. So three optical
weights are drawn from the same outline:

    16/32/48   stroke 2.5   legible on the pixel grid
    the SVG    stroke 1.5   imperceptible large, still helps at 16
    180+       stroke 0     the true letterform

Rasters are rendered by headless Chrome at 4x and downsampled, so the PNGs are
the same geometry a browser gets from the SVG rather than a separate drawing.

    pip install fonttools pillow
    python3 scripts/build-icons.py

Assets are committed, so this only needs re-running when the mark changes.
"""
import io
import os
import struct
import subprocess
import sys
import urllib.request

from PIL import Image
from fontTools.misc.transform import Transform
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public")
CACHE = os.path.join(ROOT, ".cache")
FONT_PATH = os.path.join(CACHE, "InstrumentSerif-Regular.ttf")
FONT_URL = ("https://github.com/google/fonts/raw/main/ofl/instrumentserif/"
            "InstrumentSerif-Regular.ttf")
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

# --- design constants -------------------------------------------------------
BOX = 64.0            # the SVG viewBox, so every number below reads as /64
GLYPH = "S"
CAP = 0.88            # glyph ink height as a fraction of the box
RADIUS = 8            # == --radius-lg, so the icon sits on the site's own scale
VERM = "#d9411e"      # --vermilion-500
PAPER = "#faf7f0"     # --paper-50
STROKE_SMALL = 2.5
STROKE_SCALABLE = 1.5
STROKE_LARGE = 0.0


def font():
    if not os.path.exists(FONT_PATH):
        os.makedirs(CACHE, exist_ok=True)
        print(f"fetching Instrument Serif → {os.path.relpath(FONT_PATH, ROOT)}")
        urllib.request.urlretrieve(FONT_URL, FONT_PATH)
    return TTFont(FONT_PATH)


def glyph_path(glyph_set, char, cap_frac):
    """SVG path data for `char`: its ink bbox scaled to cap_frac of the box and
    optically centred (by ink, not by font metrics), Y flipped for SVG."""
    g = glyph_set[char]
    bounds = BoundsPen(glyph_set)
    g.draw(bounds)
    xmin, ymin, xmax, ymax = bounds.bounds
    w, h = xmax - xmin, ymax - ymin
    scale = (BOX * cap_frac) / h
    tw, th = w * scale, h * scale
    t = (Transform()
         .translate((BOX - tw) / 2.0, (BOX - th) / 2.0 + th)
         .scale(scale, -scale)
         .translate(-xmin, -ymin))
    rec = RecordingPen()
    g.draw(rec)
    pen = SVGPathPen(glyph_set, ntos=lambda v: f"{v:.2f}".rstrip("0").rstrip("."))
    rec.replay(TransformPen(pen, t))
    return pen.getCommands()


def svg(glyph_set, stroke_w, cap_frac=CAP, radius=RADIUS, header=False):
    d = glyph_path(glyph_set, GLYPH, cap_frac)
    stroke = ""
    if stroke_w:
        stroke = (f'\n        stroke="{PAPER}" stroke-width="{stroke_w}"'
                  f' stroke-linejoin="round" stroke-linecap="round"')
    head = ""
    if header:
        # Careful: an XML comment may not contain a double hyphen, so token names
        # are written without their leading dashes. A stray "--" here silently
        # breaks the whole file as a standalone document, which is exactly the
        # context a favicon is loaded in. validate_svg() below enforces it.
        head = (
            "<!-- Soe Min Thein — favicon.\n"
            "     The 'S' is the Instrument Serif glyph from the site wordmark,\n"
            "     outlined to a path so it never depends on a font being available.\n"
            f"     Vermilion {VERM} on an {radius}-of-64 radius (the radius-lg token);\n"
            "     it is the one brand colour that holds its silhouette against both\n"
            "     a light and a dark browser tab strip.\n"
            "     The stroke re-uses the fill to add optical weight, so the face's\n"
            "     hairlines survive a 16px render.\n"
            "     Generated file — edit scripts/build-icons.py, not this. -->\n"
        )
    return (
        f'{head}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"'
        f' width="64" height="64" role="img" aria-label="Soe Min Thein">\n'
        f'  <rect width="64" height="64" rx="{radius}" fill="{VERM}"/>\n'
        f'  <path fill="{PAPER}"{stroke}\n'
        f'        d="{d}"/>\n'
        f'</svg>\n'
    )


def validate_svg(svg_text, label):
    """A favicon is loaded as a standalone document, so it has to be well-formed
    XML — not merely something that happens to render when inlined into HTML.
    Chrome shows no icon at all rather than reporting the parse error, so assert
    it here instead of discovering it in a tab."""
    import xml.etree.ElementTree as ET
    try:
        ET.fromstring(svg_text)
    except ET.ParseError as e:
        sys.exit(f"{label} is not well-formed XML: {e}")


def rasterize(svg_text, px, supersample=4):
    """Render `svg_text` to a `px` RGBA square via Chrome, downsampled from 4x."""
    if not os.path.exists(CHROME):
        sys.exit(f"Chrome not found at {CHROME} — needed to rasterize the PNGs.")
    big = px * supersample
    os.makedirs(CACHE, exist_ok=True)
    src = os.path.join(CACHE, "_render.html")
    shot = os.path.join(CACHE, "_render.png")
    with open(src, "w") as f:
        f.write(
            "<!doctype html><meta charset=utf-8>"
            "<style>html,body{margin:0;padding:0;background:transparent}"
            f"#w{{width:{big}px;height:{big}px}}"
            "#w svg{width:100%;height:100%;display:block}</style>"
            f"<div id=w>{svg_text}</div>"
        )
    subprocess.run(
        [CHROME, "--headless", "--disable-gpu", "--hide-scrollbars",
         "--force-device-scale-factor=1", "--default-background-color=00000000",
         f"--screenshot={shot}", f"--window-size={big},{big}", src],
        capture_output=True, check=True,
    )
    im = Image.open(shot).convert("RGBA").crop((0, 0, big, big))
    for p in (src, shot):
        os.remove(p)
    return im.resize((px, px), Image.LANCZOS)


def write_ico(path, images):
    """Multi-resolution ICO with PNG-compressed entries — the only way to give
    each size its own artwork (and supported everywhere since Vista)."""
    blobs = []
    for im in images:
        buf = io.BytesIO()
        im.save(buf, format="PNG", optimize=True)
        blobs.append(buf.getvalue())
    offset = 6 + 16 * len(blobs)
    out = struct.pack("<HHH", 0, 1, len(blobs))
    for im, blob in zip(images, blobs):
        out += struct.pack("<BBBBHHII",
                           0 if im.width >= 256 else im.width,
                           0 if im.height >= 256 else im.height,
                           0, 0, 1, 32, len(blob), offset)
        offset += len(blob)
    with open(path, "wb") as f:
        f.write(out + b"".join(blobs))


def main():
    gs = font().getGlyphSet()
    os.makedirs(OUT, exist_ok=True)

    scalable = svg(gs, STROKE_SCALABLE, header=True)
    validate_svg(scalable, "favicon.svg")
    with open(os.path.join(OUT, "favicon.svg"), "w") as f:
        f.write(scalable)
    print("  favicon.svg")

    small = svg(gs, STROKE_SMALL)
    large = svg(gs, STROKE_LARGE)
    # apple-touch and maskable go full-bleed: iOS and Android apply their own
    # mask, and our corners would only fight theirs.
    bleed = svg(gs, STROKE_LARGE, radius=0)
    # a maskable icon must survive an aggressive circular crop, so the mark
    # shrinks into the inner 80% safe zone.
    maskable = svg(gs, STROKE_LARGE, cap_frac=CAP * 0.62, radius=0)

    write_ico(os.path.join(OUT, "favicon.ico"),
              [rasterize(small, px) for px in (16, 32, 48)])
    print("  favicon.ico  16/32/48")

    for name, px, source in [
        ("favicon-96.png", 96, large),
        ("apple-touch-icon.png", 180, bleed),
        ("icon-192.png", 192, large),
        ("icon-512.png", 512, large),
        ("icon-maskable-512.png", 512, maskable),
    ]:
        im = rasterize(source, px)
        if name == "apple-touch-icon.png":
            # iOS discards alpha and composites on black, which would leave a
            # dark fringe inside its mask — flatten onto the brand colour first.
            flat = Image.new("RGB", im.size, (0xD9, 0x41, 0x1E))
            flat.paste(im, (0, 0), im)
            im = flat
        im.save(os.path.join(OUT, name), optimize=True)
        print(f"  {name}  {px}px")


if __name__ == "__main__":
    main()
