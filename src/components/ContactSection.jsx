import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Phone, Loader2, AlertCircle } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://formsubmit.co/ajax/Nsikakabasiessien101@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.projectDetails,
          _subject: `New Spatial Project Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'There was an issue submitting your inquiry. Please try again or reach out directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network error occurred. Please try again or contact via WhatsApp / direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" style={{
      padding: '3rem 1.5rem 1rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      position: 'relative'
    }}>
      {/* Top Folio Bar */}
      <div className="arch-folio-bar">
        <div>NEO KASA</div>
        <div className="arch-folio-center">NEO KASA | Studio Inquiries 2025</div>
        <div className="arch-folio-page">10</div>
      </div>

      {/* Drafting L-Bracket Header */}
      <div className="arch-drafting-bracket">
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          fontWeight: '800',
          color: 'var(--text-heading)',
          textTransform: 'uppercase',
          margin: 0
        }}>
          Initiate a Project Consultation
        </h2>
        <div className="arch-drafting-baseline" />
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', fontSize: '1.02rem', lineHeight: 1.75 }}>
          Send your project details, site parameters, or spatial inquiries to begin a formal architectural collaboration with Nsikakabasi Essien & the NEO KASA studio.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
        gap: '2.5rem'
      }} className="mobile-grid-1">
        
        {/* Simple Contact Form */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-strong)',
          padding: '2.5rem',
          borderRadius: '2px'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={48} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-heading)' }}>Inquiry Received</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Thank you, {formData.name || 'Friend'}. Your project details have been sent directly to our studio inbox. A senior partner at NEO KASA will review your parameters and respond within 24 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', projectDetails: '' }); }} 
                className="btn-secondary"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {errorMessage && (
                <div style={{
                  padding: '0.85rem 1rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '2px',
                  color: '#ef4444',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Eleanor Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--text-primary)',
                    padding: '0.85rem 1rem',
                    fontSize: '0.95rem',
                    outline: 'none',
                    borderRadius: '2px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                  EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--text-primary)',
                    padding: '0.85rem 1rem',
                    fontSize: '0.95rem',
                    outline: 'none',
                    borderRadius: '2px'
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem', letterSpacing: '0.08em' }}>
                  PROJECT DETAILS & LOCATION *
                </label>
                <textarea
                  rows={5}
                  required
                  disabled={isSubmitting}
                  placeholder="Tell us about your project location, site topography, desired space, or timeline..."
                  value={formData.projectDetails}
                  onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-strong)',
                    color: 'var(--text-primary)',
                    padding: '0.85rem 1rem',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'none',
                    borderRadius: '2px'
                  }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Transmitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Project Details
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Studio Contact Info */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-strong)',
          padding: '2.5rem',
          borderRadius: '2px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--text-heading)' }}>
              Studio Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9rem' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  STUDIO HEADQUARTERS
                </div>
                <div style={{ color: 'var(--text-heading)', fontWeight: '700', fontSize: '1.05rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={16} color="var(--accent-gold)" />
                  Akwa Ibom, Nigeria
                </div>
              </div>

              <hr style={{ borderColor: 'var(--border-subtle)' }} />

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  DIRECT EMAIL INQUIRIES
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Mail size={16} color="var(--accent-gold)" />
                  <a 
                    href="mailto:Nsikakabasiessien101@gmail.com"
                    style={{ 
                      color: 'var(--text-heading)', 
                      fontWeight: '600', 
                      textDecoration: 'underline',
                      wordBreak: 'break-all'
                    }}
                  >
                    Nsikakabasiessien101@gmail.com
                  </a>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  WHATSAPP & PHONE
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Phone size={16} color="var(--accent-gold)" />
                  <a 
                    href="https://wa.me/2349013717660" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--text-heading)', 
                      fontWeight: '600', 
                      textDecoration: 'underline' 
                    }}
                  >
                    09013717660 (WhatsApp)
                  </a>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  X (TWITTER) SOCIAL PROFILE
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent-gold)"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  <a 
                    href="https://x.com/_nkhay_22" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--text-heading)', 
                      fontWeight: '600', 
                      textDecoration: 'underline' 
                    }}
                  >
                    @_nkhay_22 (x.com/_nkhay_22)
                  </a>
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  LINKEDIN PROFESSIONAL PROFILE
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="var(--accent-gold)"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 0 0-1.63 1.63 1.63 1.63 0 1 0 3.26 0c0-.9-.73-1.63-1.63-1.63z"/></svg>
                  <a 
                    href="https://www.linkedin.com/in/nsikakabasi-essien-34a293288" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      color: 'var(--text-heading)', 
                      fontWeight: '600', 
                      textDecoration: 'underline',
                      wordBreak: 'break-all'
                    }}
                  >
                    Nsikakabasi Essien (LinkedIn)
                  </a>
                </div>
              </div>

              <hr style={{ borderColor: 'var(--border-subtle)' }} />

              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  PROJECT REACH & COMMISSIONS
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div>
                    <div style={{ fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>NATIONWIDE & INTERNATIONAL WORKS</div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Open to spatial, residential, commercial, and institutional projects across Nigeria and worldwide.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginTop: '2rem' }}>
            Office Hours: Mon – Fri (08:30 – 17:30 WAT)
          </div>
        </div>

      </div>

      {/* Giant Cropped "CONTACT" Watermark */}
      <div className="arch-watermark-title" style={{ marginTop: '1rem' }}>
        CONTACT
      </div>
    </section>
  );
}
