import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              A passionate mobile developer with over 5 years of experience in designing, developing, and maintaining mobile applications. I specialize in creating reusable and efficient code with a strong focus on enhancing user experiences and delivering innovative mobile solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently working on mobile app development projects using Swift, UIKit, SwiftUI, and Flutter. I'm proficient in various mobile development frameworks and always eager to collaborate on open-source projects related to mobile development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Fun fact: Besides coding, I'm also a footballer who enjoys playing competitively in my free time! ⚽
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


