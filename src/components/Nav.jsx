import React, { useState } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import ThemeSwitcher from './ThemeSwitcher';
import MobileMenu from './MobileMenu';
import { site } from '../data';

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

// The desktop bar omits Contact — the button beside it already goes there.
const BAR_LINKS = LINKS.filter((l) => l.id !== 'contact');

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
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (id) => {
    setMenuOpen(false);
    // The menu locks body scroll while open, and its cleanup only runs once
    // React commits the unmount. Scrolling in the same tick would be swallowed
    // by that lock, so wait for the DOM to settle first.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => onNavigate?.(id));
    });
  };

  return (
    <header className="surface-veil sticky top-0 z-50 border-b border-hairline backdrop-blur-md backdrop-saturate-150">
      <Container className="flex h-[72px] items-center justify-between gap-xl">
        {/* The wordmark is set in the display face, as the name is everywhere
            else on the page — it should outrank the nav links, not match them. */}
        <a href="/" className="flex items-baseline gap-sm">
          <span className="font-display text-heading-s">{site.name}</span>
          <span className="hidden font-mono text-mono-meta text-ink-3 sm:inline">{site.role}</span>
        </a>

        <nav className="hidden items-center gap-xl lg:flex">
          {BAR_LINKS.map((link) => (
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

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            className="rounded-sm p-xs font-mono text-mono-label font-medium uppercase text-ink-2 transition-colors duration-200 hover:text-ink lg:hidden"
          >
            Menu
          </button>

          <Button
            href="#contact"
            size="s"
            className="hidden sm:inline-flex"
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

      {menuOpen ? (
        <MobileMenu
          links={LINKS}
          activeSection={activeSection}
          onSelect={goTo}
          onClose={() => setMenuOpen(false)}
        />
      ) : null}
    </header>
  );
}
