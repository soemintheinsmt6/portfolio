import React from 'react';
import Container from './ui/Container';
import { site } from '../data';

export default function Footer() {
  return (
    <Container>
      <footer className="flex flex-wrap items-center justify-between gap-lg border-t border-hairline pb-2xl pt-xl font-mono text-mono-meta text-ink-3">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <a
          href={site.source}
          target="_blank"
          rel="noreferrer noopener"
          className="rounded-sm transition-colors duration-200 hover:text-accent-text"
        >
          Source <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </Container>
  );
}
