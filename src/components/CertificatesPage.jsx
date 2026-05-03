import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft, Award } from 'lucide-react';
import { certificates } from '../data';
import { CATEGORIES } from '../data/certificates';
import { useTheme } from '../core/theme/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function CertificatesPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const goBack = () => {
    sessionStorage.setItem('scrollToSection', 'certificates');
    navigate('/');
  };

  const availableCategories = useMemo(
    () => CATEGORIES.filter((c) => c.id === 'all' || certificates.some((cert) => cert.category === c.id)),
    []
  );

  const filtered = useMemo(
    () => (activeCategory === 'all' ? certificates : certificates.filter((c) => c.category === activeCategory)),
    [activeCategory]
  );

  return (
    <div className={`min-h-screen ${theme.colors.background.main} ${theme.colors.text.primary}`}>
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative mb-8">
            <motion.button
              onClick={goBack}
              className={`absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full ${theme.colors.background.card} ${theme.colors.border.card} ${theme.colors.text.secondary} inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300`}
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Back to Home</span>
            </motion.button>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl md:text-4xl font-bold text-center"
            >
              All <span className={theme.classes.gradientText}>Certificates</span>
            </motion.h2>

            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <ThemeSwitcher />
            </div>
          </div>

          <div className="flex flex-wrap justify-start md:justify-center gap-2 mb-8">
            {availableCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border border-blue-200'
                      : `${theme.colors.background.card} ${theme.colors.text.secondary} ${theme.colors.border.card}`
                  }`}
                  aria-pressed={isActive}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filtered.map((cert, idx) => (
              <motion.div
                key={cert.id || idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.18, duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className={theme.classes.card + ' p-5 group relative overflow-hidden'}
              >
                {/* Desktop: clickable overlay */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block absolute inset-0 z-10"
                    aria-label={`View ${cert.title}`}
                  />
                )}

                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${theme.colors.background.secondary} group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <Award className={`w-5 h-5 ${theme.colors.text.link}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className={`text-xl font-semibold mb-1 ${theme.colors.text.primary}`}>{cert.title}</h3>
                        <p className={`${theme.colors.text.secondary}`}>{cert.issuer}</p>
                      </div>
                      {/* Desktop: hover icon indicator */}
                      {cert.link && (
                        <ExternalLink className={`hidden md:block w-5 h-5 ${theme.colors.text.tertiary} opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`} />
                      )}
                    </div>

                    {/* Mobile: inline link - aligned with title */}
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`md:hidden mt-3 inline-flex items-center gap-1 text-sm ${theme.colors.text.link}`}
                      >
                        View Certificate <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
