import React from 'react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { site } from '../data';

export default function About() {
  const { statement, paragraphs, facts } = site.about;

  return (
    <Section id="about">
      <SectionHeader index="02" eyebrow="About" title="Approach" />

      <div className="grid grid-cols-1 items-start gap-2xl lg:grid-cols-2 lg:gap-4xl">
        <Reveal>
          {/* Display type breaks where the copy says, not where the browser
              decides — each part of the statement is its own line. */}
          <p className="font-display text-heading-l sm:text-display-m">
            <span className="block">{statement.lead.trim()}</span>
            <span className="block italic text-accent-text">{statement.emphasis}</span>
            <span className="block">{statement.trail.trim()}</span>
          </p>

          {/* Set as a plate: hairline frame, rule, mono caption. Square frame
              matches the source, so the photograph is shown uncropped. It
              carries its own reveal, a beat behind the statement — the plate is
              a separate thought, and the two rising as one block feels heavy. */}
          <Reveal as="figure" delay={0.12} className="m-0 mt-2xl w-full max-w-[320px]">
            <img
              src={site.portrait}
              alt={site.name}
              width="320"
              height="320"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-sm border border-hairline object-cover"
            />
            <figcaption className="mt-sm flex items-center gap-sm border-t border-hairline pt-sm font-mono text-mono-meta text-ink-3">
              <span className="h-px w-lg bg-accent" aria-hidden="true" />
              {site.name}, {site.role}
            </figcaption>
          </Reveal>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-col gap-lg text-body-m text-ink-2">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-xl flex flex-col">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center justify-between gap-lg border-t border-hairline py-sm"
              >
                <dt className="font-mono text-mono-label font-medium uppercase text-ink-3">
                  {fact.label}
                </dt>
                <dd className="m-0 text-right text-body-s">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
