import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Mail } from 'lucide-react';
import LogoIcon from './LogoIcon';

export default function Header({ 
  theme, 
  setTheme, 
  onOpenContact
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { label: "Portfolio", href: "#projects" },
    { label: "About Studio", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  return (
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
            width: '42px',
            height: '42px',
            background: 'var(--color-navy)',
            color: 'var(--color-warm-white)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px'
          }}>
            <LogoIcon size={34} color="var(--color-warm-white)" />
          </div>
          <div>
            <div style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: '1.3rem', 
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
                fontSize: '0.85rem',
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

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-heading)',
              cursor: 'pointer',
              padding: '0.4rem'
            }}
            className="mobile-show"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-strong)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          animation: 'fadeIn 0.3s ease forwards'
        }}>
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-heading)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.08em',
                padding: '0.4rem 0'
              }}
            >
              {link.label}
            </a>
          ))}
          <hr style={{ borderColor: 'var(--border-subtle)' }} />
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="btn-primary"
            style={{ width: '100%' }}
          >
            <Mail size={16} />
            Contact Studio
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-show {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
