import React, { useState } from 'react';
import { X, Send, MapPin, Phone, Mail, Globe, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    projectType: 'Residential',
    message: ''
  });

  if (!isOpen) return null;

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
          phone: formData.phone || 'Not provided',
          projectType: formData.projectType,
          message: formData.message,
          _subject: `New Commission Inquiry (${formData.projectType}) from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.message || 'There was an issue submitting your inquiry. Please try again or contact directly.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMessage('Network error occurred. Please try again or contact via WhatsApp / direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content animate-fade-in"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px' }}
      >
        {/* Header */}
        <div style={{
          padding: '1.5rem 2rem',
          borderBottom: '1px solid var(--border-strong)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-secondary)'
        }}>
          <div>
            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              // STUDIO INQUIRY
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginTop: '0.2rem' }}>
              Commission NEOKASA
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '2rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2 size={48} color="var(--accent-gold)" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Inquiry Received</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
                Thank you, {formData.name || 'Friend'}. Your project specifications have been delivered to our studio inbox. A senior partner at NEOKASA will review your parameters and contact you within 24 hours.
              </p>
              <button 
                onClick={() => { setSubmitted(false); onClose(); }} 
                className="btn-primary"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
              gap: '2.5rem'
            }} className="mobile-grid-1">
              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {errorMessage && (
                  <div style={{
                    padding: '0.75rem 1rem',
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
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                    FULL NAME *
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
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-primary)',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.9rem',
                      outline: 'none',
                      borderRadius: '2px'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="mobile-grid-1">
                  <div>
                    <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
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
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-strong)',
                        color: 'var(--text-primary)',
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.9rem',
                        outline: 'none',
                        borderRadius: '2px'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      disabled={isSubmitting}
                      placeholder="+234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-strong)',
                        color: 'var(--text-primary)',
                        padding: '0.65rem 0.85rem',
                        fontSize: '0.9rem',
                        outline: 'none',
                        borderRadius: '2px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                    PROJECT TYPOLOGY
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-primary)',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.9rem',
                      outline: 'none',
                      borderRadius: '2px'
                    }}
                  >
                    <option value="Residential">Private Residential Residence / Villa</option>
                    <option value="Sustainable Timber">Sustainable Mass Timber Pavilion</option>
                    <option value="Commercial">Commercial Headquarters Tower</option>
                    <option value="Spatial Interior">Spatial Interior Loft / Atelier</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', display: 'block', marginBottom: '0.3rem' }}>
                    PROJECT DETAILS & LOCATION
                  </label>
                  <textarea
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="Describe your site topography, desired footprint, timeline, or specific architectural aspirations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-strong)',
                      color: 'var(--text-primary)',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.9rem',
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
                  style={{ marginTop: '0.5rem', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Transmitting Inquiry...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Formal Inquiry
                    </>
                  )}
                </button>
              </form>

              {/* Direct Contact & Global Offices Info */}
              <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', padding: '1.5rem', borderRadius: '2px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--accent-gold)' }}>
                    // DIRECT CONTACT
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Mail size={14} color="var(--accent-gold)" />
                      <a href="mailto:Nsikakabasiessien101@gmail.com" style={{ color: 'var(--text-heading)', fontWeight: '600', textDecoration: 'underline', wordBreak: 'break-all' }}>
                        Nsikakabasiessien101@gmail.com
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Phone size={14} color="var(--accent-gold)" />
                      <a href="https://wa.me/2349013717660" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)', fontWeight: '600', textDecoration: 'underline' }}>
                        09013717660 (WhatsApp)
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--accent-gold)"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      <a href="https://x.com/_nkhay_22" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)', fontWeight: '600', textDecoration: 'underline' }}>
                        @_nkhay_22 (X / Twitter)
                      </a>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="var(--accent-gold)"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 0 0-1.63 1.63 1.63 1.63 0 1 0 3.26 0c0-.9-.73-1.63-1.63-1.63z"/></svg>
                      <a href="https://www.linkedin.com/in/nsikakabasi-essien-34a293288" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-heading)', fontWeight: '600', textDecoration: 'underline' }}>
                        Nsikakabasi Essien (LinkedIn)
                      </a>
                    </div>
                  </div>
                </div>

                <hr style={{ borderColor: 'var(--border-subtle)' }} />

                <div>
                  <h4 style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    STUDIO LOCATION & ATELIERS
                  </h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem' }}>
                    <div>
                      <div style={{ fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--text-heading)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <MapPin size={14} color="var(--accent-gold)" /> UYO STUDIO (HEADQUARTERS)
                      </div>
                      <div style={{ color: 'var(--text-secondary)' }}>Uyo, Akwa Ibom State, Nigeria</div>
                    </div>

                    <div>
                      <div style={{ fontWeight: '700', fontFamily: 'var(--font-display)', color: 'var(--text-heading)' }}>PROJECT COMMISSIONS</div>
                      <div style={{ color: 'var(--text-secondary)' }}>Available for Nationwide & International Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
