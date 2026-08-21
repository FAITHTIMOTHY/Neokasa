import React from 'react';
import { ArrowUp } from 'lucide-react';
import LogoIcon from './LogoIcon';

export default function Footer({ onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-strong)',
      padding: '4rem 1.5rem 2rem 1.5rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        {/* Top Footer Banner */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'var(--color-deep-brown)',
                color: 'var(--color-warm-white)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '3px'
              }}>
                <LogoIcon size={30} color="var(--color-warm-white)" />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', letterSpacing: '0.12em', color: 'var(--text-heading)' }}>
                NEO KASA
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', marginTop: '0.4rem', fontSize: '0.95rem', fontWeight: '500' }}>
              Modern Thinking, <span style={{ color: 'var(--accent-gold)', fontWeight: '700' }}>Timeless Architecture</span>. Progressive spatial architecture, mass timber innovation, and sustainable urban futures.
            </p>
            
            {/* Quick Contact Links */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.85rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
              <a href="mailto:Nsikakabasiessien101@gmail.com" style={{ color: 'var(--text-heading)', textDecoration: 'underline', fontWeight: '600' }}>
                Nsikakabasiessien101@gmail.com
              </a>
              <span style={{ color: 'var(--border-strong)' }}>|</span>
              <a href="https://wa.me/2349013717660" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)', textDecoration: 'underline', fontWeight: '600' }}>
                09013717660 (WhatsApp)
              </a>
              <span style={{ color: 'var(--border-strong)' }}>|</span>
              <a href="https://x.com/_nkhay_22" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)', textDecoration: 'underline', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                @_nkhay_22
              </a>
              <span style={{ color: 'var(--border-strong)' }}>|</span>
              <a href="https://www.linkedin.com/in/nsikakabasi-essien-34a293288" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)', textDecoration: 'underline', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 0 0-1.63 1.63 1.63 1.63 0 1 0 3.26 0c0-.9-.73-1.63-1.63-1.63z"/></svg>
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={onOpenContact} className="btn-primary">
              Commission Project
            </button>
            <button onClick={scrollToTop} className="btn-secondary" title="Return to Top">
              <ArrowUp size={16} />
              Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} NEO KASA SPATIAL ARCHITECTURE INC. ALL RIGHTS RESERVED.
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>UYO, AKWA IBOM, NIGERIA (HQ)</span>
            <span>•</span>
            <span style={{ color: 'var(--text-secondary)' }}>NATIONWIDE & INTERNATIONAL COMMISSIONS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
