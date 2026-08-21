import React, { useState } from 'react';
import { Search, Filter, Grid, List, Eye, MapPin, Calendar, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function ProjectGrid({ onSelectProject }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [layoutMode, setLayoutMode] = useState("grid"); // "grid" or "list"

  const categories = ["All", "Design Showcase", "Residential", "Institutional", "Commercial"];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" style={{
      padding: '4rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        marginBottom: '2.5rem'
      }}>
        <div style={{
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase'
        }}>
          // PORTFOLIO SHOWCASE
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <h2 style={{ color: 'var(--text-primary)', textTransform: 'uppercase' }}>
            Selected Architectural Works
          </h2>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing {filteredProjects.length} of {PROJECTS.length} Projects
          </div>
        </div>
      </div>

      {/* Filter Toolbar & Search */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        padding: '1rem 1.25rem',
        marginBottom: '2.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <Filter size={16} color="var(--text-muted)" style={{ marginRight: '0.25rem' }} />
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              style={{
                background: selectedCategory === cat ? 'var(--color-charcoal)' : 'transparent',
                color: selectedCategory === cat ? 'var(--color-warm-white)' : 'var(--text-primary)',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'var(--color-charcoal)' : 'var(--border-subtle)',
                padding: '0.45rem 0.9rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Right Tools: Search Bar & View Mode Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', width: 'auto' }}>
          {/* Search Input */}
          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '0.75rem' }} />
            <input
              type="text"
              placeholder="Search project, location, material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                padding: '0.45rem 0.75rem 0.45rem 2.2rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-sans)',
                width: '220px',
                outline: 'none'
              }}
            />
          </div>

          {/* Layout Mode Toggle */}
          <div style={{ display: 'flex', border: '1px solid var(--border-subtle)' }} className="hide-on-mobile">
            <button
              onClick={() => setLayoutMode('grid')}
              title="Grid View"
              style={{
                background: layoutMode === 'grid' ? 'var(--bg-secondary)' : 'transparent',
                color: 'var(--text-primary)',
                border: 'none',
                padding: '0.45rem 0.65rem',
                cursor: 'pointer'
              }}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setLayoutMode('list')}
              title="Editorial List View"
              style={{
                background: layoutMode === 'list' ? 'var(--bg-secondary)' : 'transparent',
                color: 'var(--text-primary)',
                border: 'none',
                padding: '0.45rem 0.65rem',
                cursor: 'pointer'
              }}
            >
              <List size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display Grid / List */}
      {filteredProjects.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '4rem 1.5rem',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)'
        }}>
          <p style={{ color: 'var(--text-muted)' }}>No architectural projects match your filter query.</p>
          <button 
            onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} 
            className="btn-secondary" 
            style={{ marginTop: '1rem' }}
          >
            Reset Filters
          </button>
        </div>
      ) : layoutMode === 'grid' ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }} className="mobile-grid-1">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="card-architectural img-zoom-container"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                borderRadius: '2px'
              }}
              onClick={() => onSelectProject(project)}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--border-strong)',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: '600'
                }}>
                  {project.category}
                </div>
                {/* Status Badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  right: '0.75rem',
                  background: 'var(--color-charcoal)',
                  color: 'var(--color-warm-white)',
                  padding: '0.25rem 0.65rem',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {project.year}
                </div>
                {/* Visual Showcase Indicator */}
                {project.isConceptOnly && (
                  <div style={{
                    position: 'absolute',
                    bottom: '0.75rem',
                    left: '0.75rem',
                    background: 'var(--accent-gold)',
                    color: 'var(--color-charcoal-deep)',
                    padding: '0.25rem 0.65rem',
                    fontSize: '0.62rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: '700',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }}>
                    3D Visual & Material Showcase
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '1.25rem', 
                    fontWeight: '700',
                    marginBottom: '0.25rem' 
                  }}>
                    {project.title}
                  </h3>
                  <div style={{ 
                    fontSize: '0.85rem', 
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    marginBottom: '1rem' 
                  }}>
                    {project.subtitle}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Maximize2 size={14} />
                      {project.area}
                    </div>
                  </div>
                </div>

                {/* Materials Tags */}
                <div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {project.materials.slice(0, 3).map((mat, mIdx) => (
                      <span 
                        key={mIdx}
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-subtle)',
                          padding: '0.2rem 0.5rem',
                          fontSize: '0.65rem',
                          color: 'var(--text-secondary)'
                        }}
                      >
                        {mat}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '0.75rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--text-primary)'
                  }}>
                    <span>Inspect Case Study</span>
                    <Eye size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List / Editorial Layout */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="card-architectural mobile-grid-1"
              style={{
                display: 'grid',
                gridTemplateColumns: '320px 1fr',
                cursor: 'pointer',
                overflow: 'hidden'
              }}
              onClick={() => onSelectProject(project)}
            >
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{project.category} • {project.year}</div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', marginTop: '0.2rem' }}>{project.title}</h3>
                      <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)' }}>{project.subtitle}</div>
                    </div>
                    <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{project.location}</div>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.75rem', lineHeight: 1.5 }}>
                    {project.description}
                  </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{project.area}</div>
                  <span className="btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.7rem' }}>
                    {project.isConceptOnly ? "Inspect 3D Showcase & Specs →" : "View Blueprint & Specs →"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
