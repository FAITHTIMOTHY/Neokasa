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
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '3rem 1.5rem 2rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Top Banner Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 0.85fr)',
        gap: '2.5rem',
        alignItems: 'center',
        marginTop: '1rem'
      }} className="mobile-grid-1">
        
        {/* Left Column: Heading & Vision */}
        <div>

          <h1 style={{
            color: 'var(--text-heading)',
            fontFamily: 'var(--font-display)',
            fontWeight: '700',
            marginBottom: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.03em'
          }}>
            Modern Thinking, <span style={{ color: 'var(--accent-gold)', fontStyle: 'italic', fontFamily: 'var(--font-serif)', textTransform: 'none', fontWeight: '700' }}>Timeless Architecture</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            maxWidth: '620px',
            marginBottom: '2rem',
            lineHeight: 1.7
          }}>
            NEO KASA crafts progressive, climate-adaptive spatial works across institutional, residential, and sustainable typologies. We blend raw material purity with precision BIM engineering.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              Explore Selected Works
              <ArrowDown size={16} />
            </a>

            <button onClick={onOpenContact} className="btn-secondary">
              <Mail size={16} />
              Contact Studio
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual Slideshow Showcase */}
        <div 
          style={{ position: 'relative' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="card-architectural" 
            style={{
              position: 'relative',
              height: '460px',
              borderRadius: '2px',
              overflow: 'hidden',
              cursor: onSelectProject ? 'pointer' : 'default',
              boxShadow: 'var(--shadow-elevation)'
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
              </div>
            ))}

            {/* Prev / Next Slide Nav Arrows — Frameless Minimalist Architectural Chevrons */}
            <button
              onClick={handlePrev}
              title="Previous Project"
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '42%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-warm-white)',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.75))',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 15,
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isHovered ? 0.95 : 0.45,
                padding: 0
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)'; e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; e.currentTarget.style.opacity = isHovered ? '0.95' : '0.45'; }}
            >
              <ChevronLeft size={34} strokeWidth={1.5} />
            </button>

            <button
              onClick={handleNext}
              title="Next Project"
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '42%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                color: 'var(--color-warm-white)',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.75))',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 15,
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isHovered ? 0.95 : 0.45,
                padding: 0
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.15)'; e.currentTarget.style.opacity = '1'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; e.currentTarget.style.opacity = isHovered ? '0.95' : '0.45'; }}
            >
              <ChevronRight size={34} strokeWidth={1.5} />
            </button>

            {/* Bottom Glass Overlay Info Badge */}
            <div style={{
              position: 'absolute',
              bottom: '1rem',
              left: '1rem',
              right: '1rem',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(12px)',
              padding: '1.1rem 1.25rem',
              border: '1px solid var(--border-strong)',
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
                  {currentIndex === 0 ? "★ FLAGSHIP ARCHITECTURAL WORK" : "// FEATURED PORTFOLIO SHOWCASE"}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: '700',
                  fontSize: '1.05rem',
                  color: 'var(--text-heading)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {currentProject.title}
                </div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  marginTop: '1px'
                }}>
                  {currentProject.location} — {currentProject.subtitle}
                </div>

                {/* Interactive Progress Indicator Dots */}
                <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.6rem', alignItems: 'center' }}>
                  {PROJECTS.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={(e) => handleDotClick(e, dotIdx)}
                      title={`Go to slide ${dotIdx + 1}: ${PROJECTS[dotIdx].title}`}
                      style={{
                        height: '4px',
                        width: dotIdx === currentIndex ? '24px' : '8px',
                        background: dotIdx === currentIndex ? 'var(--accent-gold)' : 'var(--border-strong)',
                        border: 'none',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
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
                  background: 'var(--color-navy)',
                  color: 'var(--color-warm-white)',
                  width: '40px',
                  height: '40px',
                  border: 'none',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'transform 0.2s ease'
                }}
                title="Inspect Project Case Study"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
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
        borderRadius: '2px'
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
