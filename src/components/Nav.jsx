import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../core/theme/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function Nav({ activeSection, onNavigate, mobileMenuOpen, setMobileMenuOpen }) {
  const { theme } = useTheme();
  // Inject signature-style font (Great Vibes) once when component mounts
  useEffect(() => {
    const id = 'signature-font-great-vibes';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Pacifico&display=swap';
      document.head.appendChild(link);
    }
  }, []);
  const items = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certificates', 'Contact'];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,   // delay between each item
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

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
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Soeminthein
          </motion.div>

          <motion.div
            className="hidden md:flex items-center space-x-2"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {items.map((item) => (
              <motion.button
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`px-4 py-2 border-none bg-transparent ${activeSection === item.toLowerCase()
                  ? theme.classes.activeNav
                  : `${theme.colors.text.secondary} hover:${theme.colors.text.primary}`
                  } transition-colors`}
              >
                {item}
              </motion.button>
            ))}
            <motion.div variants={itemVariants}>
              <ThemeSwitcher />
            </motion.div>
          </motion.div>


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
                className={`block w-full text-left px-4 py-2 ${theme.colors.text.secondary} hover:${theme.colors.text.primary} transition-colors`}
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


