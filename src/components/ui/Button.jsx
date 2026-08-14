import React from 'react';

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
  const classes = [
    'inline-flex items-center gap-xs rounded-sm border',
    'font-sans text-label-m font-medium',
    'transition-colors duration-200',
    SIZES[size],
    VARIANTS[variant],
    className,
  ].join(' ');

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
