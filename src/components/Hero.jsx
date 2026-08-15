import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import { Stagger, StaggerItem } from './ui/Reveal';
import { site } from '../data';

export default function Hero({ onNavigate }) {
  const go = (id) => (event) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <section id="home" className="pb-3xl pt-4xl md:pb-5xl md:pt-6xl">
      <Container>
        {/* The whole hero is on screen at load, so it arrives as one cascade
            rather than as four blocks each waiting on a scroll position. */}
        <Stagger each={0.07}>
          <StaggerItem
            as="h1"
            className="max-w-[15ch] font-display text-display-m md:text-[64px] md:leading-[64px] lg:text-display-xl"
          >
            {site.headline.lead}
            <span className="italic text-accent-text">{site.headline.emphasis}</span>
          </StaggerItem>

          <StaggerItem
            as="p"
            className="mt-xl max-w-lead text-body-m text-ink-2 md:text-body-l"
          >
            {site.intro}
          </StaggerItem>

          <StaggerItem className="mt-2xl flex flex-wrap items-center gap-lg">
            <Button href="#work" onClick={go('work')}>
              See selected work
            </Button>
            <Button href={`mailto:${site.email}`} variant="ghost">
              Email me →
            </Button>
          </StaggerItem>

          {/* The stats read left to right, so they land that way too. */}
          <Stagger
            each={0.05}
            className="mt-3xl grid grid-cols-2 gap-lg border-t border-hairline pt-lg md:mt-5xl md:grid-cols-4 md:gap-xl"
          >
            {site.stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="font-display text-[32px] leading-[34px] md:text-display-m">
                  {stat.value}
                </div>
                <div className="mt-xs font-mono text-mono-label font-medium uppercase text-ink-3">
                  {stat.label}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Stagger>
      </Container>
    </section>
  );
}
