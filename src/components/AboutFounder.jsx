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
      padding: '6rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      borderTop: '1px solid var(--border-strong)'
    }}>
      {/* Category Header */}
      <div style={{ marginBottom: '3.5rem' }}>
        <div style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.2em',
          color: 'var(--accent-gold)',
          textTransform: 'uppercase',
          fontWeight: '700',
          marginBottom: '0.4rem'
        }}>
          // LEADERSHIP & CREATIVE DIRECTION
        </div>
        <h2 style={{ textTransform: 'uppercase', color: 'var(--text-heading)', margin: 0 }}>
          About The Founder
        </h2>
      </div>

      {/* Main Founder Profile Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '380px 1fr',
        gap: '3.5rem',
        alignItems: 'start',
        marginBottom: '4rem'
      }} className="founder-grid-responsive">

        {/* Left Column: Architectural Portrait Card & Quick Identity */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          padding: '2.25rem 1.75rem',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-elevation)',
          position: 'relative'
        }}>
          {/* Studio Accent Top Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '1.25rem',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'var(--color-navy)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px'
              }}>
                <LogoIcon size={32} color="var(--color-warm-white)" />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: '800', fontSize: '1.1rem', letterSpacing: '0.1em', color: 'var(--text-heading)', lineHeight: 1 }}>
                  NEO KASA
                </div>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', letterSpacing: '0.1em', marginTop: '2px', fontWeight: '600' }}>
                  STUDIO MONOGRAPH
                </div>
              </div>
            </div>
          </div>

          {/* Founder Portrait 3-Second Slideshow */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: 'relative',
              width: '100%',
              height: '400px',
              borderRadius: '4px',
              overflow: 'hidden',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.5rem',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)'
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
                  {/* Subtle Dark Vignette / Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(14, 26, 43, 0.75) 0%, rgba(14, 26, 43, 0.1) 40%, transparent 70%)'
                  }} />
                </div>
              );
            })}

            {/* Slideshow Arrow Controls (Faint / Minimalist) */}
            <button
              onClick={prevSlide}
              aria-label="Previous Portrait"
              style={{
                position: 'absolute',
                left: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.25)',
                color: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isHovered ? 0.5 : 0.15,
                transition: 'opacity 0.3s ease, background 0.3s ease',
                backdropFilter: 'blur(2px)',
                zIndex: 4
              }}
            >
              <ChevronLeft size={14} />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Portrait"
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.25)',
                color: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isHovered ? 0.5 : 0.15,
                transition: 'opacity 0.3s ease, background 0.3s ease',
                backdropFilter: 'blur(2px)',
                zIndex: 4
              }}
            >
              <ChevronRight size={14} />
            </button>
          </div>

          {/* Profile Identity Details */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              color: 'var(--text-heading)',
              fontFamily: 'var(--font-display)',
              marginBottom: '0.25rem',
              letterSpacing: '0.04em'
            }}>
              Nsikakabasi Essien
            </h3>

            <div style={{
              fontSize: '0.85rem',
              color: 'var(--accent-gold)',
              fontWeight: '700',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              Architect & Founder of NEO KASA
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              background: 'var(--bg-secondary)',
              padding: '0.35rem 0.75rem',
              borderRadius: '20px',
              border: '1px solid var(--border-subtle)'
            }}>
              <MapPin size={13} color="var(--accent-gold)" />
              <span>Uyo, Akwa Ibom State, Nigeria</span>
            </div>
          </div>

          {/* Quick Metrics / Key Focus */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.5rem 0', borderBottom: '1px dashed var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Motto</span>
              <span style={{ fontWeight: '700', color: 'var(--accent-gold)' }}>Modern Thinking, Timeless Architecture</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.5rem 0', borderBottom: '1px dashed var(--border-subtle)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Role</span>
              <span style={{ fontWeight: '700', color: 'var(--text-heading)' }}>Founder & Creative Mind</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', padding: '0.5rem 0' }}>
              <span style={{ color: 'var(--text-muted)' }}>Core Tools</span>
              <span style={{ fontWeight: '700', color: 'var(--text-heading)' }}>Revit • V-Ray • 3ds Max • Photoshop</span>
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Architectural Philosophy & Competencies */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

          {/* Main Biography Card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            padding: '3rem 2.5rem',
            borderRadius: '4px',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-gold)',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
              fontWeight: '700'
            }}>
              // ABOUT ME
            </div>

            <h3 style={{
              fontSize: '2rem',
              color: 'var(--text-heading)',
              marginBottom: '1.5rem',
              lineHeight: 1.25,
              fontFamily: 'var(--font-display)'
            }}>
              Modern Thinking, Timeless Architecture.
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              I am <strong>Nsikakabasi Essien</strong>, the creative mind behind <strong>NEO KASA</strong>, an architect driven by a passion for creating meaningful spaces through thoughtful design and contemporary architectural thinking.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              My work is shaped by creativity, attention to detail, problem-solving, and a strong appreciation for the relationship between form and function. I believe architecture should respond to the needs of the present while remaining relevant and enduring over time.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Using <strong>Autodesk Revit</strong>, <strong>V-Ray</strong>, <strong>3ds Max</strong>, and <strong>Adobe Photoshop</strong> as key tools in my design process, I transform ideas into detailed architectural models, immersive visualizations, and refined presentations. From the initial concept to the final visual, I enjoy exploring how design, technology, and creativity can come together to create spaces with character and identity.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.75rem' }}>
              Through <strong>NEO KASA</strong>, I am building a design practice that reflects my perspective on architecture; bold in thought, intentional in execution, and timeless in expression.
            </p>

            {/* Design & Visualization Tool Stack Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.6rem',
              padding: '1.25rem',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '4px',
              marginBottom: '2rem'
            }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', fontWeight: '700', letterSpacing: '0.1em', marginRight: '0.5rem' }}>
                PRIMARY TOOLS:
              </span>
              {['Autodesk Revit', 'V-Ray', '3ds Max', 'Adobe Photoshop'].map((tool, idx) => (
                <span key={idx} style={{
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-heading)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '3px',
                  border: '1px solid var(--border-strong)',
                  fontWeight: '600'
                }}>
                  {tool}
                </span>
              ))}
            </div>

            {/* Founder Quote Block */}
            <div style={{
              padding: '1.75rem',
              background: 'var(--bg-secondary)',
              borderLeft: '4px solid var(--accent-gold)',
              borderRadius: '2px'
            }}>
              <div style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                color: 'var(--accent-gold)',
                letterSpacing: '0.15em',
                marginBottom: '0.5rem'
              }}>
                NEO KASA PHILOSOPHY
              </div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.35rem',
                color: 'var(--text-heading)',
                lineHeight: 1.5,
                marginBottom: '0.75rem'
              }}>
                "Modern Thinking, Timeless Architecture."
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6
              }}>
                Bold in thought, intentional in execution, and timeless in expression.
              </div>
            </div>
          </div>
        </div>

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
