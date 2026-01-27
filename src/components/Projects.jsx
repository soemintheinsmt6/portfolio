import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ExternalLink, Image } from 'lucide-react';
import { projects } from '../data';
import { useTheme } from '../core/theme/ThemeContext';

// Import all project images
const projectImages = import.meta.glob('../assets/images/*', { eager: true, import: 'default' });

function getProjectImage(imageName) {
  if (!imageName) return null;
  const key = `../assets/images/${imageName}`;
  return projectImages[key] || null;
}

export default function Projects() {
  const { theme } = useTheme();
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
          Notable <span className={theme.classes.gradientText}>Projects</span>
        </motion.h2>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => {
            const imageUrl = getProjectImage(project.image);
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="group"
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                  {/* Image Section - Clickable */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className={`relative aspect-video rounded-xl overflow-hidden ${theme.colors.background.secondary} shadow-2xl cursor-pointer group/image`}>
                          {imageUrl ? (
                            <img
                              src={imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Image className={`w-16 h-16 ${theme.colors.text.tertiary} opacity-30`} />
                            </div>
                          )}
                          {/* Hover overlay with icon */}
                          <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/30 transition-all duration-300 flex items-center justify-center">
                            <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity duration-300" />
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className={`relative aspect-video rounded-xl overflow-hidden ${theme.colors.background.secondary} shadow-2xl`}>
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Image className={`w-16 h-16 ${theme.colors.text.tertiary} opacity-30`} />
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2">
                    {/* Type and Year */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${theme.classes.buttonGradient} shadow-sm`}>
                        <Smartphone className="w-3.5 h-3.5" />
                        {project.type}
                      </span>
                      <span className={`${theme.colors.text.tertiary}`}>•</span>
                      <span className={`text-sm ${theme.colors.text.secondary} font-medium`}>
                        {project.year}
                      </span>
                    </div>

                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${theme.colors.text.primary}`}>
                      {project.title}
                    </h3>

                    <p className={`${theme.colors.text.secondary} mb-6 text-base leading-relaxed`}>
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-5">
                      <p className={`text-xs uppercase tracking-wider ${theme.colors.text.tertiary} mb-2 font-semibold`}>Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1.5 rounded-full border ${theme.colors.border.card} ${theme.colors.badge.accent} ${theme.colors.badge.accentText}`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <p className={`text-xs uppercase tracking-wider ${theme.colors.text.tertiary} mb-2 font-semibold`}>Tech Stack</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1.5 rounded-full ${theme.colors.badge.default} ${theme.colors.text.secondary}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
            className={`inline-flex items-center gap-3 px-8 py-3 ${theme.colors.background.cardHover} hover:${theme.colors.button.secondaryHover} rounded-full ${theme.colors.text.primary} font-semibold transition-colors ${theme.colors.border.card}`}
          >
            Many more on GitHub
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297a12 12 0 0 0-3.793 23.393c.6.111.793-.261.793-.58v-2.256c-3.338.726-4.04-1.416-4.04-1.416-.546-1.389-1.333-1.76-1.333-1.76-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.371.815 1.102.815 2.222v3.293c0 .322.192.694.8.576A12 12 0 0 0 12 .297z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
