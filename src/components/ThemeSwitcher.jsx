import React from 'react';
import { useTheme } from '../core/theme/useTheme';

/** Mono text toggle — names the theme you'd switch to, not the one you're in. */
export default function ThemeSwitcher({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const next = theme === 'dark' ? 'Light' : 'Dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next.toLowerCase()} theme`}
      className={`rounded-sm p-xs font-mono text-mono-label font-medium uppercase text-ink-3 transition-colors duration-200 hover:text-ink ${className}`}
    >
      {next}
    </button>
  );
}
