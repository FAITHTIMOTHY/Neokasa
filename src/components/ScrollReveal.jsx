import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Smoothly reveals elements on scroll with full opacity so content is never faint.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  style = {}, 
  delay = 0, 
  variant = 'fade-up', // 'fade-up' | 'scale' | 'fade-in'
  threshold = 0.05
}) {
  const [hasEntered, setHasEntered] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      {
        threshold,
        rootMargin: '60px 0px 60px 0px'
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold]);

  let variantClass = 'reveal-fade-up';
  if (variant === 'scale') variantClass = 'reveal-scale';
  if (variant === 'fade-in') variantClass = 'reveal-fade-in';

  return (
    <div
      ref={domRef}
      className={`scroll-reveal-container ${variantClass} ${hasEntered ? 'is-visible' : 'is-entering'} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

