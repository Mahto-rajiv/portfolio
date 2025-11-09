import React, { useState, useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import SkillsSection from './sections/Skills';
import ExperienceSection from './sections/Experience';
import ProjectsSection from './sections/Projects';
import EducationSection from './sections/Education';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';
import { FaAws } from "react-icons/fa6";
import {
  SiPython,
  SiJavascript,
  SiDjango,
  SiFastapi,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiBootstrap,
  SiMongodb ,
  SiMysql,
  SiRedis,
  SiGithub,
  SiGitlab,
  SiScrapy,
  SiN8N,
  SiDocker,
  SiPostman
} from 'react-icons/si';

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

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Education Section */}
      <EducationSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Portfolio;