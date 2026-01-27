import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { useTheme } from '../core/theme/ThemeContext';
import developerAnimation from '../assets/Illustrations/developer.json';

export default function About() {
  const { theme } = useTheme();
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center`}>
            About <span className={theme.classes.gradientText}>Me</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className={theme.classes.card + ' p-8 flex-1'}>
              <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
                Hi, my name is Soe Min Thein. I'm a mobile developer experienced in designing, building and maintaining high-quality mobile applications. I focus on creating reusable, efficient code and crafting user-centered experiences that turn ideas into smooth, intuitive products.
              </p>
              <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
                I work extensively with Swift, UIKit, SwiftUI and Flutter, and I enjoy contributing to open-source projects within the mobile development ecosystem.
              </p>
              <p className={`text-lg ${theme.colors.text.primary} leading-relaxed`}>
                Besides coding, I'm also a footballer who enjoys playing competitively in my free time!
              </p>
            </div>
            <motion.div
              className="w-full md:w-80 lg:w-96"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Lottie
                animationData={developerAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


