# Portfolio v2 (React + Vite + Tailwind)

Soe Min Thein's personal portfolio. Editorial design system, light and dark
themes driven by design tokens, and Google Analytics.

## Design system

The site and the Figma file [Portfolio v2 — Rebrand](https://www.figma.com/design/SUkoDF3uk1jXXME5Xo0OjO)
are one system. Every Figma variable maps to a CSS custom property of the same
name in `src/styles/tokens.css` — the Figma variable `bg/canvas` emits
`var(--bg-canvas)` — and `tailwind.config.cjs` exposes those tokens as
utilities.

- **Voice** — Instrument Serif for statements, Geist for the interface,
  Geist Mono for data (indices, years, platforms, tech).
- **Color** — warm off-white paper, warm near-black ink, one vermilion accent
  used as a *marker* (rules, indices, hover, active nav) and never as a large
  fill.
- **Theming** — `data-theme="light|dark"` on `<html>`. An inline script in
  `index.html` resolves it before first paint so the page never flashes.

Prefer token utilities (`bg-canvas`, `text-ink-2`, `border-hairline`, `p-lg`,
`text-body-m`) over raw palette values so the two stay in sync.

## Getting Started

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  assets/               # Static assets (images and logos, currently unreferenced)
  components/           # Section components, in page order
    Nav.jsx
    Hero.jsx
    Projects.jsx        # 01 — Work (numbered project rows)
    About.jsx           # 02 — Approach
    Experience.jsx      # 03 — Where I've built
    Skills.jsx          # 04 — Toolkit
    Certificates.jsx    # 05 — Credentials
    Contact.jsx         # 06 — Contact
    Footer.jsx
    CertificatesPage.jsx  # /certificates
    SkillsPage.jsx        # /skills
    ThemeSwitcher.jsx
    ui/                 # Design-system primitives, mirroring the Figma components
      Button.jsx        # Style=Primary|Secondary|Ghost, Size=M|S
      Tag.jsx           # Tone=Neutral|Accent (+ TagRow)
      SectionHeader.jsx # Rule, indexed eyebrow, serif title, mono meta
      Section.jsx       # Section rhythm + container
      Container.jsx     # Page gutter + 1200px measure
      Reveal.jsx        # Restrained scroll reveal, respects reduce-motion
  core/
    config/
      ga.js             # GA id from env (VITE_GA_ID)
    theme/
      ThemeContext.jsx  # ThemeProvider
      useTheme.js       # Context + hook (kept apart for Fast Refresh)
  data/                 # Frozen content modules
    site.js             # Profile, headline, stats, about copy, links
    projects.js
    experience.js
    skills.js
    certificates.js
    index.js
    utils.js
  styles/
    tokens.css          # Design tokens — mirrors the Figma variables
  App.jsx               # Routes, scroll spy, analytics
  index.css             # Tailwind layers + base + component classes
  main.jsx              # Entry point
public/
  s-icon.svg            # Favicon
```

Notes:
- Content lives in `src/data/*` and is deep-frozen for immutability.
- The editorial layout renders no screenshots, so project images and company
  logos are not imported. The files remain in `src/assets/` if a future layout
  wants them.

## Environment Variables

Google Analytics is configured for deployment in the Vercel project dashboard:

1. Open **Project Settings → Environment Variables**.
2. Add `VITE_GA_ID` with the GA4 measurement ID (`G-XXXXXXXXXX`).
3. Enable it for the **Production** environment and redeploy the project.

Vite embeds `VITE_GA_ID` at build time and exposes it to the app through
`import.meta.env.VITE_GA_ID`. The variable must therefore be present before the
Vercel production build runs.

For optional local analytics testing, create a `.env.local` file (it is ignored
by Git):

```env
VITE_GA_ID=G-XXXXXXXXXX
```

## Google Analytics (SPA)

- `index.html` dynamically loads `gtag.js` using `VITE_GA_ID` and sets `send_page_view: false`.
- `AnalyticsTracker` in `src/App.jsx` sends a page view on every route change:
  - Tracks the main (`/`), certificates (`/certificates`) and skills (`/skills`) routes.

## Tech

- React 19, Vite, TailwindCSS
- framer-motion for scroll reveals
- react-router-dom for routing
- Instrument Serif, Geist and Geist Mono via Google Fonts

## Scripts

- `npm run dev` — start dev server
- `npm run build` — build production assets
- `npm run preview` — preview production build
- `npm run lint` — run ESLint
