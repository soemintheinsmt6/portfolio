import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Wrench, Award, Mail } from 'lucide-react';
import { useTheme } from '../core/theme/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

// HIG: Bottom tab bar items with icons for always-visible mobile navigation
const tabItems = [
  { label: 'Home', id: 'home', Icon: Home },
  { label: 'About', id: 'about', Icon: User },
  { label: 'Work', id: 'experience', Icon: Briefcase },
  { label: 'Projects', id: 'projects', Icon: FolderOpen },
  { label: 'Skills', id: 'skills', Icon: Wrench },
  { label: 'Certs', id: 'certificates', Icon: Award },
  { label: 'Contact', id: 'contact', Icon: Mail },
];

export default function Nav({ activeSection, onNavigate }) {
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

  const desktopItems = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certificates', 'Contact'];
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Desktop: Top navigation bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
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
              {desktopItems.map((item) => (
                <motion.button
                  key={item}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className={`px-4 py-2 border-none bg-transparent outline-none focus:outline-none ${activeSection === item.toLowerCase()
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

            {/* Mobile: only show logo + theme switcher in top bar */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile: HIG-style bottom tab bar — always visible */}
      <nav
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${theme.colors.background.nav} backdrop-blur-lg border-t ${theme.colors.border.nav}`}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <div className="flex justify-around items-center h-14">
          {tabItems.map(({ label, id, Icon }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] px-1 py-1 border-none bg-transparent outline-none focus:outline-none transition-colors ${
                  isActive ? theme.classes.activeNav : theme.colors.text.secondary
                }`}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] mt-0.5 leading-tight">{label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
