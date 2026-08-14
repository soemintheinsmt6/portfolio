import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './ui/Container';
import Reveal from './ui/Reveal';
import ThemeSwitcher from './ThemeSwitcher';
import { CertificateRow } from './Certificates';
import { certificates } from '../data';
import { CATEGORIES } from '../data/certificates';

export default function CertificatesPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');

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
            className="font-mono text-mono-label font-medium uppercase text-ink-2 transition-colors duration-200 hover:text-ink"
          >
            ← Back
          </button>
          <ThemeSwitcher />
        </Container>
      </header>

      <Container className="py-4xl md:py-5xl">
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
                className={`rounded-sm px-sm py-xs font-mono text-mono-label font-medium uppercase transition-colors duration-200 ${
                  isActive
                    ? 'bg-action text-action-text'
                    : 'bg-quiet text-ink-2 hover:text-ink'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </Reveal>

        <div className="mt-2xl border-b border-hairline">
          {filtered.map((certificate) => (
            <CertificateRow key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </Container>
    </div>
  );
}
