import React from 'react';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import { fastTransition } from '../../core/motion';

const VARIANTS = {
  primary:
    'bg-action text-action-text border-transparent hover:bg-accent-hover hover:border-accent-hover hover:text-white',
  secondary: 'border-strong text-ink hover:border-ink',
  ghost: 'border-transparent text-ink hover:text-accent-text px-0',
};

const SIZES = {
  m: 'px-xl py-md',
  s: 'px-lg py-sm',
};

/**
 * A boxed button lifts by a hair and settles under the press; a ghost button is
 * really a text link with an arrow, so it steps sideways instead — the direction
 * it would take you.
 */
const GESTURES = {
  primary: { whileHover: { y: -1 }, whileTap: { y: 0, scale: 0.985 } },
  secondary: { whileHover: { y: -1 }, whileTap: { y: 0, scale: 0.985 } },
  ghost: { whileHover: { x: 2 }, whileTap: { x: 0 } },
};

/**
 * Figma: Button — Style=Primary|Secondary|Ghost, Size=M|S.
 * Renders an anchor when `href` is set, otherwise a button.
 */
export default function Button({
  variant = 'primary',
  size = 'm',
  href,
  className = '',
  children,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();

  const classes = [
    'inline-flex items-center gap-xs rounded-sm border',
    'font-sans text-label-m font-medium',
    'transition-colors duration-200',
    SIZES[size],
    VARIANTS[variant],
    className,
  ].join(' ');

  const gestures = prefersReducedMotion ? {} : { ...GESTURES[variant], transition: fastTransition };

  if (href) {
    return (
      <Motion.a href={href} className={classes} {...gestures} {...rest}>
        {children}
      </Motion.a>
    );
  }

  return (
    <Motion.button type="button" className={classes} {...gestures} {...rest}>
      {children}
    </Motion.button>
  );
}
