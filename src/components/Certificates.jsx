import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certificates } from '../data';

export default function Certificates() {
  const visible = certificates.slice(0, 5);

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Professional <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certificates</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{cert.title}</h3>
              <p className="text-gray-300 mb-4">{cert.issuer}</p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
              >
                View Certificate <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          ))}

          {/* See More card - acts like a certificate card and navigates to the full certificates page */}
          {certificates.length > 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -4 }}
              onClick={() => { window.location.href = '/certificates'; }}
              className="cursor-pointer flex items-center justify-center text-center bg-slate-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gray-400"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">See More</h3>
                <p className="text-gray-300">View the full list of certificates</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}


