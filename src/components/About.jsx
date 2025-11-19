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
              Hi, my name is Soe Min Thein. I’m a mobile developer experienced in designing, building and maintaining high-quality mobile applications. I focus on creating reusable, efficient code and crafting user-centered experiences that turn ideas into smooth, intuitive products.
            </p>
            <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
              I work extensively with Swift, UIKit, SwiftUI and Flutter, and I enjoy contributing to open-source projects within the mobile development ecosystem.
            </p>
            <p className={`text-lg ${theme.colors.text.primary} leading-relaxed`}>
              Besides coding, I'm also a footballer who enjoys playing competitively in my free time!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


