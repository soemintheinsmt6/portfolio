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
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
        <div className="flex items-center gap-4">
          {exp.logo && (
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden flex-shrink-0">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )}
          <div>
            <h3 className={`text-2xl font-bold ${theme.colors.text.accent} mb-1`}>{exp.title}</h3>
            <p className={`text-xl ${theme.colors.text.secondary}`}>{exp.company}</p>
          </div>
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
            className="w-full max-w-xs mx-auto lg:mx-0 lg:w-80 xl:w-96 lg:sticky lg:top-24"
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
          {/* Timeline Container */}
          <div className="flex-1 relative">
            {/* Timeline Line - starts from first dot */}
            <div
              className={`absolute left-4 md:left-6 top-8 bottom-8 w-px hidden md:block ${theme.name === 'minimalist' ? 'bg-gray-300' : 'bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500/20'
                }`}
            />

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={exp.id || index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-6 top-8 -translate-x-1/2 z-10 hidden md:block">
                    <div
                      className={`w-3 h-3 rounded-full ${theme.name === 'minimalist'
                          ? 'bg-gray-400 ring-4 ring-gray-200'
                          : 'bg-gradient-to-r from-purple-400 to-pink-400 ring-4 ring-purple-500/20'
                        }`}
                    />
                  </div>

                  {/* Card with left padding for timeline */}
                  <div className="md:pl-12">
                    <ExperienceCard exp={exp} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


