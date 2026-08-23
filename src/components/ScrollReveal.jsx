import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Fades children into view when scrolled in, and fades out when scrolled out of view.
 */
export default function ScrollReveal({ 
  children, 
  className = '', 
  style = {}, 
  delay = 0, 
  variant = 'fade-up', // 'fade-up' | 'scale' | 'fade-in'
  threshold = 0.1,
  rootMargin = '-20px 0px -20px 0px'
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility so it fades IN when entering and OUT when leaving
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentElem = domRef.current;
    if (currentElem) {
      observer.observe(currentElem);
    }

    return () => {
      if (currentElem) observer.unobserve(currentElem);
    };
  }, [threshold, rootMargin]);

  let variantClass = 'reveal-fade-up';
  if (variant === 'scale') variantClass = 'reveal-scale';
  if (variant === 'fade-in') variantClass = 'reveal-fade-in';

  return (
    <div
      ref={domRef}
      className={`scroll-reveal-container ${variantClass} ${isVisible ? 'is-visible' : 'is-hidden'} ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
}
