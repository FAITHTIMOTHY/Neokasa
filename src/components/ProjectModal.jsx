import React, { useState, useEffect } from 'react';
import { X, MapPin, Maximize2, Calendar, Award, Check, Layers, Info, FileText, Grid } from 'lucide-react';
import FloorPlanHotspots from './FloorPlanHotspots';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'floorplan' | 'materials' | 'specs'
  const [selectedGalleryImg, setSelectedGalleryImg] = useState(null);

  useEffect(() => {
    setSelectedGalleryImg(null);
    setActiveTab('overview');
  }, [project?.id]);

  if (!project) return null;

  const hasDrawings = !project.isConceptOnly && Boolean(project.blueprintImage);

  const tabs = [
    { id: 'overview', label: 'Overview & Perspectives', icon: Info },
    ...(hasDrawings ? [{ id: 'floorplan', label: 'Working Drawings & Plans', icon: Layers }] : []),
    { id: 'materials', label: 'Material Breakdown', icon: Grid },
    { id: 'specs', label: 'BIM Specifications', icon: Award }
  ];

  const currentImage = selectedGalleryImg || project.image;
  const gallery = project.gallery || [
    project.image,
    project.blueprintImage,
    project.materialAnalysisImage,
    project.interiorPerspectivesImage
  ].filter(Boolean);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '1100px', width: '92%' }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--border-strong)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          background: 'var(--bg-secondary)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>{project.status}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginTop: '0.2rem', color: 'var(--text-heading)' }}>
              {project.title}
            </h2>
            <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              {project.subtitle}
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--bg-primary)',
          overflowX: 'auto'
        }}>
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: isActive ? 'var(--bg-card)' : 'transparent',
                  color: isActive ? 'var(--text-heading)' : 'var(--text-muted)',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--color-deep-brown)' : '2px solid transparent',
                  padding: '0.85rem 1.25rem',
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  whiteSpace: 'nowrap'
                }}
              >
                <Icon size={14} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Content Body */}
        <div style={{ padding: '2rem', maxHeight: '75vh', overflowY: 'auto' }}>
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Main Active Viewer Image */}
              <div style={{ height: '420px', borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-subtle)', background: '#111' }}>
                <img src={currentImage} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>

              {/* Gallery Thumbnails Carousel */}
              {gallery.length > 1 && (
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                    // SELECT PERSPECTIVE / INTERIOR DRAWING
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                    {gallery.map((imgUrl, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedGalleryImg(imgUrl)}
                        style={{
                          border: currentImage === imgUrl ? '2px solid var(--color-deep-brown)' : '1px solid var(--border-subtle)',
                          borderRadius: '2px',
                          padding: 0,
                          background: 'none',
                          cursor: 'pointer',
                          opacity: currentImage === imgUrl ? 1 : 0.7,
                          flexShrink: 0
                        }}
                      >
                        <img src={imgUrl} alt={`Gallery view ${i + 1}`} style={{ width: '100px', height: '65px', objectFit: 'cover', display: 'block' }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid Details */}
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '2rem' }} className="mobile-grid-1">
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--text-heading)' }}>Architectural Concept</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>

                  <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Design Intent</h4>
                  <p style={{ fontSize: '0.9rem', fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--text-secondary)', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-gold)' }}>
                    "{project.designIntent}"
                  </p>
                </div>

                {/* Specs Summary Box */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-strong)', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--text-heading)' }}>Project Details</h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Location</span>
                      <span style={{ fontWeight: '600' }}>{project.location}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Footprint Area</span>
                      <span style={{ fontWeight: '600' }}>{project.area}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Client</span>
                      <span style={{ fontWeight: '600' }}>{project.client || "Private"}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.4rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Year</span>
                      <span style={{ fontWeight: '600' }}>{project.year}</span>
                    </div>
                  </div>

                  {/* Materials Tag Cloud */}
                  <div style={{ marginTop: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>MATERIAL PALETTE</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {project.materials.map((mat, i) => (
                        <span key={i} style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '0.25rem 0.5rem', fontSize: '0.7rem' }}>
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'floorplan' && (
            <div>
              {project.isConceptOnly || !project.floorPlanPins || project.floorPlanPins.length === 0 ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-strong)',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      // 3D DESIGN SHOWCASE & FACADE STUDY
                    </div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-heading)' }}>
                      Architectural Exterior Design Concept
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      This showcase focuses on exterior geometry, material juxtaposition, and facade solar shading performance. CAD working floor plans and mechanical layouts are excluded for this visual concept release.
                    </p>
                  </div>

                  {project.gallery?.[1] && (
                    <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-strong)', background: '#111' }}>
                      <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        FRONT ELEVATION PERSPECTIVE
                      </div>
                      <img
                        src={project.gallery[1]}
                        alt={`${project.title} Front Elevation`}
                        style={{ width: '100%', maxHeight: '500px', objectFit: 'contain', display: 'block', margin: '0 auto' }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <FloorPlanHotspots project={project} />
              )}
            </div>
          )}

          {activeTab === 'materials' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* Material Analysis Board / Sheet */}
              {project.materialAnalysisImage && (
                <div>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.6rem', textTransform: 'uppercase' }}>
                    // ARCHITECTURAL MATERIAL ANALYSIS BOARD
                  </div>
                  <div style={{ borderRadius: '2px', overflow: 'hidden', border: '1px solid var(--border-strong)', background: '#fff' }}>
                    <img src={project.materialAnalysisImage} alt="Material Analysis Breakdown Sheet" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
              )}

              {/* Detailed Material Breakdown Specification Cards */}
              {project.materialBreakdown ? (
                <div style={{ background: 'var(--bg-card)', padding: '1.75rem', border: '1px solid var(--border-strong)' }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    // SPECIFIED FACADE ASSEMBLIES & TECHNICAL PROPERTIES
                  </div>
                  <h3 style={{ color: 'var(--text-heading)', marginBottom: '1.25rem' }}>Detailed Material Palette & Performance</h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                    {project.materialBreakdown.map((item, idx) => (
                      <div key={idx} style={{
                        background: 'var(--bg-secondary)',
                        padding: '1.25rem',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <span style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontWeight: '700' }}>
                              0{idx + 1} • {item.element}
                            </span>
                          </div>
                          <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-heading)', marginBottom: '0.4rem' }}>
                            {item.name}
                          </h4>
                          <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            <span style={{ color: 'var(--text-muted)' }}>Finish:</span> {item.finish}
                          </div>
                        </div>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, borderTop: '1px solid var(--border-subtle)', paddingTop: '0.6rem' }}>
                          {item.purpose}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ background: 'var(--bg-card)', padding: '2rem', border: '1px solid var(--border-strong)' }}>
                  <h3 style={{ color: 'var(--text-heading)', marginBottom: '1rem' }}>Specified Material Assemblies</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                    {project.materials.map((mat, i) => (
                      <div key={i} style={{ background: 'var(--bg-secondary)', padding: '1rem', border: '1px solid var(--border-subtle)' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)' }}>ELEMENT 0{i + 1}</div>
                        <div style={{ fontWeight: '600', marginTop: '0.25rem' }}>{mat}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'specs' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-strong)', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-heading)' }}>Engineering & Environmental Specifications</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="mobile-grid-1">
                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>STRUCTURAL SYSTEM</div>
                    <div style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{project.specs?.structure}</div>

                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>ENVELOPE & GLAZING</div>
                    <div style={{ fontSize: '0.9rem' }}>{project.specs?.glazing}</div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>SUSTAINABILITY & ENERGY</div>
                    <div style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{project.specs?.sustainability}</div>

                    <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>ENVIRONMENTAL CERTIFICATION</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', fontWeight: '600' }}>{project.specs?.leed}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
