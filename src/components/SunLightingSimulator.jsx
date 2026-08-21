import React, { useState } from 'react';
import { Sun, Moon, Clock, Compass, Layers } from 'lucide-react';

export default function SunLightingSimulator() {
  // Time of day in decimal hours (6.0 = 6am, 12.0 = noon, 17.5 = 5:30pm golden hour, 22.0 = night)
  const [timeOfDay, setTimeOfDay] = useState(17.5);

  const presets = [
    { label: "Dawn", time: 6.0, icon: "🌅" },
    { label: "High Noon", time: 12.0, icon: "☀️" },
    { label: "Golden Hour", time: 17.5, icon: "🌇" },
    { label: "Midnight", time: 22.0, icon: "🌌" }
  ];

  // Dynamic visual calculations based on timeOfDay
  const formatTime = (t) => {
    const hours = Math.floor(t);
    const mins = Math.round((t - hours) * 60);
    const hh = String(hours).padStart(2, '0');
    const mm = String(mins).padStart(2, '0');
    return `${hh}:${mm}`;
  };

  // Sun position angle (0 deg at dawn 6am, 90 deg at noon 12pm, 180 deg at 6pm, etc.)
  const sunAngle = ((timeOfDay - 6) / 16) * 180;
  
  // Dynamic CSS lighting filter calculations
  const getLightingStyles = () => {
    if (timeOfDay < 7) {
      // Dawn: soft cool pink/blue ambient light
      return {
        filter: 'brightness(0.75) contrast(1.1) sepia(0.2) hue-rotate(-20deg)',
        overlay: 'rgba(255, 180, 150, 0.15)',
        shadowOpacity: 0.3,
        shadowTransform: 'skewX(-25deg)',
        title: "DAWN LIGHT (06:00)",
        desc: "Low-angle soft morning light filtering through forest foliage and glass framing."
      };
    } else if (timeOfDay >= 7 && timeOfDay <= 15) {
      // Midday: crisp intense daylight, short sharp vertical shadows
      const intensity = 1 + (1 - Math.abs(timeOfDay - 12) / 5) * 0.15;
      return {
        filter: `brightness(${intensity}) contrast(1.15) saturate(1.05)`,
        overlay: 'rgba(255, 255, 255, 0.05)',
        shadowOpacity: 0.5,
        shadowTransform: `skewX(${(timeOfDay - 12) * 4}deg)`,
        title: "HIGH NOON SOLAR EXPOSURE (12:00)",
        desc: "Maximum solar radiance with short sharp shadows highlighting architectural concrete joinery."
      };
    } else if (timeOfDay > 15 && timeOfDay <= 19) {
      // Golden hour: deep rich warm amber lighting with long dramatic horizontal shadows
      return {
        filter: 'brightness(0.9) contrast(1.2) sepia(0.4) saturate(1.4) hue-rotate(-10deg)',
        overlay: 'rgba(230, 140, 40, 0.25)',
        shadowOpacity: 0.65,
        shadowTransform: 'skewX(35deg)',
        title: "GOLDEN HOUR AMBIENCE (17:30)",
        desc: "Long dramatic shadow projections and warm metallic reflection on timber and glass facades."
      };
    } else {
      // Midnight / Night: dark obsidian blue with ambient warm indoor LED lighting glow
      return {
        filter: 'brightness(0.4) contrast(1.4) hue-rotate(180deg) saturate(0.8)',
        overlay: 'rgba(10, 20, 40, 0.6)',
        shadowOpacity: 0.1,
        shadowTransform: 'skewX(0deg)',
        title: "NIGHT ILLUMINATION (22:00)",
        desc: "Bespoke warm interior lighting highlights spatial volumes and translucent glass walls against dark night sky."
      };
    }
  };

  const currentLighting = getLightingStyles();

  return (
    <section id="lighting-lab" style={{
      padding: '4rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
          // INTERACTIVE SPATIAL LAB
        </div>
        <h2 style={{ textTransform: 'uppercase', color: 'var(--text-primary)', marginTop: '0.2rem' }}>
          Sun Path & Facade Lighting Simulator
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginTop: '0.5rem' }}>
          Explore how natural daylight and solar orientation alter the shadow geometry, surface texture, and warmth of NEOKASA architectural facades in real time.
        </p>
      </div>

      {/* Interactive Simulator Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 0.7fr)',
        gap: '2rem',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        padding: '2rem',
        borderRadius: '2px'
      }} className="mobile-grid-1">
        
        {/* Left: Dynamic Render Display Frame */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{
            position: 'relative',
            height: '400px',
            borderRadius: '2px',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)'
          }}>
            {/* Base Image */}
            <img 
              src="/assets/hero_neokasa.png" 
              alt="Villa Horizon Sun Path Simulator"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                filter: currentLighting.filter
              }}
            />

            {/* Solar Color Tone Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: currentLighting.overlay,
              pointerEvents: 'none',
              transition: 'background 0.5s ease'
            }} />

            {/* Dynamic Shadow Cast Line Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '35%',
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
              opacity: currentLighting.shadowOpacity,
              transform: currentLighting.shadowTransform,
              pointerEvents: 'none',
              transition: 'all 0.5s ease'
            }} />

            {/* Realtime Time Display Pill */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(8px)',
              border: '1px solid var(--border-strong)',
              padding: '0.4rem 0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '700'
            }}>
              <Clock size={16} color="var(--accent-gold)" />
              <span>{formatTime(timeOfDay)} HRS</span>
            </div>

            {/* Sun Angle Indicator Badge */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'var(--color-charcoal)',
              color: 'var(--color-warm-white)',
              padding: '0.4rem 0.75rem',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase'
            }}>
              SOLAR AZIMUTH: {Math.round(sunAngle)}°
            </div>
          </div>
        </div>

        {/* Right: Controls & Solar Data Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              TIME CONTROL SLIDER
            </div>

            {/* Range Slider */}
            <div style={{ marginBottom: '2rem' }}>
              <input 
                type="range" 
                min="6" 
                max="22" 
                step="0.25"
                value={timeOfDay} 
                onChange={(e) => setTimeOfDay(parseFloat(e.target.value))}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                <span>06:00 Dawn</span>
                <span>12:00 Noon</span>
                <span>18:00 Dusk</span>
                <span>22:00 Night</span>
              </div>
            </div>

            {/* Time Presets */}
            <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              LIGHTING PRESETS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '2rem' }}>
              {presets.map((p, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => setTimeOfDay(p.time)}
                  style={{
                    background: timeOfDay === p.time ? 'var(--color-charcoal)' : 'var(--bg-secondary)',
                    color: timeOfDay === p.time ? 'var(--color-warm-white)' : 'var(--text-primary)',
                    border: '1px solid var(--border-subtle)',
                    padding: '0.6rem 0.75rem',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    borderRadius: '2px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>

            {/* Current Lighting Status Analysis Box */}
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '1.25rem', borderRadius: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                <Compass size={16} />
                <span>{currentLighting.title}</span>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {currentLighting.desc}
              </p>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '1.5rem' }}>
            * Real-time BIM solar radiation simulation model calibrated for Kamakura, Japan (Lat 35.3197° N).
          </div>
        </div>

      </div>
    </section>
  );
}
