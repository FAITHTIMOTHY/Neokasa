import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Mail, Award, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { STUDIO_STATS, PROJECTS } from '../data/projects';

export default function Hero({ onOpenContact, onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = PROJECTS.length;
  const currentProject = PROJECTS[currentIndex] || PROJECTS[0];

  // Auto-advance slideshow every 3 seconds (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isHovered, totalSlides]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '3rem 1.5rem 2rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      {/* Right Edge: Vertical Rotated SCROLL DOWN Marker (Reference Image) */}
      <div style={{
        position: 'absolute',
        right: '1rem',
        top: '40%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.8rem',
        zIndex: 20
      }} className="hide-on-mobile">
        <span style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          fontWeight: '700'
        }}>
          SCROLL DOWN
        </span>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'var(--accent-gold)'
        }} />
      </div>

      {/* Main Hero Stage */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
        gap: '2.5rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 5
      }} className="mobile-grid-1">
        
        {/* Left Column: Monumental Name, Brand & Vision */}
        <div style={{ position: 'relative' }}>
          {/* Subtle Decorative Accent Dots */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-15px',
            color: 'var(--accent-gold)',
            opacity: 0.5,
            fontSize: '1.2rem',
            userSelect: 'none'
          }}>
            • &nbsp; + &nbsp; •
          </div>

          <div style={{
            fontSize: '0.75rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.25em',
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            // ARCHITECT & FOUNDER
          </div>

          {/* Monumental Name Layout (Reference Image) */}
          <h1 style={{
            color: 'var(--text-heading)',
            fontFamily: 'var(--font-display)',
            fontWeight: '900',
            fontSize: 'clamp(2.75rem, 5.5vw, 5.25rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            NSIKAKABASI<br />
            <span style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', textTransform: 'none', fontWeight: '700' }}>
              Essien
            </span>
          </h1>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            letterSpacing: '0.18em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            fontWeight: '700',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap'
          }}>
            <span>ARCHITECT</span>
            <span style={{ color: 'var(--accent-gold)' }}>•</span>
            <span>FOUNDER OF NEO KASA</span>
            <span style={{ color: 'var(--accent-gold)' }}>•</span>
            <span>BIM & SPATIAL LEAD</span>
          </div>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '580px',
            marginBottom: '2.5rem',
            lineHeight: 1.8
          }}>
            Crafting progressive, climate-adaptive spatial works across residential, institutional, and commercial typologies. Rooted in <strong>"Modern Thinking, Timeless Architecture"</strong>.
          </p>

          {/* Pill Shaped Action Buttons (Reference Image) */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <button
              onClick={onOpenContact}
              style={{
                background: 'var(--text-heading)',
                color: 'var(--bg-primary)',
                border: 'none',
                padding: '0.85rem 2rem',
                borderRadius: '50px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              CONTACT ME <ArrowRight size={16} />
            </button>

            <a
              href="#founder"
              style={{
                background: 'transparent',
                color: 'var(--text-heading)',
                border: '1px solid var(--border-strong)',
                padding: '0.8rem 1.75rem',
                borderRadius: '50px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                fontWeight: '700',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.color = 'var(--text-heading)'; }}
            >
              ABOUT ME <ArrowDown size={14} />
            </a>

            <a
              href="#projects"
              style={{
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'underline',
                fontWeight: '600'
              }}
            >
              SELECTED WORKS
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Capsule Frame (Reference Image) */}
        <div 
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            style={{
              position: 'relative',
              height: '520px',
              borderRadius: '28px',
              overflow: 'hidden',
              cursor: onSelectProject ? 'pointer' : 'default',
              border: '1px solid var(--border-strong)',
              boxShadow: 'var(--shadow-elevation)',
              background: 'var(--bg-secondary)'
            }}
            onClick={() => onSelectProject && onSelectProject(currentProject)}
          >
            {/* Sliding Images Container with Crossfade Transitions */}
            {PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: idx === currentIndex ? 1 : 0,
                  transform: idx === currentIndex ? 'scale(1)' : 'scale(1.04)',
                  transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: idx === currentIndex ? 'auto' : 'none',
                  zIndex: idx === currentIndex ? 1 : 0
                }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(14, 26, 43, 0.85) 0%, rgba(14, 26, 43, 0.1) 50%, transparent 80%)'
                }} />
              </div>
            ))}

            {/* Prev / Next Slide Nav Arrows */}
            <button
              onClick={handlePrev}
              title="Previous Project"
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '42%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
                color: 'var(--color-warm-white)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 15,
                transition: 'all 0.2s ease',
                opacity: isHovered ? 0.95 : 0.4
              }}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={handleNext}
              title="Next Project"
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '42%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.3)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50%',
                color: 'var(--color-warm-white)',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 15,
                transition: 'all 0.2s ease',
                opacity: isHovered ? 0.95 : 0.4
              }}
            >
              <ChevronRight size={22} />
            </button>

            {/* Bottom Capsule Overlay Info Badge */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '1.25rem',
              right: '1.25rem',
              background: 'rgba(14, 26, 43, 0.85)',
              backdropFilter: 'blur(12px)',
              padding: '1rem 1.25rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              zIndex: 10,
              gap: '1rem'
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--accent-gold)',
                  letterSpacing: '0.12em',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  marginBottom: '2px'
                }}>
                  {currentIndex === 0 ? "★ FLAGSHIP ARCHITECTURAL WORK" : "// FEATURED PORTFOLIO WORK"}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  fontSize: '1rem',
                  color: 'var(--color-warm-white)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {currentProject.title}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: 'var(--color-taupe-grey)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginTop: '1px'
                }}>
                  {currentProject.location} — {currentProject.subtitle}
                </div>

                {/* Interactive Progress Indicator Dots */}
                <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.5rem', alignItems: 'center' }}>
                  {PROJECTS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => handleDotClick(e, dotIdx)}
                      title={`Go to slide ${dotIdx + 1}`}
                      style={{
                        height: '4px',
                        width: dotIdx === currentIndex ? '22px' : '6px',
                        background: dotIdx === currentIndex ? 'var(--accent-gold)' : 'rgba(255,255,255,0.3)',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'all 0.3s ease'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button 
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  if (onSelectProject) onSelectProject(currentProject);
                }}
                style={{
                  background: 'var(--accent-gold)',
                  color: 'var(--color-navy)',
                  width: '38px',
                  height: '38px',
                  border: 'none',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease'
                }}
                title="Inspect Project Case Study"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Architectural Stats Bar */}
      <div style={{
        marginTop: '3.5rem',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border-strong)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.5rem',
        background: 'var(--bg-card)',
        padding: '1.5rem',
        borderRadius: '4px'
      }}>
        {STUDIO_STATS.map((stat, idx) => (
          <div key={idx} style={{ padding: '0.5rem' }}>
            <div style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(1.3rem, 1.8vw, 1.85rem)', 
              fontWeight: '700',
              color: 'var(--text-heading)',
              lineHeight: 1.15
            }}>
              {stat.value}
            </div>
            <div style={{ 
              fontSize: '0.75rem', 
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.08em', 
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginTop: '0.4rem',
              fontWeight: '600'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

