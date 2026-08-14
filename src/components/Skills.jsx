import React from 'react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { TagRow } from './ui/Tag';
import { skills } from '../data';

export default function Skills({ className = '' }) {
  return (
    <Section id="skills" className={className}>
      <SectionHeader
        index="04"
        eyebrow="Skills"
        title="What I work with"
        meta={`${skills.length} disciplines`}
      />

      <div className="grid grid-cols-1 gap-2xl md:grid-cols-2 md:gap-3xl md:gap-x-4xl">
        {skills.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.04}>
            <div className="flex flex-col gap-md border-t border-hairline pt-md">
              <span className="font-mono text-mono-label font-medium text-ink-3">
                {group.category}
              </span>
              <TagRow items={group.items} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
