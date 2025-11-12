import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { certificates } from '../data';
import { useTheme } from '../core/theme/ThemeContext';

export default function CertificatesPage() {
  const { theme } = useTheme();
  // Use a simple history-based back helper so this page doesn't require React Router context.
  const goBack = () => {
    if (typeof window === 'undefined') return;
    // Prefer going back in history if possible; otherwise navigate to root.
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className={`min-h-screen ${theme.colors.background.main} ${theme.colors.text.primary}`}>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <motion.button
              onClick={goBack}
              className={`absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full ${theme.colors.background.card} ${theme.colors.border.card} ${theme.colors.text.secondary} inline-flex items-center gap-2`}
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Back to Home</span>
            </motion.button>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold text-center"
            >
              All <span className={theme.classes.gradientText}>Certificates</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id || idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.18, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className={theme.classes.card + ' p-6'}
              >
                <h3 className={`text-xl font-semibold mb-2 ${theme.colors.text.primary}`}>{cert.title}</h3>
                <p className={`${theme.colors.text.secondary} mb-4`}>{cert.issuer}</p>
                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.95 }}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${theme.colors.text.link} hover:${theme.colors.text.linkHover}`}
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
