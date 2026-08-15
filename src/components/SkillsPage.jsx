import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './ui/Container';
import ThemeSwitcher from './ThemeSwitcher';
import Skills from './Skills';

export default function SkillsPage() {
  const navigate = useNavigate();

  const goBack = () => {
    sessionStorage.setItem('scrollToSection', 'skills');
    navigate('/');
  };

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

      {/* Tighter top than on the homepage: there's no previous chapter to separate from. */}
      <Skills className="pt-2xl md:pt-3xl" />
    </div>
  );
}
