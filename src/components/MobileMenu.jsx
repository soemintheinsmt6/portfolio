import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import Container from './ui/Container';
import { site } from '../data';

/**
 * Full-screen section index for narrow screens. An editorial menu rather than a
 * drawer or bottom bar: no permanent chrome, and the section names get to be set
 * in the display face.
 */
export default function MobileMenu({ links, activeSection, onSelect, onClose }) {
  const closeRef = useRef(null);
  const restoreFocusRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    restoreFocusRef.current = document.activeElement;
    closeRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      restoreFocusRef.current?.focus?.();
    };
  }, [onClose]);

  // Portalled to <body>: the header carries backdrop-blur, which makes it the
  // containing block for fixed-position descendants — a nested overlay would be
  // clipped to the 72px bar instead of covering the viewport.
  return createPortal(
    <Motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Sections"
      className="fixed inset-0 z-[90] flex flex-col bg-canvas lg:hidden"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18 }}
    >
      <Container className="flex h-[72px] shrink-0 items-center justify-between border-b border-hairline">
        <span className="font-display text-heading-s">{site.name}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="rounded-sm p-xs font-mono text-mono-label font-medium uppercase text-ink-3 transition-colors duration-200 hover:text-ink"
        >
          Close ✕
        </button>
      </Container>

      <Container className="flex flex-1 flex-col justify-center gap-lg py-2xl">
        <nav className="flex flex-col">
          {links.map((link, i) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onSelect(link.id)}
              className="flex items-baseline gap-md border-b border-hairline py-md text-left"
            >
              <span
                className={`font-mono text-mono-meta ${
                  activeSection === link.id ? 'text-accent-text' : 'text-ink-3'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-display-m">{link.label}</span>
            </button>
          ))}
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="mt-lg break-all font-mono text-mono-label font-medium uppercase text-ink-2 transition-colors duration-200 hover:text-accent-text"
        >
          {site.email}
        </a>
      </Container>
    </Motion.div>,
    document.body
  );
}
