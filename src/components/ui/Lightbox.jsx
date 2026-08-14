import React, { useCallback, useEffect, useRef } from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';

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
  const count = images.length;

  const go = useCallback(
    (delta) => onIndexChange((index + delta + count) % count),
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

  return (
    <Motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — app screens`}
      className="fixed inset-0 z-[100] flex flex-col gap-lg p-lg md:p-2xl"
      /* night/900 at 94% — a literal because opacity modifiers can't apply to var() colours */
      style={{ backgroundColor: 'rgba(16, 15, 13, 0.94)' }}
      onClick={onClose}
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
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
        <img
          key={images[index]}
          src={images[index]}
          alt={`${title}, screen ${index + 1} of ${count}`}
          className="max-h-full max-w-full rounded-[18px] object-contain"
        />
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
    </Motion.div>
  );
}
