import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import { DURATION, EASE_OUT } from '../core/motion';
import ThemeSwitcher from './ThemeSwitcher';
import { CertificateRow } from './Certificates';
import { certificates } from '../data';
import { CATEGORIES } from '../data/certificates';

export default function CertificatesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const prefersReducedMotion = useReducedMotion();

  const goBack = () => {
    sessionStorage.setItem('scrollToSection', 'credentials');
    navigate('/');
  };

  const availableCategories = useMemo(
    () =>
      CATEGORIES.filter(
        (category) =>
          category.id === 'all' || certificates.some((cert) => cert.category === category.id)
      ),
    []
  );

  const filtered = useMemo(
    () =>
      activeCategory === 'all'
        ? certificates
        : certificates.filter((cert) => cert.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="min-h-screen">
      <header className="border-b border-hairline">
        <Container className="flex h-[72px] items-center justify-between gap-lg">
          <button
            type="button"
            onClick={goBack}
            className="group font-mono text-mono-label font-medium uppercase text-ink-2 transition-colors duration-200 hover:text-ink"
          >
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:-translate-x-1"
            >
              ←
            </span>{' '}
            Back
          </button>
          <ThemeSwitcher />
        </Container>
      </header>

      <Container className="pb-4xl pt-2xl md:pb-5xl md:pt-3xl">
        <Reveal className="flex flex-col gap-lg">
          <hr className="m-0 h-px border-0 bg-ink" />
          <div className="flex flex-col items-start justify-between gap-sm md:flex-row md:items-end md:gap-xl">
            <div className="flex flex-col gap-sm">
              <span className="font-mono text-mono-label font-medium uppercase text-accent-text">
                05 — Credentials
              </span>
              <h1 className="font-display text-display-m md:text-heading-xl">Certifications</h1>
            </div>
            <span className="font-mono text-mono-meta text-ink-3">
              {filtered.length} of {certificates.length}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-2xl flex flex-wrap gap-xs">
          {availableCategories.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                aria-pressed={isActive}
                className={`relative rounded-sm px-sm py-xs font-mono text-mono-label font-medium transition-colors duration-200 ${
                  isActive ? 'text-action-text' : 'bg-quiet text-ink-2 hover:text-ink'
                }`}
              >
                {/* One selection marker for the whole row: it slides to the chip
                    you picked instead of one chip lighting up as another dims. */}
                {isActive ? (
                  <Motion.span
                    layoutId="certificate-filter"
                    className="absolute inset-0 rounded-sm bg-action"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { duration: DURATION.base, ease: EASE_OUT }
                    }
                  />
                ) : null}
                <span className="relative">{category.label}</span>
              </button>
            );
          })}
        </Reveal>

        {/* Filtering rearranges a list that's already on screen, so the rows
            close the gap rather than snapping into it. */}
        <Motion.div layout={!prefersReducedMotion} className="mt-2xl border-b border-hairline">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.map((certificate) => (
              <Motion.div
                key={certificate.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: DURATION.fast, ease: EASE_OUT }}
              >
                <CertificateRow certificate={certificate} />
              </Motion.div>
            ))}
          </AnimatePresence>
        </Motion.div>
      </Container>
    </div>
  );
}
