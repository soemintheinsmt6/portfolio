import React, { useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, ChevronDown, Mail } from 'lucide-react';
import { useTheme } from '../core/theme/ThemeContext';

const roles = ['Mobile Developer', 'iOS Developer', 'Flutter Developer', 'Software Engineer'];

export default function Hero() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]); // Start with full text
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  // Memoize particle configurations to prevent regeneration on re-renders
  const particles = useMemo(() =>
    [...Array(50)].map((_, i) => ({
      id: i,
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      yAnimation: Math.random() * 100 - 50,
      xAnimation: Math.random() * 100 - 50,
      scaleAnimation: Math.random() + 0.5,
      duration: Math.random() * 10 + 10,
    }))
    , []);

  // Delay the start of typewriter animation
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setIsAnimationStarted(true);
      setIsDeleting(true); // Start by deleting the first role
    }, 3000); // Wait 3 seconds before starting animation

    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!isAnimationStarted) return;

    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    if (!isDeleting && displayText === currentRole) {
      // Pause before starting to delete
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, isAnimationStarted]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute ${theme.colors.decorative.particle} rounded-full`}
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, particle.yAnimation],
              x: [0, particle.xAnimation],
              scale: [1, particle.scaleAnimation, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <motion.div style={{ opacity, scale }} className="text-center z-10 px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <div className={`w-32 h-32 mx-auto rounded-full ${theme.colors.decorative.gradientCircle} p-1`}>
            <div className={`w-full h-full rounded-full ${theme.colors.background.nav} flex items-center justify-center`}>
              <Code className={`w-16 h-16 ${theme.colors.icon.primary}`} />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          Soe Min Thein
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className={`text-2xl md:text-4xl mb-4 ${theme.classes.gradientText} font-medium h-10 md:h-14`}
        >
          <span>{displayText}</span>
          <span className="animate-pulse">|</span>
        </motion.div>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className={`text-lg md:text-xl ${theme.colors.text.secondary} mb-8 max-w-2xl mx-auto`}
        >
          Blending art and technology to craft meaningful digital experiences...
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:soeminthein020@gmail.com"
            className={`flex items-center gap-2 px-6 py-3 ${theme.classes.buttonPrimary} rounded-full transition-colors`}
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/soemintheinsmt6"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 ${theme.classes.buttonPrimary} rounded-full transition-colors`}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297a12 12 0 0 0-3.793 23.393c.6.111.793-.261.793-.58v-2.256c-3.338.726-4.04-1.416-4.04-1.416-.546-1.389-1.333-1.76-1.333-1.76-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.419-1.305.762-1.605-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.3-1.23 3.3-1.23.654 1.652.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.625-5.476 5.922.43.371.815 1.102.815 2.222v3.293c0 .322.192.694.8.576A12 12 0 0 0 12 .297z" />
            </svg>
            GitHub
          </motion.a>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className={`w-8 h-8 ${theme.colors.icon.primary}`} />
        </motion.div>
      </motion.div>
    </section>
  );
}


