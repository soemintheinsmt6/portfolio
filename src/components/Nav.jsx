import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Nav({ activeSection, onNavigate, mobileMenuOpen, setMobileMenuOpen }) {
  const items = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Certificates', 'Contact'];
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-lg z-50 border-b border-purple-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            Soeminthein
          </motion.div>

          <div className="hidden md:flex space-x-2">
            {items.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`${
                  activeSection === item.toLowerCase()
                    ? 'text-purple-400'
                    : 'text-gray-300 hover:text-white'
                } transition-colors`}
              >
                {item}
              </motion.button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 border-t border-purple-500/20"
        >
          <div className="px-4 py-4 space-y-3">
            {items.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
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


