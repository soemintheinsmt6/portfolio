import React from 'react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { site } from '../data';

export default function About() {
  const { statement, paragraphs, facts } = site.about;

  return (
    <Section id="about">
      <SectionHeader index="02" eyebrow="About" title="Approach" meta={site.location} />

      <div className="grid grid-cols-1 items-start gap-2xl md:grid-cols-2 md:gap-4xl">
        <Reveal>
          <p className="max-w-[18ch] font-display text-display-m">
            {statement.lead}
            <span className="italic text-accent-text">{statement.emphasis}</span>
            {statement.trail}
          </p>
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
                className="flex justify-between gap-lg border-t border-hairline py-sm"
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
