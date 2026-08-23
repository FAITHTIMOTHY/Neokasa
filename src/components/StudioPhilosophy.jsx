import React from 'react';
import { Award, Sparkles, CheckCircle2, Home, Cpu, Layers } from 'lucide-react';

export default function StudioPhilosophy() {
  return (
    <section id="philosophy" style={{
      padding: '3rem 1.5rem 1rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Top Folio Bar */}
      <div className="arch-folio-bar">
        <div>NEO KASA</div>
        <div className="arch-folio-center">NEO KASA | Brand Manifesto 2025</div>
        <div className="arch-folio-page">09</div>
      </div>

      {/* Drafting L-Bracket Header */}
      <div className="arch-drafting-bracket">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          fontWeight: '800',
          color: 'var(--text-heading)',
          textTransform: 'uppercase',
          margin: 0
        }}>
          About NEO KASA & Philosophy
        </h2>
        <div className="arch-drafting-baseline" />
        <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', maxWidth: '850px', lineHeight: 1.75 }}>
          Redefining what modern living should look like through thoughtful architecture, sustainable craft, and meaningful spatial character that endures.
        </p>
      </div>

      {/* Origin of Name: NEO + KASA Highlight Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
        gap: '2rem',
        marginBottom: '3rem'
      }} className="mobile-grid-1">
        
        {/* NEO Card */}
        <div className="arch-corner-card" style={{ padding: '2.25rem', borderRadius: '2px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
            <Cpu size={22} />
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: '700', letterSpacing: '0.15em' }}>
              ETYMOLOGY // 01
            </span>
          </div>
          <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            NEO <span style={{ fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-muted)' }}>(Greek: νέος)</span>
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Signifies newness, innovation, and the constant pursuit of modern solutions. It represents a vision of architecture that is refreshed, reimagined, and responsive to contemporary life.
          </p>
        </div>

        {/* KASA Card */}
        <div className="arch-corner-card" style={{ padding: '2.25rem', borderRadius: '2px', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>
            <Home size={22} />
            <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: '700', letterSpacing: '0.15em' }}>
              ETYMOLOGY // 02
            </span>
          </div>
          <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
            KASA <span style={{ fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-muted)' }}>(House / Dwelling)</span>
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Derived from the word for house or dwelling, reflecting shelter, structure, and the fundamental idea of home—crafting spaces that feel forward-thinking yet deeply human.
          </p>
        </div>

      </div>

      {/* Main Philosophy Editorial Statement */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        padding: '3rem 2.5rem',
        borderRadius: '2px',
        position: 'relative'
      }}>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>
          // STATEMENT OF IDENTITY
        </div>
        
        <h3 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '1.25rem', lineHeight: 1.3, fontFamily: 'var(--font-display)' }}>
          "NEO KASA translates to 'Modern Home'—a brand dedicated to redefining what modern living should look like."
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem'
        }} className="mobile-grid-1">
          <div>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1rem' }}>
              Neo Kasa draws its meaning from the fusion of two powerful ideas. "Neo" signifies innovation and modern solutions, while "Kasa" reflects shelter and structure. When combined, Neo Kasa extends far beyond the literal translation of "New House."
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              It speaks to a design philosophy rooted in creativity, functional elegance, and the desire to shape spaces that inspire. We blend modern aesthetics with purposeful design—crafting buildings that feel both forward-thinking and deeply human.
            </p>
          </div>

          <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '1.75rem', borderRadius: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                CORE STUDIO COMMITMENT
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--text-heading)', lineHeight: 1.6 }}>
                "Redefining modern living through thoughtful architecture, meaningful spaces, and innovation that stands the test of time."
              </div>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: '600' }}>
              <Sparkles size={16} />
              <span>NEO KASA Brand Manifesto</span>
            </div>
          </div>
        </div>
      </div>

      {/* Giant Cropped "STUDIO" Watermark */}
      <div className="arch-watermark-title" style={{ marginTop: '1rem' }}>
        STUDIO
      </div>
    </section>
  );
}

