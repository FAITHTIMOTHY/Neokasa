import React from 'react';
import {
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import LogoIcon from './LogoIcon';

const founderImages = [
  {
    src: '/assets/founder/founder_1.jpg?v=2',
    caption: 'Nsikakabasi Essien — Creative Lead'
  },
  {
    src: '/assets/founder/founder_2.jpg?v=2',
    caption: 'Nsikakabasi Essien — Spatial Architect'
  },
  {
    src: '/assets/founder/founder_3.jpg?v=2',
    caption: 'Nsikakabasi Essien — Studio Founder'
  }
];

export default function AboutFounder({ onOpenContact }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % founderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % founderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + founderImages.length) % founderImages.length);
  };

  return (
    <section id="founder" style={{
      padding: '5rem 1.5rem 2rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Top Architectural Folio Bar (Reference Image) */}
      <div className="arch-folio-bar">
        <div>NEO KASA</div>
        <div className="arch-folio-center">Nsikakabasi Essien | Portfolio 2025</div>
        <div className="arch-folio-page">01</div>
      </div>

      {/* Main Founder Profile Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(320px, 420px) 1fr',
        gap: '3.5rem',
        alignItems: 'start',
        marginBottom: '2rem'
      }} className="founder-grid-responsive">

        {/* Left Column: Portrait Slideshow Card with Corner Frame Ticks */}
        <div className="arch-corner-card" style={{
          padding: '1.25rem',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-elevation)',
          position: 'relative'
        }}>
          {/* Founder Portrait 3-Second Slideshow */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              borderRadius: '2px',
              overflow: 'hidden',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.25rem'
            }}
          >
            {founderImages.map((img, idx) => {
              const isActive = idx === currentSlide;
              return (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? 'scale(1)' : 'scale(1.04)',
                    transition: 'opacity 0.8s ease-in-out, transform 1.2s ease-out',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: idx === 0 ? 'center 15%' : idx === 1 ? 'center 20%' : 'center 18%',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14, 26, 43, 0.75) 0%, rgba(14, 26, 43, 0.05) 40%, transparent 70%)'
                  }} />
                </div>
              );
            })}

            {/* Slideshow Arrow Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous Portrait"
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.35)',
                color: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isHovered ? 0.9 : 0.3,
                transition: 'all 0.2s ease',
                zIndex: 4
              }}
            >
              <ChevronLeft size={16} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Portrait"
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.35)',
                color: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isHovered ? 0.9 : 0.3,
                transition: 'all 0.2s ease',
                zIndex: 4
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Quick Caption Under Portrait */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>ARCHITECT PORTRAIT</span>
            <span style={{ color: 'var(--text-muted)' }}>0{currentSlide + 1} / 0{founderImages.length}</span>
          </div>
        </div>

        {/* Right Column: Editorial Bio, Contact Row & Tools (Reference Image 4) */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* Main Greeting / Title */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            color: 'var(--text-heading)',
            fontFamily: 'var(--font-display)',
            fontWeight: '900',
            marginBottom: '1.25rem',
            lineHeight: 1.15
          }}>
            Hi! I'm Nsikakabasi
          </h2>

          <div style={{
            fontSize: '0.85rem',
            color: 'var(--accent-gold)',
            fontWeight: '700',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            Architect & Founder of NEO KASA
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.15rem' }}>
            I am <strong>Nsikakabasi Essien</strong>, the creative mind behind <strong>NEO KASA</strong>, an architect with a lifelong passion for design and craft. My work is rooted in creating impactful spatial solutions that benefit humanity and elevate the built environment.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.15rem' }}>
            I am driven to design experiential spaces—designs that are fiercely rooted in place, full of purpose, and always keep the user at the centre. My portfolio explores the powerful synthesis of modern thinking, climate-adaptive architecture, and technical precision.
          </p>

          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.75rem' }}>
            Using <strong>Autodesk Revit</strong>, <strong>V-Ray</strong>, <strong>3ds Max</strong>, and <strong>Adobe Photoshop</strong> as primary tools, I transform ideas into detailed architectural models and immersive spatial presentations with character and enduring identity.
          </p>

          {/* Direct Contact Icon Row (Reference Image 4) */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
            padding: '1.1rem 0',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '1.75rem',
            fontSize: '0.85rem',
            fontFamily: 'var(--font-mono)'
          }}>
            <a 
              href="mailto:Nsikakabasiessien101@gmail.com" 
              style={{ color: 'var(--text-heading)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: '600' }}
              title="Email Nsikakabasi"
            >
              <span style={{ color: 'var(--accent-gold)' }}>✉</span>
              <span>Nsikakabasiessien101@gmail.com</span>
            </a>

            <a 
              href="https://wa.me/2349013717660" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-heading)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: '600' }}
              title="WhatsApp Direct"
            >
              <span style={{ color: 'var(--accent-gold)' }}>✆</span>
              <span>+234 901 371 7660</span>
            </a>

            <a 
              href="https://x.com/_nkhay_22" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-heading)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: '600' }}
              title="Twitter/X Profile"
            >
              <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>𝕏</span>
              <span>@_nkhay_22</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/nsikakabasi-essien-34a293288" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-heading)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.45rem', fontWeight: '600' }}
              title="LinkedIn Profile"
            >
              <span style={{ color: 'var(--accent-gold)' }}>in</span>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Primary Tool Stack Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '0.1em', marginRight: '0.25rem' }}>
              TECH STACK:
            </span>
            {['Autodesk Revit', 'V-Ray', '3ds Max', 'Adobe Photoshop', 'BIM Modeling'].map((tool, idx) => (
              <span key={idx} style={{
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-heading)',
                padding: '0.3rem 0.65rem',
                borderRadius: '2px',
                border: '1px solid var(--border-subtle)',
                fontWeight: '600'
              }}>
                {tool}
              </span>
            ))}
          </div>

        </div>

      </div>

      {/* Giant Cropped Typographic Watermark (Reference Image 4) */}
      <div className="arch-watermark-title" style={{ marginTop: '0.5rem' }}>
        ABOUT
      </div>

      <style>{`
        @media (max-width: 992px) {
          .founder-grid-responsive {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

