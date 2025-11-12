import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Sparkles } from 'lucide-react';
import { useTheme } from '../core/theme/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, themeName, setTheme } = useTheme();

  const nextTheme = themeName === 'amethyst' ? 'minimalist' : 'amethyst';
  const Icon = themeName === 'amethyst' ? Palette : Sparkles;
  const label = `Switch to ${nextTheme} theme`;
  const title = `Current: ${themeName === 'amethyst' ? 'Amethyst' : 'Minimalist'} theme. Click to switch.`;

  const handleToggle = () => setTheme(nextTheme);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className={`relative px-3 py-2 rounded-full 
        ${theme.colors.background.card} 
        ${theme.colors.border.card} 
        ${theme.colors.text.secondary} 
        hover:${theme.colors.text.primary} 
        transition-colors inline-flex items-center gap-2`}
      aria-label={label}
      title={title}
    >
      <Icon className={`w-5 h-5 ${theme.colors.icon.primary}`} />
      <span className="hidden md:inline text-sm font-medium capitalize">
        {nextTheme}
      </span>
    </motion.button>
  );
}
