import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { STORAGE_KEY, THEMES, ThemeContext } from './useTheme';

function readInitialTheme() {
  if (typeof document === 'undefined') return 'light';
  // The inline script in index.html already resolved this before first paint.
  const applied = document.documentElement.getAttribute('data-theme');
  if (THEMES.includes(applied)) return applied;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * The palette lives in CSS variables, and a variable swap repaints instantly —
 * every surface on the page flips in one frame. Flagging the root for the
 * length of the swap lets index.css cross-fade it instead. It's a class rather
 * than a permanent rule so that hover states keep their own, faster timing.
 */
const CROSSFADE_MS = 500; // matches --dur-slow
let crossfadeTimer;

function crossfadePalette() {
  if (typeof document === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const root = document.documentElement;
  root.classList.add('theme-switching');
  clearTimeout(crossfadeTimer);
  crossfadeTimer = setTimeout(() => root.classList.remove('theme-switching'), CROSSFADE_MS);
}

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Follow the OS while the visitor hasn't expressed a preference.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = (event) => {
      if (localStorage.getItem(STORAGE_KEY)) return;
      crossfadePalette();
      setThemeState(event.matches ? 'dark' : 'light');
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const setTheme = useCallback((next) => {
    if (!THEMES.includes(next)) return;
    crossfadePalette();
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode — the theme still applies for this session */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const value = useMemo(() => ({ theme, setTheme, toggleTheme }), [theme, setTheme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
