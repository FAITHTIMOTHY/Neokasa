import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

export default function BeforeAfterSlider({ beforeAfter }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  if (!beforeAfter) return null;

  const handleMove = (clientX, currentTarget) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = clientX - rect.left;
    let pos = (x / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    handleMove(e.clientX, e.currentTarget);
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX, e.currentTarget);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
        <span>{beforeAfter.renderLabel || "3D BIM Render"} ({Math.round(100 - sliderPos)}%)</span>
        <span>CLICK OR DRAG SLIDER TO COMPARE</span>
        <span>{beforeAfter.builtLabel || "Completed Realization"} ({Math.round(sliderPos)}%)</span>
      </div>

      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{
          position: 'relative',
          width: '100%',
          height: '380px',
          overflow: 'hidden',
          userSelect: 'none',
          cursor: 'ew-resize',
          border: '1px solid var(--border-strong)',
          borderRadius: '2px',
          touchAction: 'none'
        }}
      >
        {/* Background Image (After / Built) */}
        <img
          src={beforeAfter.built}
          alt="Completed Realization"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            background: '#111'
          }}
        />

        {/* Foreground Image (Before / Render) with seamless clip-path */}
        <img
          src={beforeAfter.render}
          alt="3D BIM Render Concept"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
            background: '#111'
          }}
        />

        {/* Divider Handle */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${sliderPos}%`,
          transform: 'translateX(-50%)',
          width: '2px',
          background: 'var(--color-warm-white)',
          boxShadow: '0 0 10px rgba(0,0,0,0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: 'var(--color-charcoal)',
            color: 'var(--color-warm-white)',
            border: '2px solid var(--color-warm-white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.4)'
          }}>
            <Sliders size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
