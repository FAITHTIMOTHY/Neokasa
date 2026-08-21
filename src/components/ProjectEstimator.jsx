import React, { useState } from 'react';
import { Compass, CheckCircle, Copy, Download, Sparkles, Send } from 'lucide-react';

export default function ProjectEstimator({ onOpenContact }) {
  const [typology, setTypology] = useState("Residential");
  const [areaSqM, setAreaSqM] = useState(650);
  const [terrain, setTerrain] = useState("Coastal Cliffside");
  const [aesthetic, setAesthetic] = useState("Minimalist Monolithic");
  const [copied, setCopied] = useState(false);

  const typologies = [
    { label: "Luxury Residential", factor: 1.2 },
    { label: "Sustainable Timber", factor: 1.15 },
    { label: "Commercial Headquarters", factor: 1.4 },
    { label: "Spatial Interior Loft", factor: 0.9 }
  ];

  const terrains = ["Coastal Cliffside", "Alpine / Mountain", "Urban Dense Core", "Suburban Forest Park"];
  const aesthetics = ["Minimalist Monolithic", "Parametric Organic", "Modern Japanese Wood", "Brutalist Concrete"];

  // Calculation estimates
  const estimatedDesignWeeks = Math.round(12 + (areaSqM / 200) * 2);
  const estimatedConstructionMonths = Math.round(10 + (areaSqM / 150) * 1.5);
  const bimLevel = areaSqM > 2000 ? "LOD 400 Parametric BIM" : "LOD 350 Detailed BIM";

  const briefSummary = `NEOKASA PROJECT BRIEF SUMMARY
----------------------------------------
Studio: NEOKASA Architecture
Typology: ${typology}
Estimated Footprint: ${areaSqM} m² (${Math.round(areaSqM * 10.764)} sq.ft)
Site Topography: ${terrain}
Architectural Aesthetic: ${aesthetic}
----------------------------------------
Estimated Design Phase: ~${estimatedDesignWeeks} Weeks
Estimated Construction Phase: ~${estimatedConstructionMonths} Months
BIM Model Standard: ${bimLevel}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(briefSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="estimator" style={{
      padding: '5rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      borderTop: '1px solid var(--border-strong)'
    }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
          // CLIENT BRIEF BUILDER & ESTIMATOR
        </div>
        <h2 style={{ textTransform: 'uppercase', marginTop: '0.2rem' }}>
          Interactive Project Proposal Generator
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '0.5rem' }}>
          Configure your architectural spatial requirements to receive an immediate preliminary scope, timeline estimate, and BIM specification brief.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
        gap: '2.5rem'
      }} className="mobile-grid-1">
        
        {/* Left Column: Form Controls */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          padding: '2rem',
          borderRadius: '2px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.75rem'
        }}>
          {/* Step 1: Typology */}
          <div>
            <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
              1. Project Typology
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {typologies.map((t, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setTypology(t.label)}
                  style={{
                    background: typology === t.label ? 'var(--color-deep-brown)' : 'var(--bg-secondary)',
                    color: typology === t.label ? 'var(--color-warm-white)' : 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.7rem 0.85rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    textAlign: 'left',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Footprint Area Slider */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                2. Footprint Area ({areaSqM} m² / {Math.round(areaSqM * 10.764)} sq.ft)
              </label>
            </div>
            <input
              type="range"
              min="150"
              max="5000"
              step="50"
              value={areaSqM}
              onChange={(e) => setAreaSqM(parseInt(e.target.value))}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
              <span>150 m² (Bespoke Villa)</span>
              <span>2,500 m² (Medium Pavilion)</span>
              <span>5,000 m² (Major Complex)</span>
            </div>
          </div>

          {/* Step 3: Site Topography */}
          <div>
            <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
              3. Site Topography & Environment
            </label>
            <select
              value={terrain}
              onChange={(e) => setTerrain(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)',
                padding: '0.75rem 1rem',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                borderRadius: '2px'
              }}
            >
              {terrains.map((t, idx) => (
                <option key={idx} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Step 4: Architectural Aesthetic */}
          <div>
            <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem' }}>
              4. Desired Spatial Aesthetic
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {aesthetics.map((a, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setAesthetic(a)}
                  style={{
                    background: aesthetic === a ? 'var(--color-deep-brown)' : 'var(--bg-secondary)',
                    color: aesthetic === a ? 'var(--color-warm-white)' : 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.65rem 0.75rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    textAlign: 'left'
                  }}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Generated Brief Summary */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-strong)',
          padding: '2rem',
          borderRadius: '2px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.75rem' }}>
              <Compass size={18} />
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Generated Project Scope Brief
              </span>
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>
              NEOKASA Preliminary Summary
            </h3>

            {/* Formatted Text Brief Preview */}
            <pre style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              padding: '1.25rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.6,
              borderRadius: '2px',
              marginBottom: '1.5rem'
            }}>
              {briefSummary}
            </pre>

            {/* Quick Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ background: 'var(--bg-primary)', padding: '0.85rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ESTIMATED SCHEMATIC DESIGN</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
                  ~{estimatedDesignWeeks} WKS
                </div>
              </div>
              <div style={{ background: 'var(--bg-primary)', padding: '0.85rem', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>ESTIMATED CONSTRUCTION</div>
                <div style={{ fontSize: '1.25rem', fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>
                  ~{estimatedConstructionMonths} MOS
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              className="btn-secondary"
              style={{ flexGrow: 1 }}
            >
              {copied ? <CheckCircle size={16} color="green" /> : <Copy size={16} />}
              {copied ? "Brief Copied!" : "Copy Scope Text"}
            </button>

            <button
              onClick={onOpenContact}
              className="btn-primary"
              style={{ flexGrow: 1 }}
            >
              <Send size={16} />
              Submit to Studio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
