import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Nav from './features/nav/Nav';
import Hero from './features/hero/Hero';
import About from './features/about/About';
import Experience from './features/experience/Experience';
import Projects from './features/projects/Projects';
import Skills from './features/skills/Skills';
import Contact from './features/contact/Contact';
import Footer from './features/footer/Footer';
import Certificates from './features/certificates/Certificates';
import CertificatesPage from './features/certificates/CertificatesPage';
import SkillsPage from './features/skills/SkillsPage';
import { GA_TRACKING_ID } from './core/config/ga';

function MainPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Ensure we start at the top on initial mount (mobile fix)
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'experience',
        'projects',
        'skills',
        'certificates',
        'contact',
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      // If at bottom of the page, always set 'contact' active
      const isAtBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        Math.round(document.body.scrollHeight);
      if (isAtBottom) {
        setActiveSection('contact');
      } else if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      <Nav
        activeSection={activeSection}
        onNavigate={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname, location.search, location.hash]);
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
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}