import React from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../core/motion';
import { useTheme } from '../core/theme/useTheme';

/** Mono text toggle — names the theme you'd switch to, not the one you're in. */
export default function ThemeSwitcher({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const next = theme === 'dark' ? 'Light' : 'Dark';

  const classes = `rounded-sm p-xs font-mono text-mono-label font-medium uppercase text-ink-3 transition-colors duration-200 hover:text-ink ${className}`;

  if (prefersReducedMotion) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${next.toLowerCase()} theme`}
        className={classes}
      >
        {next}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next.toLowerCase()} theme`}
      /* The label is swapped out from under itself: the box is held at the width
         of the wider word so the nav doesn't twitch, and clipped so the outgoing
         word leaves rather than fades in place. */
      className={`${classes} relative inline-grid min-w-[52px] place-items-center overflow-hidden`}
    >
      <AnimatePresence initial={false} mode="popLayout">
        <Motion.span
          key={next}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.18, ease: EASE_OUT }}
        >
          {next}
        </Motion.span>
      </AnimatePresence>
    </button>
  );
}
