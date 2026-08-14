import React from 'react';
import Container from './ui/Container';
import { site } from '../data';

export default function Footer() {
  return (
    <Container>
      <footer className="flex flex-wrap justify-between gap-lg border-t border-hairline pb-2xl pt-xl font-mono text-mono-meta text-ink-3">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Instrument Serif · Geist · Geist Mono</span>
        <span>Designed in Figma · Built with React &amp; Vite</span>
      </footer>
    </Container>
  );
}
