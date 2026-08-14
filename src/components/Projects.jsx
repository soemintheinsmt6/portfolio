import React, { useState } from 'react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Lightbox from './ui/Lightbox';
import { TagRow } from './ui/Tag';
import { projects } from '../data';

const STORES = [
  { key: 'appStore', label: 'App Store' },
  { key: 'playStore', label: 'Google Play' },
  { key: 'apkPure', label: 'APKPure' },
  { key: 'testFlight', label: 'TestFlight' },
];

// Actions read as mono labels, in the same voice as the platform and year.
const ACTION =
  'font-mono text-mono-label font-medium uppercase text-ink-2 transition-colors duration-200 hover:text-accent-text';

/**
 * Figma: Project Row — numbered editorial list item.
 * A list beats a card grid here: it lets the flagship read as the flagship
 * and gives each description room to say something. Screenshots stay behind
 * a button so the list itself remains typographic.
 */
function ProjectRow({ project, index }) {
  const [screenIndex, setScreenIndex] = useState(null);
  const screens = project.screens || [];
  const stores = STORES.filter((store) => project[store.key]);

  return (
    <Reveal>
      <article className="group grid grid-cols-[32px_1fr] items-start gap-md border-t border-hairline py-xl md:grid-cols-[48px_1fr_220px] md:gap-2xl">
        <span className="pt-xs font-mono text-mono-meta text-ink-3 transition-colors duration-200 group-hover:text-accent-text">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex flex-col gap-md">
          <h3 className="text-heading-m font-semibold md:text-heading-l">{project.title}</h3>

          <p className="max-w-measure text-body-m text-ink-2">{project.description}</p>

          <TagRow items={project.tech} />

          {screens.length > 0 || stores.length > 0 ? (
            <div className="flex flex-wrap items-center gap-x-lg gap-y-sm pt-2xs">
              {screens.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setScreenIndex(0)}
                  aria-haspopup="dialog"
                  className={`flex items-center gap-xs ${ACTION} hover:text-ink`}
                >
                  <span className="h-px w-lg bg-accent" aria-hidden="true" />
                  View {screens.length} screen{screens.length === 1 ? '' : 's'}
                </button>
              ) : null}

              {stores.map((store) => (
                <a
                  key={store.key}
                  href={project[store.key]}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={ACTION}
                >
                  {store.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        <div className="col-start-2 flex flex-row items-baseline gap-sm text-left md:col-start-3 md:flex-col md:items-end md:gap-xs md:text-right">
          <span className="font-mono text-mono-label font-medium">{project.platform}</span>
          <span className="font-mono text-mono-meta text-ink-3">{project.year}</span>
        </div>
      </article>

      {screenIndex !== null ? (
        <Lightbox
          images={screens}
          title={project.title}
          index={screenIndex}
          onIndexChange={setScreenIndex}
          onClose={() => setScreenIndex(null)}
        />
      ) : null}
    </Reveal>
  );
}

export default function Projects() {
  // Count only what's publicly released; anything still in testing is called out.
  const shipped = projects.filter((p) => p.released !== false).length;
  const building = projects.length - shipped;

  return (
    <Section id="work">
      <SectionHeader
        index="01"
        eyebrow="Work"
        title="What I've shipped"
        meta={building ? `${shipped} shipped · ${building} in testing` : `${shipped} shipped`}
      />
      <div className="border-b border-hairline">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
