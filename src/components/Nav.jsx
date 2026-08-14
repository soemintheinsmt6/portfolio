import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import ThemeSwitcher from './ThemeSwitcher';
import { site } from '../data';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'credentials', label: 'Credentials' },
];

/** Figma: Nav Link — active state is a vermilion hairline, never a filled pill. */
function NavLink({ id, label, isActive, onNavigate }) {
  const handleClick = (event) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(id);
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      aria-current={isActive ? 'true' : undefined}
      className={`group flex flex-col gap-2xs transition-colors duration-200 ${
        isActive ? 'text-ink' : 'text-ink-2 hover:text-ink'
      }`}
    >
      <span className="text-label-m font-medium">{label}</span>
      <span
        className={`h-px bg-accent transition-opacity duration-200 ${
          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
      />
    </a>
  );
}

export default function Nav({ activeSection, onNavigate }) {
  return (
    <header className="surface-veil sticky top-0 z-50 border-b border-hairline backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-[72px] items-center justify-between gap-xl">
        <a href="/" className="flex items-baseline gap-sm">
          <span className="text-label-m font-medium">{site.name}</span>
          <span className="hidden font-mono text-mono-meta text-ink-3 sm:inline">{site.role}</span>
        </a>

        <nav className="hidden items-center gap-xl lg:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.id}
              {...link}
              isActive={activeSection === link.id}
              onNavigate={onNavigate}
            />
          ))}
        </nav>

        <div className="flex items-center gap-md">
          <ThemeSwitcher />
          <Button
            href="#contact"
            size="s"
            onClick={(event) => {
              if (!onNavigate) return;
              event.preventDefault();
              onNavigate('contact');
            }}
          >
            Get in touch
          </Button>
        </div>
      </Container>
    </header>
  );
}
