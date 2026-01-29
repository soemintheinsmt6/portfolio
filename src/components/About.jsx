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
            <motion.div
              className="w-full max-w-xs mx-auto md:mx-0 md:w-80 lg:w-96 md:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Lottie
                animationData={developerAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: 'auto' }}
              />
            </motion.div>
            <div className="p-8 flex-1 md:order-1">
              <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
                Hi, my name is <strong>Soe Min Thein</strong>. I'm a <strong>Mobile Developer</strong> experienced in designing, building and maintaining high-quality mobile applications. I focus on creating <strong>reusable, efficient code</strong> and crafting <strong>user-centered experiences</strong> that turn ideas into smooth, intuitive products.
              </p>
              <p className={`text-lg ${theme.colors.text.primary} leading-relaxed mb-6`}>
                I work extensively with <strong>Swift</strong>, <strong>UIKit</strong>, <strong>SwiftUI</strong> and <strong>Flutter</strong>, and I enjoy contributing to <strong>open-source projects</strong> within the mobile development ecosystem.
              </p>
              <p className={`text-lg ${theme.colors.text.primary} leading-relaxed`}>
                Besides coding, I'm also a <strong>footballer</strong> who enjoys playing competitively in my free time!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


