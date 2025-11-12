import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Skills from './Skills';
import { useTheme } from '../core/theme/ThemeContext';

export default function SkillsPage() {
  const { theme } = useTheme();
  const goBack = () => {
    if (typeof window === 'undefined') return;
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className={`min-h-screen ${theme.colors.background.main} ${theme.colors.text.primary}`}>
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <motion.button
              onClick={goBack}
              className={`px-4 py-2 rounded-full ${theme.colors.background.card} ${theme.colors.border.card} ${theme.colors.text.secondary} inline-flex items-center gap-2`}
              aria-label="Back to Portfolio"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Back to Portfolio</span>
            </motion.button>
          </div>
          <Skills useSectionBackground={false} />
        </div>
      </section>
    </div>
  );
}
