import React from 'react';
import { useTheme } from '../core/theme/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-6 px-4 border-t ${theme.colors.footer.border} ${theme.colors.footer.background}`}>
      <div className={`max-w-6xl mx-auto text-center ${theme.colors.footer.text}`}>
        <p>&copy; 2025 Soe Min Thein. All right reserved.</p>
      </div>
    </footer>
  );
}


