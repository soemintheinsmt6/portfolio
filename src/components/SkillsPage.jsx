import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Skills from './Skills';

export default function SkillsPage() {
  const goBack = () => {
    if (typeof window === 'undefined') return;
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-900 to-slate-900 text-white">
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <motion.button
              onClick={goBack}
              className="px-4 py-2 rounded-full bg-slate-800/60 border border-purple-500/20 text-gray-200 inline-flex items-center gap-2"
              aria-label="Back to Portfolio"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Back to Portfolio</span>
            </motion.button>
          </div>
          <Skills />
        </div>
      </section>
    </div>
  );
}
