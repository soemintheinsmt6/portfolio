import React from 'react';

/** Page gutter + 1200px measure — the Figma layout grid. */
export default function Container({ className = '', children, ...rest }) {
  return (
    <div className={`container-page ${className}`} {...rest}>
      {children}
    </div>
  );
}
