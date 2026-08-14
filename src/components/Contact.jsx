import React from 'react';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import { site } from '../data';

export default function Contact() {
  return (
    <section id="contact" className="py-4xl md:py-6xl">
      <Container>
        <Reveal>
          <hr className="m-0 mb-2xl h-px border-0 bg-ink md:mb-4xl" />
          <span className="font-mono text-mono-label font-medium uppercase text-accent-text">
            06 — Contact
          </span>
          <h2 className="mt-lg max-w-[14ch] font-display text-display-m md:text-display-l">
            {site.contact.lead}
            <span className="italic">{site.contact.emphasis}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          {site.availability ? (
            <p className="mt-xl max-w-lead text-body-m text-ink-2 md:text-body-l">
              {site.availability}
            </p>
          ) : null}

          <a
            href={`mailto:${site.email}`}
            className="mt-2xl inline-block break-all border-b-2 border-accent pb-2xs text-heading-m transition-colors duration-200 hover:text-accent-text md:text-heading-l"
          >
            {site.email}
          </a>

          <div className="mt-3xl flex flex-wrap gap-xl font-mono text-mono-label font-medium uppercase">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-2 transition-colors duration-200 hover:text-accent-text"
            >
              GitHub ↗
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-2 transition-colors duration-200 hover:text-accent-text"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
