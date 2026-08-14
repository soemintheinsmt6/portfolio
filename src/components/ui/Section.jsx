import React from 'react';
import Container from './Container';

/** Standard section rhythm — sections read as chapters, not cards. */
export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`py-4xl md:py-6xl ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
