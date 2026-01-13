import React, { useState, useEffect, Suspense, lazy } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import SkillsSection from './sections/Skills';

// Lazy load below-fold sections for faster initial load
const ExperienceSection = lazy(() => import('./sections/Experience'));
const ProjectsSection = lazy(() => import('./sections/Projects'));
const EducationSection = lazy(() => import('./sections/Education'));
const ContactSection = lazy(() => import('./sections/Contact'));
const FooterSection = lazy(() => import('./sections/Footer'));

// Loading fallback for lazy sections
const SectionLoader = () => (
  <div className="py-16 flex justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <Navbar activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section - Above fold, load immediately */}
      <Hero />

      {/* About Section - Above fold, load immediately */}
      <About />

      {/* Skills Section - Important, load immediately */}
      <SkillsSection />

      {/* Below-fold sections - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <EducationSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FooterSection />
      </Suspense>
    </div>
  );
};

export default Portfolio;