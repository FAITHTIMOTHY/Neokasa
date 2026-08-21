import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import StudioPhilosophy from './components/StudioPhilosophy';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

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
        <Hero 
          onOpenContact={scrollToContact} 
          onSelectProject={(project) => setSelectedProject(project)}
        />
        
        {/* Clean Architectural Portfolio Showcase */}
        <ProjectGrid 
          onSelectProject={(project) => setSelectedProject(project)} 
        />
        
        {/* About Studio, Values & Client Testimonials */}
        <StudioPhilosophy />
        
        {/* Simple Contact Form & Global Atelier Addresses */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={scrollToContact} 
      />

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
