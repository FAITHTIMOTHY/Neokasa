import React, { useState } from 'react';
import { Search, Filter, Grid, List, Eye, MapPin, Calendar, Maximize2, ArrowRight, Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function ProjectGrid({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Design Showcase", "Residential", "Institutional", "Commercial"];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sketchGallery = [
    { title: "Fashion House Material Analysis", image: "/assets/fashion_house/fashion_house_material_analysis.jpg", subtitle: "EPDM Membrane & Perforated Pods" },
    { title: "UNIUYO Structural Working Drawing", image: "/assets/uniuyo/uniuyo_working_drawings.png", subtitle: "A101 Ground Plan & Section BB" },
    { title: "Azure Terrace CAD Floor Plans", image: "/assets/concepts/azure_terrace_cad_twin_floorplans.jpg", subtitle: "Ground & First Floor Townhouse Layout" },
    { title: "Grand Portico Duplex Cross-Section", image: "/assets/residences/heritage_duplex_cad_section.jpg", subtitle: "Section A-A Ceiling Heights & Roof Truss" },
    { title: "Fashion House 4-Facade Elevations", image: "/assets/fashion_house/fashion_house_elevations.png", subtitle: "Approach, Rear, Left & Right CAD" },
    { title: "Sculptural Monolith Working Drawings", image: "/assets/concepts/sculptural_bungalow_working_drawings.jpg", subtitle: "Bungalow Floor Plan & Elevations" }
  ];

  return (
    <section id="projects" style={{
      padding: '5rem 1.5rem 2rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* =========================================================================
          SHEET 02: "CONTENT" VERTICAL PANORAMIC STRIP INDEX (Reference Image 2)
          ========================================================================= */}
      <div style={{ marginBottom: '3.5rem' }}>
        {/* Folio Bar */}
        <div className="arch-folio-bar">
          <div>NEO KASA</div>
          <div className="arch-folio-center">NEO KASA | Portfolio 2025</div>
          <div className="arch-folio-page">02</div>
        </div>

        {/* Section Heading */}
        <div style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.2em',
          color: 'var(--accent-gold)',
          textTransform: 'uppercase',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          // PROJECT INDEX & DIRECTORY
        </div>

        {/* 6 Vertical Panoramic Strips (Reference Image 2) */}
        <div className="arch-strips-grid">
          {PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="arch-strip-item"
              onClick={() => onSelectProject && onSelectProject(proj)}
              title={`Inspect ${proj.title}`}
            >
              <div className="arch-strip-frame">
                <img src={proj.image} alt={proj.title} />
                <div className="arch-strip-num">0{idx + 1}</div>
              </div>
              <div className="arch-strip-title">
                {proj.title.split(' ').slice(0, 3).join(' ')}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {proj.category}
              </div>
            </div>
          ))}

          {/* 6th Strip: Sketches / Explorations */}
          <a
            href="#sketches"
            className="arch-strip-item"
            style={{ textDecoration: 'none' }}
          >
            <div className="arch-strip-frame" style={{ background: 'var(--bg-secondary)' }}>
              <img src="/assets/uniuyo/uniuyo_working_drawings.png" alt="Sketches & Blueprints" />
              <div className="arch-strip-num">06</div>
            </div>
            <div className="arch-strip-title">
              Sketches & Studies
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              Explorations
            </div>
          </a>
        </div>

        {/* Giant Cropped "CONTENT" Watermark (Reference Image 2) */}
        <div className="arch-watermark-title">
          CONTENT
        </div>
      </div>

      {/* =========================================================================
          FILTER & SEARCH TOOLBAR
          ========================================================================= */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        padding: '0.85rem 1.25rem',
        marginBottom: '2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        borderRadius: '2px'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Filter size={15} color="var(--accent-gold)" style={{ marginRight: '0.25rem' }} />
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'var(--text-heading)' : 'transparent',
                color: selectedCategory === cat ? 'var(--bg-primary)' : 'var(--text-primary)',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--text-heading)' : 'var(--border-subtle)',
                padding: '0.4rem 0.85rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderRadius: '2px'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem' }} />
          <input
            type="text"
            placeholder="Search project, material, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              padding: '0.45rem 0.75rem 0.45rem 2.2rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-sans)',
              width: '240px',
              outline: 'none',
              borderRadius: '2px'
            }}
          />
        </div>
      </div>

      {/* =========================================================================
          SHEETS 03 - 07: EDITORIAL PROJECT CASE STUDY SHEETS (Reference Image 3)
          ========================================================================= */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {filteredProjects.map((project, pIdx) => {
          const sheetNumber = String(pIdx + 3).padStart(2, '0');
          const watermarkNumber = String(pIdx + 1).padStart(2, '0');

          return (
            <div 
              key={project.id}
              style={{
                position: 'relative',
                borderTop: '1px solid var(--border-strong)',
                paddingTop: '2rem'
              }}
            >
              {/* Top Folio Bar */}
              <div className="arch-folio-bar">
                <div>NEO KASA</div>
                <div className="arch-folio-center">NEO KASA | Portfolio 2025</div>
                <div className="arch-folio-page">{sheetNumber}</div>
              </div>

              {/* Drafting L-Bracket Header (Reference Image 3) */}
              <div className="arch-drafting-bracket">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '1rem' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                    fontWeight: '800',
                    color: 'var(--text-heading)',
                    textTransform: 'uppercase',
                    lineHeight: 1.1,
                    margin: 0
                  }}>
                    {project.title}
                  </h2>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.82rem',
                    color: 'var(--accent-gold)',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase'
                  }}>
                    Studio Project, {project.year}
                  </div>
                </div>

                <div className="arch-drafting-baseline" />

                {/* Meta Row */}
                <div style={{
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  marginBottom: '1rem',
                  letterSpacing: '0.04em'
                }}>
                  <strong style={{ color: 'var(--text-heading)' }}>Typology:</strong> {project.category} ({project.area}) &nbsp;|&nbsp; <strong style={{ color: 'var(--text-heading)' }}>Location:</strong> {project.location}
                </div>

                {/* Description Narrative */}
                <p style={{
                  fontSize: '1.02rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  maxWidth: '920px',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>
              </div>

              {/* Hero Architectural Render Showcase Container (Click to Inspect) */}
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '520px',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid var(--border-strong)',
                  boxShadow: 'var(--shadow-elevation)',
                  background: 'var(--bg-secondary)',
                  marginBottom: '1.5rem'
                }}
                className="img-zoom-container"
                onClick={() => onSelectProject && onSelectProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />

                {/* Hover Quick Action Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  right: '1.25rem',
                  background: 'var(--color-navy)',
                  color: 'var(--color-warm-white)',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
                  zIndex: 10
                }}>
                  <Eye size={15} color="var(--accent-gold)" />
                  <span>Inspect Full Case Study & Blueprints</span>
                  <ArrowRight size={14} />
                </div>

                {/* Material Badges on Card */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  display: 'flex',
                  gap: '0.4rem',
                  flexWrap: 'wrap',
                  maxWidth: '65%',
                  zIndex: 10
                }} className="hide-on-mobile">
                  {project.materials.slice(0, 3).map((mat, mIdx) => (
                    <span 
                      key={mIdx}
                      style={{
                        background: 'rgba(14, 26, 43, 0.8)',
                        backdropFilter: 'blur(6px)',
                        color: 'var(--color-warm-white)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        borderRadius: '2px'
                      }}
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Oversized Corner Watermark Number (Reference Image 3) */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-1rem' }}>
                <div className="arch-watermark-number">
                  {watermarkNumber}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          SHEET 08: "MISCELLANEOUS: SKETCHES & STUDIES" MOSAIC (Reference Image 1)
          ========================================================================= */}
      <div id="sketches" style={{
        marginTop: '3.5rem',
        borderTop: '1px solid var(--border-strong)',
        paddingTop: '2rem'
      }}>
        {/* Folio Bar */}
        <div className="arch-folio-bar">
          <div>NEO KASA</div>
          <div className="arch-folio-center">NEO KASA | Portfolio 2025</div>
          <div className="arch-folio-page">08</div>
        </div>

        {/* L-Bracket Drafting Header (Reference Image 1) */}
        <div className="arch-drafting-bracket">
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: '800',
            color: 'var(--text-heading)',
            textTransform: 'uppercase',
            margin: 0
          }}>
            Miscellaneous: Sketches & Explorations
          </h2>
          <div className="arch-drafting-baseline" />
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '800px', lineHeight: 1.7 }}>
            A curated collection of concept development drawings, hand drafting studies, parametric facade solar calculations, and technical section details exploring the synthesis of form and climate adaptability.
          </p>
        </div>

        {/* Collage / Mosaic Sketch Grid with Corner Cross Tick Marks (Reference Image 1) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {sketchGallery.map((sketch, sIdx) => (
            <div 
              key={sIdx}
              className="arch-corner-card"
              style={{
                boxShadow: 'var(--shadow-elevation)',
                borderRadius: '2px',
                cursor: 'pointer'
              }}
              onClick={() => onSelectProject && onSelectProject(PROJECTS[sIdx % PROJECTS.length])}
            >
              <div style={{
                position: 'relative',
                height: '240px',
                borderRadius: '2px',
                overflow: 'hidden',
                background: 'var(--bg-secondary)',
                marginBottom: '1rem'
              }}>
                <img 
                  src={sketch.image} 
                  alt={sketch.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent-gold)',
                letterSpacing: '0.1em',
                fontWeight: '700',
                textTransform: 'uppercase',
                marginBottom: '0.25rem'
              }}>
                STUDY // 0{sIdx + 1}
              </div>

              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: '700',
                color: 'var(--text-heading)',
                marginBottom: '0.2rem'
              }}>
                {sketch.title}
              </div>

              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                {sketch.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* Giant Cropped "SKETCHES" Watermark (Reference Image 1) */}
        <div className="arch-watermark-title" style={{ marginTop: '1rem' }}>
          SKETCHES
        </div>
      </div>
    </section>
  );
}

