import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Restrained scroll reveal: a short rise and fade, once.
 * The type does the work — motion should never announce itself here.
 */
export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
