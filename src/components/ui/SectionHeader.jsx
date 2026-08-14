import React from 'react';
import Reveal from './Reveal';

/**
 * Figma: Section Header — chapter marker.
 * Ink rule, vermilion eyebrow carrying the section index, serif title,
 * mono count set right.
 */
export default function SectionHeader({ index, eyebrow, title, meta }) {
  return (
    <Reveal className="mb-2xl flex flex-col gap-lg md:mb-4xl">
      <hr className="m-0 h-px border-0 bg-ink" />
      <div className="flex flex-col items-start justify-between gap-sm md:flex-row md:items-end md:gap-xl">
        <div className="flex flex-col gap-sm">
          <span className="font-mono text-mono-label font-medium uppercase text-accent-text">
            {index} — {eyebrow}
          </span>
          <h2 className="font-display text-heading-xl">{title}</h2>
        </div>
        {meta ? <span className="font-mono text-mono-meta text-ink-3">{meta}</span> : null}
      </div>
    </Reveal>
  );
}
