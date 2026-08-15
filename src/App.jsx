import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion as Motion, useReducedMotion } from 'framer-motion';

// Disable browser scroll restoration immediately, before any component mounts
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
import { ThemeProvider } from './core/theme/ThemeContext';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CertificatesPage from './components/CertificatesPage';
import SkillsPage from './components/SkillsPage';
import { DURATION, EASE_OUT } from './core/motion';
import { GA_TRACKING_ID } from './core/config/ga';

const SECTIONS = ['home', 'work', 'about', 'experience', 'skills', 'credentials', 'contact'];

const HEADER_HEIGHT = 72; // the sticky nav
const BREATHING_ROOM = 24;

/**
 * Sections carry a large top padding for the page's editorial rhythm, so
 * scrolling to the element's border box would leave that padding stranded at
 * the top of the viewport. Aim at the content box instead, and land it just
 * below the sticky header.
 */
function sectionScrollTop(element) {
  const paddingTop = parseFloat(window.getComputedStyle(element).paddingTop) || 0;
  const documentTop = element.getBoundingClientRect().top + window.scrollY;
  return Math.max(0, documentTop + paddingTop - HEADER_HEIGHT - BREATHING_ROOM);
}

function MainPage() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const scrollTarget = sessionStorage.getItem('scrollToSection');
    sessionStorage.removeItem('scrollToSection');

    if (scrollTarget) {
      // Wait one frame so DOM is fully laid out
      requestAnimationFrame(() => {
        const el = document.getElementById(scrollTarget);
        if (el) {
          window.scrollTo({ top: sectionScrollTop(el), behavior: 'instant' });
        }
      });
    } else {
      // Fresh visit or reload — start from top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = SECTIONS.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      // At the bottom of the page, contact is always the active section
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >= Math.round(document.body.scrollHeight);

      if (isAtBottom) {
        setActiveSection('contact');
      } else if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (!element) return;
    window.scrollTo({ top: sectionScrollTop(element), behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/**
 * Routes cross-fade rather than cut. `mode="wait"` means the outgoing page is
 * gone before the incoming one mounts, which is also what makes the scroll
 * position safe to set here: a page resets the scroll as it mounts, so the
 * visitor never sees the old page jump to the top on its way out.
 *
 * The homepage opts out — it restores its own position when returning from a
 * sub-page (see MainPage).
 */
let isFirstPage = true;

function Page({ resetScroll = true, children }) {
  const prefersReducedMotion = useReducedMotion();
  // The transition is for moving *between* pages. On the very first paint the
  // page's own content is already arriving (the hero cascade, the reveals), and
  // a second fade over the top of it only makes the load feel slower.
  const isEntry = useRef(isFirstPage);

  useEffect(() => {
    isFirstPage = false;
    if (resetScroll) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [resetScroll]);

  if (prefersReducedMotion) return children;

  return (
    <Motion.div
      /* `false` here suppresses this element's entrance only. Setting
         `initial={false}` on the AnimatePresence instead would put every
         descendant in the same state, and take the scroll reveals with it. */
      initial={isEntry.current ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0, transition: { duration: DURATION.base, ease: EASE_OUT } }}
      exit={{ opacity: 0, y: -8, transition: { duration: DURATION.fast, ease: 'easeIn' } }}
    >
      {children}
    </Motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Page resetScroll={false}>
              <MainPage />
            </Page>
          }
        />
        <Route
          path="/certificates"
          element={
            <Page>
              <CertificatesPage />
            </Page>
          }
        />
        <Route
          path="/skills"
          element={
            <Page>
              <SkillsPage />
            </Page>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + (location.search || ''),
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AnalyticsTracker />
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
  );
}
