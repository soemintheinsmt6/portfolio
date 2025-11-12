import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTheme } from '../core/theme/ThemeContext';

function GitHubIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297a12 12 0 0 0-3.793 23.393c.6.111.793-.261.793-.58v-2.256c-3.338.726-4.04-1.416-4.04-1.416-.546-1.389-1.333-1.76-1.333-1.76-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.371.815 1.102.815 2.222v3.293c0 .322.192.694.8.576A12 12 0 0 0 12 .297z"/>
    </svg>
  );
}

function LinkedInIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.451 20.451h-3.554v-5.569c0-1.329-.027-3.038-1.852-3.038-1.853 0-2.136 1.447-2.136 2.943v5.664H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.604 0 4.27 2.372 4.27 5.456v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.451H3.558V9h3.556v11.451zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078V12.07h3.047V9.412c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.954.93-1.954 1.887v2.252h3.328l-.532 3.492h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
    </svg>
  );
}

export default function Contact() {
  const { theme } = useTheme();
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-8"
          transition={{ duration: 1 }}
        >
          Let's <span className={theme.classes.gradientText}>Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-lg ${theme.colors.text.primary} mb-12`}
          transition={{ duration: 0.8, delay: 0.18 }}
        >
          I'm always open to discussing new projects, creative ideas and opportunities to be part of your visions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
          transition={{ duration: 0.7, delay: 0.27 }}
        >
          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:soeminthein020@gmail.com"
            className={`flex items-center gap-2 px-8 py-4 ${theme.colors.button.gradient} rounded-full text-lg font-semibold ${theme.colors.text.primary} hover:shadow-lg transition-shadow`}
          >
            <Mail className="w-6 h-6" />
            Email Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/soemintheinsmt6"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-8 py-4 ${theme.colors.button.secondary} rounded-full text-lg font-semibold ${theme.colors.button.secondaryHover} transition-colors`}
          >
            <GitHubIcon className="w-6 h-6" />
            GitHub
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://linkedin.com/in/soemin-thein"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-8 py-4 ${theme.colors.button.secondary} rounded-full text-lg font-semibold ${theme.colors.button.secondaryHover} transition-colors`}
          >
            <LinkedInIcon className="w-6 h-6" />
            LinkedIn
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.facebook.com/soemin.thein.16696"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-8 py-4 ${theme.colors.button.secondary} rounded-full text-lg font-semibold ${theme.colors.button.secondaryHover} transition-colors`}
          >
            <FacebookIcon className="w-6 h-6" />
            Facebook
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`mt-12 ${theme.colors.text.tertiary}`}
        >
          <p>📍 Developing Apps from the place that feels like Home</p>
        </motion.div>
      </div>
    </section>
  );
}


