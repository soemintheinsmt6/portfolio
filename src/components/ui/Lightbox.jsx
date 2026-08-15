import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_OUT, overlay } from '../../core/motion';

/**
 * Screens travel in the direction you asked for: Next brings the following
 * screen in from the right, Prev from the left. Distance is deliberately short
 * — enough to say "there are more of these", not a carousel flourish.
 */
const SLIDE = 48;

const screenVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction * SLIDE,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction * -SLIDE,
    scale: 0.98,
    transition: { duration: DURATION.fast, ease: 'easeIn' },
  }),
};

/**
 * Full-screen screen viewer. The project list stays typographic; screenshots
 * get real size only when asked for.
 *
 * The scrim is always dark regardless of theme, so text inside references the
 * primitive ramp directly rather than the semantic tokens.
 */
export default function Lightbox({ images, title, index, onIndexChange, onClose }) {
  const closeRef = useRef(null);
  const restoreFocusRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [direction, setDirection] = useState(0);
  const count = images.length;

  const go = useCallback(
    (delta) => {
      setDirection(delta);
      onIndexChange((index + delta + count) % count);
    },
    [index, count, onIndexChange]
  );

  useEffect(() => {
    restoreFocusRef.current = document.activeElement;
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') go(1);
      if (event.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [go, onClose]);

  const controlClass =
    'rounded-sm p-xs font-mono text-mono-label font-medium uppercase text-[var(--ink-400)] transition-colors duration-200 hover:text-[var(--paper-0)] disabled:opacity-40';

  const scrimProps = prefersReducedMotion
    ? {}
    : { variants: overlay, initial: 'hidden', animate: 'visible', exit: 'exit' };

  const imageClass =
    'max-h-[min(100%,840px)] max-w-full rounded-[18px] object-contain';

  // Portalled for the same reason as the menu: any ancestor with a transform or
  // filter (framer-motion applies one while animating) would become the
  // containing block and trap this overlay inside the row.
  return createPortal(
    <Motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — app screens`}
      className="fixed inset-0 z-[100] flex flex-col gap-lg p-lg md:p-2xl"
      /* night/900 at 94% — a literal because opacity modifiers can't apply to var() colours */
      style={{ backgroundColor: 'rgba(16, 15, 13, 0.94)' }}
      onClick={onClose}
      {...scrimProps}
    >
      <div className="flex items-center justify-between gap-lg">
        <span className="font-mono text-mono-label font-medium uppercase text-[var(--paper-0)]">
          {title}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className={controlClass}>
          Close ✕
        </button>
      </div>

      <div
        className="flex min-h-0 flex-1 items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        {prefersReducedMotion ? (
          <img
            key={images[index]}
            src={images[index]}
            alt={`${title}, screen ${index + 1} of ${count}`}
            /* Capped so tall screens don't balloon on a large monitor, and so a
               small source (the Karaweik render is 844px) is never upscaled. */
            className={imageClass}
          />
        ) : (
          /* popLayout so the outgoing screen leaves the flow immediately and
             the incoming one stays centred instead of being shoved sideways. */
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <Motion.img
              key={images[index]}
              src={images[index]}
              alt={`${title}, screen ${index + 1} of ${count}`}
              className={imageClass}
              custom={direction}
              variants={screenVariants}
              initial="enter"
              animate="center"
              exit="exit"
            />
          </AnimatePresence>
        )}
      </div>

      <div
        className="flex items-center justify-center gap-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" onClick={() => go(-1)} className={controlClass} disabled={count < 2}>
          ‹ Prev
        </button>
        <span className="font-mono text-mono-meta text-[var(--ink-400)]">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
        <button type="button" onClick={() => go(1)} className={controlClass} disabled={count < 2}>
          Next ›
        </button>
      </div>
    </Motion.div>,
    document.body
  );
}
