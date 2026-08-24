import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { STUDIO_STATS } from '../data/projects';

export default function Hero({ onOpenContact }) {

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '3rem 1.5rem 1.5rem 1.5rem',
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
        
        {/* Left Column: Greeting, Bio & Vision */}
        <div style={{ position: 'relative' }}>
          <h1 style={{
            color: 'var(--text-heading)',
            fontFamily: 'var(--font-display)',
            fontWeight: '900',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            HI! I'M NSIKAKABASI
          </h1>

          <div style={{
            fontSize: '0.85rem',
            color: 'var(--accent-gold)',
            fontWeight: '700',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem'
          }}>
            ARCHITECT &amp; FOUNDER OF NEO KASA
          </div>

          <div style={{
            color: 'var(--text-secondary)',
            fontSize: '1.02rem',
            maxWidth: '620px',
            lineHeight: 1.85,
            marginBottom: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <p style={{ margin: 0 }}>
              I am <strong>Nsikakabasi Essien</strong>, the creative mind behind <strong>NEO KASA</strong>, an architect with a lifelong passion for design and craft. My work is rooted in creating impactful spatial solutions that benefit humanity and elevate the built environment.
            </p>
            <p style={{ margin: 0 }}>
              I am driven to design experiential spaces—designs that are fiercely rooted in place, full of purpose, and always keep the user at the centre. My portfolio explores the powerful synthesis of modern thinking, climate-adaptive architecture, and technical precision.
            </p>
            <p style={{ margin: 0 }}>
              Using <strong>Autodesk Revit</strong>, <strong>V-Ray</strong>, <strong>3ds Max</strong>, and <strong>Adobe Photoshop</strong> as primary tools, I transform ideas into detailed architectural models and immersive spatial presentations with character and enduring identity.
            </p>
          </div>

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
              href="#projects"
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
              EXPLORE WORKS <ArrowDown size={14} />
            </a>

            <a
              href="#philosophy"
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
              STUDIO PHILOSOPHY
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Portrait Frame of Nsikak */}
        <div style={{ position: 'relative' }}>
          <div 
            style={{
              position: 'relative',
              height: '560px',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '1px solid var(--border-strong)',
              boxShadow: 'var(--shadow-elevation)',
              background: 'var(--bg-secondary)'
            }}
          >
            {/* Fixed Full Portrait Image (Clear, No Overlays) */}
            <img 
              src="/assets/founder/nsikak_full.jpg" 
              alt="Nsikakabasi Essien — Architect & Founder of NEO KASA"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
                transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            />
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

