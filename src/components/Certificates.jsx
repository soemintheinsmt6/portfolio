import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Award } from 'lucide-react';
import { certificates } from '../data';
import { useTheme } from '../core/theme/ThemeContext';
import CertificationIllustrationUrl from '../assets/Illustrations/certification.svg?url';

export default function Certificates() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const visible = certificates.slice(0, 5);
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch(CertificationIllustrationUrl)
      .then(res => res.text())
      .then(text => setSvgContent(text))
      .catch(err => console.error('Failed to load SVG:', err));
  }, []);

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Professional <span className={theme.classes.gradientText}>Certificates</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className={`text-center ${theme.colors.text.secondary} mb-12 max-w-2xl mx-auto`}
        >
          Recognized achievements and certifications
        </motion.p>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Certification Illustration - Under title on mobile, left side on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xs mx-auto lg:mx-0 lg:w-2/5 flex justify-center"
            dangerouslySetInnerHTML={{ __html: svgContent }}
            style={{ maxWidth: '400px' }}
          />

          {/* Certificate Cards - Right side on desktop */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {visible.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`${theme.classes.card} p-5 group cursor-pointer block`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${theme.colors.background.secondary} group-hover:scale-110 transition-transform`}>
                      <Award className={`w-5 h-5 ${theme.colors.text.link}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold mb-1 ${theme.colors.text.primary} line-clamp-2`}>
                        {cert.title}
                      </h3>
                      <p className={`text-sm ${theme.colors.text.secondary} mb-2`}>
                        {cert.issuer}
                      </p>
                      <span className={`inline-flex items-center gap-1 text-sm ${theme.colors.text.link} group-hover:gap-2 transition-all`}>
                        View <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* See More Card - 6th item in 2x3 grid */}
              {certificates.length > 5 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  onClick={() => navigate('/certificates')}
                  className={`${theme.classes.card} p-5 group cursor-pointer block`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${theme.colors.background.secondary} group-hover:scale-110 transition-transform`}>
                      <ArrowRight className={`w-5 h-5 ${theme.colors.text.link}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-semibold mb-1 ${theme.colors.text.primary}`}>
                        View All Certificates
                      </h3>
                      <p className={`text-sm ${theme.colors.text.secondary} mb-2`}>
                        View the full list of certificates
                      </p>
                      <span className={`inline-flex items-center gap-1 text-sm ${theme.colors.text.link} group-hover:gap-2 transition-all`}>
                        See more <ExternalLink className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
