import React from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { DURATION, EASE_OUT, RISE, VIEWPORT, riseIn, staggerParent } from '../../core/motion';

/**
 * Restrained scroll reveal: a short rise and fade, once.
 * The type does the work — motion should never announce itself here.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  y = RISE,
  className = '',
  children,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = Motion[as] || Motion.div;

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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.slow, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Reveals its <Item> descendants as a cascade instead of all at once.
 *
 * Only for groups that enter the viewport together — a hero, a two-column
 * grid, a row of stats. A long list should stay on plain <Reveal>s so each row
 * triggers at its own scroll position, rather than animating off screen while
 * the visitor is still reading the top of it.
 */
export function Stagger({ as = 'div', each = 0.06, delay = 0, className = '', children, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = Motion[as] || Motion.div;

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
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={staggerParent(each, delay)}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/** One step of a <Stagger>. Takes its timing from the parent. */
export function StaggerItem({ as = 'div', className = '', children, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = Motion[as] || Motion.div;

  if (prefersReducedMotion) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag className={className} variants={riseIn} {...rest}>
      {children}
    </MotionTag>
  );
}
