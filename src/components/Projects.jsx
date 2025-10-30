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
          transition={{ duration: 0.6 }}
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
              transition={{ delay: index * 0.2, duration: 0.8 }}
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
      </div>
    </section>
  );
}


