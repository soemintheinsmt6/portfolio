import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { useTheme } from '../core/theme/ThemeContext';

export default function Skills({ useSectionBackground = true }) {
  const { theme } = useTheme();
  const backgroundColor = useSectionBackground ? theme.colors.background.section : 'bg-transparent';

  return (
    <section id="skills" className={`py-20 px-4 ${backgroundColor}`}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          transition={{ duration: 1 }}
        >
          Technical <span className={theme.classes.gradientText}>Skills</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-center ${theme.colors.text.secondary} mb-12 max-w-2xl mx-auto`}
        >
          Technologies and tools I work with
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.13, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className={theme.classes.card + ' p-6'}
            >
              <h3 className={`text-xl font-bold ${theme.colors.text.accent} mb-4`}>{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className={`text-sm px-3 py-1 ${theme.colors.badge.default} ${theme.colors.text.primary} rounded-full ${theme.colors.badge.hoverGradient} transition-colors cursor-default`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className={`text-2xl font-bold mb-8 ${theme.colors.text.primary}`}>Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Problem Solving', 'Critical Thinking', 'Team Work', 'Attention to Detail', 'Time Management'].map((skill, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className={`px-4 py-2 ${theme.colors.button.gradient} ${theme.colors.text.primary} rounded-full font-semibold cursor-default`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


