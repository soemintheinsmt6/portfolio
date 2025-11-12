import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../core/theme/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function Nav({ activeSection, onNavigate, mobileMenuOpen, setMobileMenuOpen }) {
  const { theme } = useTheme();
  const items = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certificates', 'Contact'];
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full ${theme.colors.background.nav} backdrop-blur-lg z-50 ${theme.classes.navBorder}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${theme.classes.gradientText} cursor-pointer`}
            onClick={() => onNavigate('home')}
          >
            Soeminthein
          </motion.div>

          <div className="hidden md:flex items-center space-x-2">
            {items.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase()
                    ? theme.classes.activeNav
                    : `${theme.colors.text.secondary} hover:${theme.colors.text.primary}`
                } transition-colors`}
              >
                {item}
              </motion.button>
            ))}
            <ThemeSwitcher />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeSwitcher />
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className={theme.colors.text.primary} /> : <Menu className={theme.colors.text.primary} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden ${theme.colors.background.mobileMenu} border-t ${theme.colors.border.nav}`}
        >
          <div className="px-4 py-4 space-y-3">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`block w-full text-left px-4 py-2 ${theme.colors.text.secondary} hover:${theme.colors.text.primary} hover:${theme.colors.background.cardHover} rounded-lg transition-colors`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}


