'use client';

import { useState, FormEvent } from 'react';
import ClientEffects from '@/components/ClientEffects';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'website',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'website',
        message: '',
      });
    }, 3500);
  };

  return (
    <>
      <ClientEffects />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-grid"></div>
        <div className="hero-mesh"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="section-label hero-animate"><i className="fa-solid fa-paper-plane me-2"></i> Get In Touch</div>
          <h1 className="hero-animate" style={{ fontSize: 'clamp(2rem,5vw,3.75rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', maxWidth: '700px' }}>
            Let&apos;s Discuss Your <span className="gradient-text">Next Project</span>
          </h1>
          <p className="section-sub hero-animate" style={{ marginBottom: '2rem', maxWidth: '560px' }}>
            Ready to grow? Fill out the quote request form below or reach out directly to our team. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT MAIN SECTION */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form (Span 7) */}
            <div className="lg:col-span-7">
              <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div className="section-label" style={{ marginBottom: '0.75rem' }}><i className="fa-solid fa-pen-to-square me-1"></i> Request a Quote</div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: '#F8FAFC' }}>
                  Tell Us About Your Goals
                </h3>

                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Work Email *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-control"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Service Interested In *</label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="form-control"
                      >
                        <option value="website">Website Designing (HTML / React / Google Sites)</option>
                        <option value="marketing">Digital Marketing (Meta, SEO, Google Ads)</option>
                        <option value="robotics">Robotics &amp; Automation (Waitlist)</option>
                        <option value="manpower">Manpower Sourcing &amp; Procurement</option>
                        <option value="multiple">Multiple Services / Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Project Requirements / Details *</label>
                    <textarea
                      id="message"
                      required
                      placeholder="Briefly describe your project, goals, timeline, or any specific technologies you want to use..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control"
                      rows={5}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="btn btn-primary w-full justify-center"
                    style={{
                      padding: '1rem 2rem',
                      fontSize: '1rem',
                      background: submitted ? 'linear-gradient(135deg, #059669, #047857)' : undefined,
                    }}
                  >
                    {submitted ? (
                      <>
                        <i className="fa-solid fa-circle-check me-2"></i> Message Sent! We&apos;ll be in touch.
                      </>
                    ) : (
                      <>
                        Submit Quote Request <i className="fa-solid fa-paper-plane ms-2"></i>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Cards (Span 5) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--accent)' }}>
                  Direct Contact Info
                </h4>

                <div className="contact-info-item">
                  <div className="contact-icon"><i className="fa-solid fa-envelope text-primary-light"></i></div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Email Us</div>
                    <div style={{ fontWeight: 600, color: '#F8FAFC' }}>hello@progictechnologies.com</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"><i className="fa-solid fa-phone text-accent"></i></div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Call Us</div>
                    <div style={{ fontWeight: 600, color: '#F8FAFC' }}>+91 98765 43210</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"><i className="fa-solid fa-location-dot text-primary-light"></i></div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Headquarters</div>
                    <div style={{ fontWeight: 600, color: '#F8FAFC' }}>Chennai, Tamil Nadu, India</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon"><i className="fa-solid fa-clock text-accent"></i></div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#94A3B8', fontWeight: 500 }}>Working Hours</div>
                    <div style={{ fontWeight: 600, color: '#F8FAFC' }}>Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                  </div>
                </div>
              </div>

              {/* Fast Response Guarantee Card */}
              <div className="glass-card" style={{ padding: '1.75rem', borderColor: 'rgba(245,158,11,0.3)' }}>
                <div className="flex items-center gap-3 mb-2">
                  <i className="fa-solid fa-bolt text-accent text-xl"></i>
                  <h5 style={{ fontWeight: 700, color: '#F8FAFC' }}>Fast Response Guarantee</h5>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Our team reviews inquiries continuously. You will receive a tailored quote or call request confirmation within 24 hours.
                </p>
              </div>

              {/* Social Connect */}
              <div className="glass-card text-center" style={{ padding: '1.75rem' }}>
                <h5 style={{ fontWeight: 700, color: '#F8FAFC', marginBottom: '1rem' }}>Connect With Us</h5>
                <div className="social-links justify-center">
                  <a href="#" className="social-link" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                  <a href="#" className="social-link" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#" className="social-link" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#" className="social-link" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
