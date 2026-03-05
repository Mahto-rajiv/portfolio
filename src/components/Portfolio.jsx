import { useState, useMemo, Suspense, lazy } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import SkillsSection from './sections/Skills';
import { useScrollSpy } from '../hooks/useScrollSpy';

// Lazy load below-fold sections for faster initial load
const ExperienceSection = lazy(() => import('./sections/Experience'));
const ProjectsSection = lazy(() => import('./sections/Projects'));
const EducationSection = lazy(() => import('./sections/Education'));
const ContactSection = lazy(() => import('./sections/Contact'));
const FooterSection = lazy(() => import('./sections/Footer'));

// Loading fallback for lazy sections
const SectionLoader = () => (
    <div className="py-16 flex justify-center">
        <div
            className="animate-pulse"
            style={{ color: 'var(--palette-text-muted)' }}
        >
            Loading...
        </div>
    </div>
);

const sectionIds = ['profile', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const stableSectionIds = useMemo(() => sectionIds, []);
    const activeSection = useScrollSpy(stableSectionIds);

    return (
        <div
            className="min-h-screen transition-colors duration-300"
            style={{ background: 'var(--palette-background-default)' }}
        >
            {/* Navigation */}
            <Navbar activeSection={activeSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Hero Section — Above fold, load immediately */}
            <Hero />

            {/* About Section — Above fold, load immediately */}
            <About />

            {/* Skills Section — Important, load immediately */}
            <SkillsSection />

            {/* Below-fold sections — Lazy loaded */}
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
