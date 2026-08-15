import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion as Motion, useReducedMotion } from 'framer-motion';
import Container from './ui/Container';
import { DURATION, EASE_OUT, overlay, staggerParent } from '../core/motion';
import { site } from '../data';

/** Section names arrive one after another, in reading order. */
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE_OUT } },
};

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

  const motionProps = prefersReducedMotion
    ? {}
    : {
        variants: overlay,
        initial: 'hidden',
        animate: 'visible',
        exit: 'exit',
      };

  const listProps = prefersReducedMotion
    ? {}
    : {
        variants: staggerParent(0.05, 0.06),
        initial: 'hidden',
        animate: 'visible',
      };

  const itemProps = prefersReducedMotion ? {} : { variants: item };

  // Portalled to <body>: the header carries backdrop-blur, which makes it the
  // containing block for fixed-position descendants — a nested overlay would be
  // clipped to the 72px bar instead of covering the viewport.
  return createPortal(
    <Motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Sections"
      className="fixed inset-0 z-[90] flex flex-col bg-canvas lg:hidden"
      {...motionProps}
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
        <Motion.nav className="flex flex-col" {...listProps}>
          {links.map((link, i) => (
            <Motion.button
              key={link.id}
              type="button"
              onClick={() => onSelect(link.id)}
              className="group flex items-baseline gap-md border-b border-hairline py-md text-left"
              whileTap={prefersReducedMotion ? undefined : { x: 4 }}
              {...itemProps}
            >
              <span
                className={`font-mono text-mono-meta transition-colors duration-200 ${
                  activeSection === link.id ? 'text-accent-text' : 'text-ink-3'
                }`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-display-m transition-transform duration-300 group-active:translate-x-1">
                {link.label}
              </span>
            </Motion.button>
          ))}
        </Motion.nav>

        <Motion.a
          href={`mailto:${site.email}`}
          className="mt-lg break-all font-mono text-mono-label font-medium uppercase text-ink-2 transition-colors duration-200 hover:text-accent-text"
          {...itemProps}
        >
          {site.email}
        </Motion.a>
      </Container>
    </Motion.div>,
    document.body
  );
}
