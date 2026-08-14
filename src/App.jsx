import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useCallback, useEffect, useState } from 'react';

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
import { GA_TRACKING_ID } from './core/config/ga';

const SECTIONS = ['home', 'work', 'about', 'experience', 'toolkit', 'credentials', 'contact'];

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
          el.scrollIntoView({ behavior: 'instant' });
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
    const offset = 88; // clears the sticky header
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
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

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname]);
  return null;
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
        <ScrollToTop />
        <AnalyticsTracker />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
