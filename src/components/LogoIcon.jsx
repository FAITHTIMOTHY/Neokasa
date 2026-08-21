import React from 'react';

export default function LogoIcon({ size = 36, color, style = {} }) {
  return (
    <img 
      src="/assets/neo_kasa_mark.png" 
      alt="NEO KASA Monogram Logo"
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
        objectFit: 'contain',
        display: 'block',
        // Optional filter to adapt to theme if color is dark
        filter: color === 'var(--color-deep-brown)' || color === 'var(--text-heading)' || color === 'var(--color-charcoal)' 
          ? 'brightness(0.2)' 
          : 'brightness(1)',
        ...style
      }}
    />
  );
}
