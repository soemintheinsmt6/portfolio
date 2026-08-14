import { createContext, useContext } from 'react';

export const STORAGE_KEY = 'portfolio-theme';
export const THEMES = ['light', 'dark'];

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: () => {},
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
