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
          className="group rounded-sm transition-colors duration-200 hover:text-accent-text"
        >
          Source{' '}
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px"
          >
            ↗
          </span>
        </a>
      </footer>
    </Container>
  );
}
