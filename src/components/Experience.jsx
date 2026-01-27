import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { useTheme } from '../core/theme/ThemeContext';
import collaborateIllustration from '../assets/Illustrations/colloborate.svg';

function ExperienceCard({ exp, index }) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const hasMore = exp.achievements.length > 2;
  const mobileVisible = expanded ? exp.achievements : exp.achievements.slice(0, 2);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.7 }}
      whileHover={{ scale: 1.02 }}
      className={theme.classes.card + ' p-8'}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${theme.colors.text.accent} mb-2`}>{exp.title}</h3>
          <p className={`text-xl ${theme.colors.text.secondary}`}>{exp.company}</p>
        </div>
        <span className={`${theme.colors.text.accentSecondary} font-semibold mt-2 md:mt-0`}>{exp.period}</span>
      </div>
      <p className={`${theme.colors.text.tertiary} mb-4`}>{exp.description}</p>

      {/* Mobile: truncated to 2 with See more inline */}
      <ul className="space-y-2 md:hidden">
        {mobileVisible.map((achievement, i) => {
          const isLastVisible = i === mobileVisible.length - 1;
          return (
            <li key={i} className={`flex items-start gap-2 ${theme.colors.text.secondary}`}>
              <span className={theme.colors.text.accent}>▹</span>
              <span className="inline">
                {achievement}
                {!expanded && hasMore && isLastVisible && (
                  <button
                    type="button"
                    onClick={() => setExpanded(true)}
                    className={`${theme.colors.text.accent} italic`}
                  >
                    ...See more
                  </button>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Desktop and up: show all */}
      <ul className="space-y-2 hidden md:block">
        {exp.achievements.map((achievement, i) => (
          <li key={i} className={`flex items-start gap-2 ${theme.colors.text.secondary}`}>
            <span className={theme.colors.text.accent}>▹</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  const { theme } = useTheme();
  return (
    <section id="experience" className={`py-20 px-4 ${theme.colors.background.section}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          transition={{ duration: 1 }}
        >
          Professional <span className={theme.classes.gradientText}>Journey</span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          <motion.div
            className="w-full lg:w-80 xl:w-96 lg:sticky lg:top-24 hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={collaborateIllustration}
              alt="Collaboration illustration"
              className="w-full h-auto"
            />
          </motion.div>
          <div className="space-y-8 flex-1">
            {experience.map((exp, index) => (
              <ExperienceCard key={exp.id || index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


