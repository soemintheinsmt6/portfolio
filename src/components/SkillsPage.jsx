import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from './ui/Container';
import ThemeSwitcher from './ThemeSwitcher';
import Skills from './Skills';

export default function SkillsPage() {
  const navigate = useNavigate();

  const goBack = () => {
    sessionStorage.setItem('scrollToSection', 'toolkit');
    navigate('/');
  };

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

      <Skills />
    </div>
  );
}
