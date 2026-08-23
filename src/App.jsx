import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import StudioPhilosophy from './components/StudioPhilosophy';
import AboutFounder from './components/AboutFounder';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [theme, setTheme] = useState('light'); // 'light' | 'dark'
  const [selectedProject, setSelectedProject] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Sync theme attribute on <html> document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const scrollToContact = () => {
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Header
        theme={theme}
        setTheme={setTheme}
        onOpenContact={scrollToContact}
      />

      {/* Main Portfolio Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Fullscreen Hero */}
        <ScrollReveal variant="fade-in" threshold={0.05}>
          <Hero 
            onOpenContact={scrollToContact} 
            onSelectProject={(project) => setSelectedProject(project)}
          />
        </ScrollReveal>
        
        {/* About Founder & Spatial Leadership (Placed First) */}
        <ScrollReveal variant="fade-up" threshold={0.08}>
          <AboutFounder onOpenContact={scrollToContact} />
        </ScrollReveal>

        {/* Clean Architectural Portfolio Showcase */}
        <ScrollReveal variant="fade-up" threshold={0.08}>
          <ProjectGrid 
            onSelectProject={(project) => setSelectedProject(project)} 
          />
        </ScrollReveal>
        
        {/* About Studio, Values & Brand Manifesto */}
        <ScrollReveal variant="fade-up" threshold={0.08}>
          <StudioPhilosophy />
        </ScrollReveal>
        
        {/* Simple Contact Form & Global Atelier Addresses */}
        <ScrollReveal variant="fade-up" threshold={0.08}>
          <ContactSection />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal variant="fade-in" threshold={0.05}>
        <Footer 
          onOpenContact={scrollToContact} 
        />
      </ScrollReveal>

      {/* Modals */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
