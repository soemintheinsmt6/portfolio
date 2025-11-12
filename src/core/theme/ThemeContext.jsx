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
    // Try to get theme from localStorage, fallback to default
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      return saved && themes[saved] ? saved : defaultTheme;
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

