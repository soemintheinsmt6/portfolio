import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../core/theme/ThemeContext';

export default function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center`}>
            About <span className={theme.classes.gradientText}>Me</span>
          </h2>
          <div className={theme.classes.card + ' p-8'}>
            <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
              A passionate mobile developer with over 5 years of experience in designing, developing and maintaining mobile applications. I specialize in creating reusable and efficient code with a strong focus on enhancing user experiences and delivering innovative mobile solutions.
            </p>
            <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
              Currently working on mobile app development projects using Swift, UIKit, SwiftUI and Flutter. I'm proficient in various mobile development frameworks and always eager to collaborate on open-source projects related to mobile development.
            </p>
            <p className={`text-lg ${theme.colors.text.primary} leading-relaxed`}>
              Fun fact: Besides coding, I'm also a footballer who enjoys playing competitively in my free time!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


