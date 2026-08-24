import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Mail, ArrowUpRight } from 'lucide-react';
import LogoIcon from './LogoIcon';

export default function Header({ 
  theme, 
  setTheme, 
  onOpenContact
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { label: "Portfolio", href: "#projects" },
    { label: "About Studio", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  const editorialMenu = [
    { num: "(1)", label: "HOME", href: "#", align: "left" },
    { num: "(2)", label: "WORKS", href: "#projects", align: "right" },
    { num: "(3)", label: "STUDIO", href: "#philosophy", align: "left" },
    { num: "(4)", label: "CONTACT", href: "#contact", align: "right" }
  ];

  const handleEditorialNav = (href) => {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const elem = document.querySelector(href);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="glass-header">
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0.85rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Brand Logo & Name */}
          <a href="#" style={{ textDecoration: 'none', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--color-navy)',
              color: 'var(--color-warm-white)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px'
            }}>
              <LogoIcon size={32} color="var(--color-warm-white)" />
            </div>
            <div>
              <div style={{ 
                fontFamily: 'var(--font-display)', 
                fontSize: '1.25rem', 
                fontWeight: '800',
                letterSpacing: '0.12em',
                lineHeight: 1,
                color: 'var(--text-heading)'
              }}>
                NEO KASA
              </div>
              <div style={{ 
                fontSize: '0.6rem', 
                letterSpacing: '0.15em', 
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                marginTop: '3px',
                fontWeight: '600'
              }}>
                Modern Thinking, <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>Timeless Architecture</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hide-on-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                style={{
                  color: 'var(--text-heading)',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: '600',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-gold)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-heading)'}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Controls & Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Dark/Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Light/Dark Theme"
              style={{
                background: 'var(--bg-secondary)',
                color: 'var(--text-heading)',
                border: '1px solid var(--border-subtle)',
                width: '38px',
                height: '38px',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>

            {/* Contact Studio Button */}
            <button 
              onClick={onOpenContact}
              className="btn-primary hide-on-mobile"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.75rem' }}
            >
              <Mail size={14} />
              Contact Studio
            </button>

            {/* Editorial Menu Trigger Button */}
            <button
              onClick={() => setMenuOpen(true)}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-heading)',
                cursor: 'pointer',
                padding: '0.45rem 0.65rem',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: '700',
                letterSpacing: '0.08em',
                transition: 'all 0.2s ease'
              }}
              title="Open Editorial Navigation"
              aria-label="Open Menu"
            >
              <Menu size={18} />
              <span className="hide-on-mobile">MENU</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Minimalist Editorial Overlay Menu (Reference Image 5) */}
      {menuOpen && (
        <div className="arch-fullscreen-nav">
          <button 
            className="arch-fullscreen-nav-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation overlay"
          >
            <X size={36} strokeWidth={1.2} />
          </button>

          <div className="arch-nav-stagger-list">
            {editorialMenu.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleEditorialNav(item.href);
                }}
                className={`arch-nav-stagger-item ${item.align === 'right' ? 'align-right' : 'align-left'}`}
              >
                {item.align === 'left' && (
                  <span className="arch-nav-stagger-index">{item.num}</span>
                )}
                <span className="arch-nav-stagger-title">{item.label}</span>
                {item.align === 'right' && (
                  <span className="arch-nav-stagger-index">{item.num}</span>
                )}
              </a>
            ))}
          </div>

          {/* Bottom Monograph Metadata */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.15em'
          }}>
            <div>NEO KASA | MONOGRAPH 2025</div>
            <div>UYO • NIGERIA</div>
          </div>
        </div>
      )}
    </>
  );
}

