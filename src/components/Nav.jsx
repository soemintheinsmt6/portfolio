import React, { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion as Motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import ThemeSwitcher from './ThemeSwitcher';
import MobileMenu from './MobileMenu';
import { DURATION, EASE_OUT } from '../core/motion';
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

/**
 * Figma: Nav Link — active state is a vermilion hairline, never a filled pill.
 *
 * There is only one active hairline in the bar and it travels between links as
 * the page scrolls (shared `layoutId`), so the indicator reads as one object
 * moving rather than six that blink. Hover draws its own rule, growing from the
 * left, and stands down when the link is the active one.
 */
function NavLink({ id, label, isActive, onNavigate, animate }) {
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
      <span className="relative h-px">
        <span
          className={`absolute inset-0 origin-left scale-x-0 bg-strong transition-transform duration-300 ${
            isActive ? '' : 'group-hover:scale-x-100'
          }`}
        />
        {isActive ? (
          <Motion.span
            layoutId="nav-active-rule"
            className="absolute inset-0 bg-accent"
            transition={
              animate ? { duration: DURATION.base, ease: EASE_OUT } : { duration: 0 }
            }
          />
        ) : null}
      </span>
    </a>
  );
}

export default function Nav({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Set when a menu item is chosen, read once the menu has finished leaving.
  const pendingSectionRef = useRef(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (value) => {
    setScrolled(value > 8);
  });

  const goTo = (id) => {
    pendingSectionRef.current = id;
    setMenuOpen(false);
  };

  // The menu locks body scroll while open and only releases it on unmount,
  // which AnimatePresence defers until the exit animation is done. Scrolling
  // any earlier would be swallowed by that lock.
  const handleMenuExited = () => {
    const id = pendingSectionRef.current;
    pendingSectionRef.current = null;
    if (id) requestAnimationFrame(() => onNavigate?.(id));
  };

  return (
    <header
      className={`surface-veil sticky top-0 z-50 border-b backdrop-blur-md backdrop-saturate-150 transition-colors duration-300 ${
        scrolled ? 'border-hairline' : 'border-transparent'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-xl">
        {/* The wordmark is set in the display face, as the name is everywhere
            else on the page — it should outrank the nav links, not match them. */}
        <a href="/" className="group flex items-baseline gap-sm">
          <span className="font-display text-heading-s">{site.name}</span>
          <span className="hidden font-mono text-mono-meta text-ink-3 transition-colors duration-200 group-hover:text-accent-text sm:inline">
            {site.role}
          </span>
        </a>

        <nav className="hidden items-center gap-xl lg:flex">
          {BAR_LINKS.map((link) => (
            <NavLink
              key={link.id}
              {...link}
              isActive={activeSection === link.id}
              onNavigate={onNavigate}
              animate={!prefersReducedMotion}
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

      <AnimatePresence onExitComplete={handleMenuExited}>
        {menuOpen ? (
          <MobileMenu
            links={LINKS}
            activeSection={activeSection}
            onSelect={goTo}
            onClose={() => setMenuOpen(false)}
          />
        ) : null}
      </AnimatePresence>
    </header>
  );
}
