import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, defaultTheme } from './themes';

const ThemeContext = createContext({
  theme: themes[defaultTheme],
  themeName: defaultTheme,
  setTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    if (typeof window !== 'undefined') {
      // Use saved preference if it exists
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && themes[saved]) return saved;
      // HIG: Auto-detect system color scheme on first visit
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'amethyst' : 'minimalist';
    }
    return defaultTheme;
  });

  const setTheme = (name) => {
    if (themes[name]) {
      setThemeName(name);
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', name);
      }
    }
  };

  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ theme, themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

