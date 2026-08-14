import React from 'react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import { TagRow } from './ui/Tag';
import { projects } from '../data';

/**
 * Figma: Project Row — numbered editorial list item.
 * A list beats a card grid here: it lets the flagship read as the flagship
 * and gives each description room to say something.
 */
function ProjectRow({ project, index }) {
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer noopener' }
    : {};

  return (
    <Reveal>
      <Wrapper
        {...wrapperProps}
        className="group grid grid-cols-[32px_1fr] items-start gap-md border-t border-hairline py-xl md:grid-cols-[48px_1fr_220px] md:gap-2xl"
      >
        <span className="pt-xs font-mono text-mono-meta text-ink-3 transition-colors duration-200 group-hover:text-accent-text">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex flex-col gap-md">
          <span className="flex items-center gap-sm">
            <h3 className="text-heading-m font-semibold md:text-heading-l">{project.title}</h3>
            {project.link ? (
              <span
                aria-hidden="true"
                className="translate-x-[-6px] text-heading-s text-accent opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
              >
                ↗
              </span>
            ) : null}
          </span>

          <p className="max-w-measure text-body-m text-ink-2">{project.description}</p>

          <TagRow items={project.tech} />
        </div>

        <div className="col-start-2 flex flex-row items-baseline gap-sm text-left md:col-start-3 md:flex-col md:items-end md:gap-xs md:text-right">
          <span className="font-mono text-mono-label font-medium uppercase">{project.platform}</span>
          <span className="font-mono text-mono-meta text-ink-3">{project.year}</span>
        </div>
      </Wrapper>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="work">
      <SectionHeader
        index="01"
        eyebrow="Selected work"
        title="Work"
        meta={`${projects.length} shipped products`}
      />
      <div className="border-b border-hairline">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
