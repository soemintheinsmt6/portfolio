import React from 'react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { rowDelay } from '../core/motion';
import { experience } from '../data';

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="03"
        eyebrow="Experience"
        title="Where I've built"
        meta="2019 — present"
      />

      <div className="border-b border-hairline">
        {experience.map((job, index) => (
          <Reveal key={job.id} delay={rowDelay(index)}>
            <article className="grid grid-cols-1 gap-md border-t border-hairline py-2xl md:grid-cols-[220px_1fr] md:gap-2xl">
              <div className="font-mono text-mono-meta text-ink-3">{job.period}</div>

              <div>
                <div className="flex flex-wrap items-baseline gap-sm">
                  <h3 className="text-heading-m">{job.title}</h3>
                  <span className="font-mono text-mono-label font-medium uppercase text-ink-3">
                    {job.company}
                  </span>
                </div>

                {/* The claim of the role, stated before the supporting detail —
                    so the ladder reads even if someone skims the bullets. */}
                {job.scope ? (
                  <p className="mt-sm flex items-baseline gap-sm text-body-s">
                    <span className="mt-[9px] h-px w-lg shrink-0 bg-accent" aria-hidden="true" />
                    <span>{job.scope}</span>
                  </p>
                ) : null}

                <ul className="mt-md flex flex-col gap-sm text-body-s text-ink-2">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="grid grid-cols-[16px_1fr] gap-xs">
                      <span aria-hidden="true" className="text-accent">
                        —
                      </span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
