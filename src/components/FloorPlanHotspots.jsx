import React, { useState, useEffect } from 'react';
import { MapPin, CheckCircle2, Layers } from 'lucide-react';

export default function FloorPlanHotspots({ project }) {
  const [activePin, setActivePin] = useState(project.floorPlanPins?.[0] || null);

  // Dynamically collect all available CAD Working Drawing sheets for any project
  const getCadSheets = () => {
    if (project.id === "neokasa-house-of-fashion-atelier") {
      return [
        { label: "Ground Floor Layout", img: "/assets/fashion_house/fashion_house_ground_floor.png" },
        { label: "First Floor Layout", img: "/assets/fashion_house/fashion_house_first_floor.png" },
        { label: "Roof Plan & Geometry", img: "/assets/fashion_house/fashion_house_roof_plan.png" },
        { label: "Elevations (4 Facades)", img: "/assets/fashion_house/fashion_house_elevations.png" },
        { label: "Material Analysis Board", img: "/assets/fashion_house/fashion_house_material_analysis.jpg" }
      ];
    }

    if (project.id === "neokasa-azure-terrace-residences") {
      return [
        { label: "Twin Floor Plans", img: "/assets/concepts/azure_terrace_cad_twin_floorplans.jpg" },
        { label: "Single Unit 05 Plan", img: "/assets/concepts/azure_terrace_cad_single_floorplans.jpg" },
        { label: "Twin Elevations (Sheet 1)", img: "/assets/concepts/azure_terrace_cad_twin_elevations.jpg" },
        { label: "Unit 05 Elevations & Section", img: "/assets/concepts/azure_terrace_cad_unit05_section.jpg" },
        { label: "Master Colored Plan", img: "/assets/concepts/azure_terrace_cad_master_plan.jpg" },
        { label: "Material Analysis Board", img: "/assets/concepts/azure_terrace_material_analysis.jpg" }
      ];
    }
    
    const sheets = [];
    if (project.blueprintImage) {
      sheets.push({ label: "Main Floor Plan", img: project.blueprintImage });
    }
    if (project.repoFiles) {
      project.repoFiles.forEach(folder => {
        folder.files?.forEach(file => {
          if (file.preview && file.preview !== project.blueprintImage && !sheets.some(s => s.img === file.preview)) {
            const cleanLabel = file.name
              .replace(/\.(dwg|cad|png|jpg|spec|gh)$/i, '')
              .replace(/_/g, ' ')
              .replace(/\b\w/g, c => c.toUpperCase());
            sheets.push({ label: cleanLabel, img: file.preview });
          }
        });
      });
    }
    return sheets;
  };

  const cadSheets = getCadSheets();

  const [currentPlanImg, setCurrentPlanImg] = useState(project.blueprintImage || "/assets/project_floorplan.png");

  useEffect(() => {
    setCurrentPlanImg(project.blueprintImage || "/assets/project_floorplan.png");
    setActivePin(project.floorPlanPins?.[0] || null);
  }, [project?.id, project?.blueprintImage]);

  if (!project.floorPlanPins || project.floorPlanPins.length === 0) {
    return <p style={{ color: 'var(--text-muted)' }}>Floor plan pin data coming soon for this project.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      {/* CAD Working Drawing Sheet Selector Bar */}
      {cadSheets.length > 1 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          padding: '0.75rem 1rem',
          borderRadius: '2px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.5rem' }}>
            <Layers size={14} color="var(--accent-gold)" />
            <span>SELECT WORKING DRAWING SHEET:</span>
          </div>

          {cadSheets.map((sheet, index) => {
            const isSelected = currentPlanImg === sheet.img;
            return (
              <button
                key={index}
                onClick={() => setCurrentPlanImg(sheet.img)}
                style={{
                  background: isSelected ? 'var(--color-charcoal)' : 'var(--bg-secondary)',
                  color: isSelected ? 'var(--color-warm-white)' : 'var(--text-primary)',
                  border: isSelected ? '1px solid var(--accent-gold)' : '1px solid var(--border-subtle)',
                  padding: '0.35rem 0.75rem',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderRadius: '2px',
                  transition: 'all 0.2s ease'
                }}
              >
                {sheet.label}
              </button>
            );
          })}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)', gap: '2rem' }} className="mobile-grid-1">
        {/* Left: Floor Plan Blueprint Canvas */}
        <div style={{
          position: 'relative',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-strong)',
          padding: '1rem',
          borderRadius: '2px',
          overflow: 'hidden',
          minHeight: '340px'
        }}>
          <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>// CAD SCHEMATIC PLAN — ACTIVE SHEET</span>
            <span>CLICK PINS TO INSPECT ROOMS</span>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '300px' }}>
            <img 
              src={currentPlanImg} 
              alt={`${project.title} Architectural Floor Plan`}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '2px', opacity: 0.95 }}
            />

            {/* Render Interactive Hotspot Pins only on default blueprint or matching sheet */}
            {currentPlanImg === project.blueprintImage && project.floorPlanPins.map((pin) => {
              const isSelected = activePin?.id === pin.id;
              return (
                <button
                  key={pin.id}
                  onClick={() => setActivePin(pin)}
                  title={pin.title}
                  style={{
                    position: 'absolute',
                    top: `${pin.y}%`,
                    left: `${pin.x}%`,
                    transform: 'translate(-50%, -50%)',
                    width: isSelected ? '34px' : '26px',
                    height: isSelected ? '34px' : '26px',
                    borderRadius: '50%',
                    background: isSelected ? 'var(--accent-gold)' : 'var(--color-charcoal)',
                    color: isSelected ? 'var(--color-charcoal-deep)' : 'var(--color-warm-white)',
                    border: '2px solid var(--color-warm-white)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    zIndex: 10,
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}
                >
                  {pin.id}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Room Inspector Detail Card */}
        {activePin ? (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-strong)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                <MapPin size={16} />
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Spatial Hotspot #{activePin.id}
                </span>
              </div>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                {activePin.title}
              </h4>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {activePin.desc}
              </p>

              {/* Preview Image */}
              <div style={{ height: '160px', borderRadius: '2px', overflow: 'hidden', marginBottom: '1rem', border: '1px solid var(--border-subtle)' }}>
                <img 
                  src={activePin.image} 
                  alt={activePin.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <div style={{ background: 'var(--bg-secondary)', padding: '0.75rem 1rem', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={14} color="var(--accent-gold)" />
              <span>BIM Spatial Hotspot Sync Active</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
