import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ExternalLink } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Notable <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.18, duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-purple-400" />
                  <span className="text-sm text-pink-400 font-semibold">{project.type}</span>
                </div>
                <span className="text-sm text-gray-400">{project.year}</span>
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Key Features:</p>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-slate-700 text-gray-300 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="https://github.com/soemintheinsmt6"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-3 bg-slate-800/80 hover:bg-slate-700 rounded-full text-white font-semibold transition-colors border border-purple-500/20"
          >
            Many more on GitHub
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297a12 12 0 0 0-3.793 23.393c.6.111.793-.261.793-.58v-2.256c-3.338.726-4.04-1.416-4.04-1.416-.546-1.389-1.333-1.76-1.333-1.76-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.371.815 1.102.815 2.222v3.293c0 .322.192.694.8.576A12 12 0 0 0 12 .297z"/>
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


