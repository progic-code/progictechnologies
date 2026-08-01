'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientEffects from '@/components/ClientEffects';

export default function DigitalMarketing() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1); // default 1st open

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <ClientEffects />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="hero-grid"></div>
        <div className="hero-mesh"></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="section-label hero-animate"><i className="fa-solid fa-chart-line me-2"></i> Digital Growth</div>
          <h1 className="hero-animate" style={{ fontSize: 'clamp(2rem,5vw,3.75rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', maxWidth: '700px' }}>
            Grow Your Business <span className="gradient-text">Online</span> — Fast
          </h1>
          <p className="section-sub hero-animate" style={{ marginBottom: '2rem', maxWidth: '560px' }}>
            Full-funnel digital marketing strategies — from ad campaigns to organic growth — designed to deliver measurable ROI.
          </p>
          <div className="flex gap-4 flex-wrap hero-animate">
            <Link href="/contact" className="btn btn-primary">Get a Free Quote <i className="fa-solid fa-arrow-right ms-1"></i></Link>
            <a href="#services" className="btn btn-outline">View All Services <i className="fa-solid fa-arrow-down ms-1"></i></a>
          </div>
        </div>
      </section>

      {/* METRICS STRIP */}
      <section className="section-sm" style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="metric-card glass-card reveal">
              <span className="metric-value" data-count="320" data-suffix="%">0%</span>
              <div className="metric-label">Average Campaign ROI</div>
            </div>
            <div className="metric-card glass-card reveal delay-100">
              <span className="metric-value" data-count="10" data-suffix="K+">0K+</span>
              <div className="metric-label">Leads Generated</div>
            </div>
            <div className="metric-card glass-card reveal delay-200">
              <span className="metric-value" data-count="200" data-suffix="+">0+</span>
              <div className="metric-label">Campaigns Managed</div>
            </div>
            <div className="metric-card glass-card reveal delay-300">
              <span className="metric-value" data-count="95" data-suffix="%">0%</span>
              <div className="metric-label">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Our Services</div>
            <h2 className="section-title reveal">Full-Spectrum <span className="gradient-text">Digital Marketing</span></h2>
            <p className="section-sub mx-auto reveal" style={{ margin: '0 auto' }}>Click each service to explore what we do and how we deliver results.</p>
          </div>

          <div className="max-w-4xl mx-auto">

            {/* 2.1 Meta */}
            <div className="accordion-item reveal">
              <button
                className={`accordion-header ${openAccordion === 1 ? 'open' : ''}`}
                onClick={() => toggleAccordion(1)}
              >
                <div className="accordion-icon"><i className="fa-brands fa-facebook-f text-blue-500"></i></div>
                <div className="accordion-title">2.1 — Meta Market Space (Facebook & Instagram Ads)</div>
                <div className="accordion-arrow"><i className="fa-solid fa-chevron-down"></i></div>
              </button>
              <div className={`accordion-body ${openAccordion === 1 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p style={{ color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Reach your ideal customers on Facebook and Instagram with laser-targeted ad campaigns. From brand awareness to direct conversions — we manage the full ad lifecycle.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.75rem' }}>What We Offer:</h5>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Audience research & segmentation</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Retargeting & lookalike audiences</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Ad creative design (images + videos)</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>A/B split testing & optimization</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Pixel setup & conversion tracking</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Monthly performance reports</div></div>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                      <h5 style={{ fontWeight: 700, color: '#9F67F0', marginBottom: '0.75rem' }}>Platforms:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="platform-badge"><i className="fa-brands fa-facebook-f text-blue-500 me-1"></i> Facebook</span>
                        <span className="platform-badge"><i className="fa-brands fa-instagram text-pink-500 me-1"></i> Instagram</span>
                        <span className="platform-badge"><i className="fa-brands fa-facebook-messenger text-blue-400 me-1"></i> Messenger</span>
                        <span className="platform-badge"><i className="fa-solid fa-bullseye text-purple-400 me-1"></i> Meta Audience Network</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/contact" className="btn btn-primary btn-sm">Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.2 SEO */}
            <div className="accordion-item reveal delay-100">
              <button
                className={`accordion-header ${openAccordion === 2 ? 'open' : ''}`}
                onClick={() => toggleAccordion(2)}
              >
                <div className="accordion-icon"><i className="fa-solid fa-magnifying-glass text-amber-400"></i></div>
                <div className="accordion-title">2.2 — SEO (Search Engine Optimization)</div>
                <div className="accordion-arrow"><i className="fa-solid fa-chevron-down"></i></div>
              </button>
              <div className={`accordion-body ${openAccordion === 2 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p style={{ color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Get found on Google organically. Our data-driven SEO strategies improve your search rankings, drive qualified traffic, and build long-term digital authority.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.75rem' }}>What We Offer:</h5>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Keyword research & competitor analysis</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>On-page SEO (meta tags, content, structure)</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Technical SEO (speed, crawlability, schema)</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Off-page SEO & link building</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Local SEO & Google Business Profile</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Monthly ranking & traffic reports</div></div>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                      <h5 style={{ fontWeight: 700, color: '#9F67F0', marginBottom: '0.75rem' }}>Tools We Use:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="platform-badge"><i className="fa-brands fa-google me-1"></i> Google Search Console</span>
                        <span className="platform-badge"><i className="fa-solid fa-chart-column me-1"></i> SEMrush</span>
                        <span className="platform-badge"><i className="fa-solid fa-link me-1"></i> Ahrefs</span>
                        <span className="platform-badge"><i className="fa-solid fa-chart-line me-1"></i> GA4</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/contact" className="btn btn-primary btn-sm">Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.3 Google Ads */}
            <div className="accordion-item reveal delay-200">
              <button
                className={`accordion-header ${openAccordion === 3 ? 'open' : ''}`}
                onClick={() => toggleAccordion(3)}
              >
                <div className="accordion-icon"><i className="fa-solid fa-bullseye text-red-500"></i></div>
                <div className="accordion-title">2.3 — Google Ads (Search, Display & Shopping)</div>
                <div className="accordion-arrow"><i className="fa-solid fa-chevron-down"></i></div>
              </button>
              <div className={`accordion-body ${openAccordion === 3 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p style={{ color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Capture high-intent customers the moment they search for what you offer. We design, manage, and optimize Google Ad campaigns that maximize your ad spend efficiency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.75rem' }}>Campaign Types:</h5>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Search Ads — keyword-targeted text ads</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Display Ads — visual banner campaigns</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Shopping Ads — for e-commerce products</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Performance Max (PMax) campaigns</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Remarketing to past visitors</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Bid strategy management (ROAS/CPA)</div></div>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                      <h5 style={{ fontWeight: 700, color: '#9F67F0', marginBottom: '0.75rem' }}>Platforms:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="platform-badge"><i className="fa-brands fa-google me-1"></i> Google Search</span>
                        <span className="platform-badge"><i className="fa-solid fa-image me-1"></i> Display Network</span>
                        <span className="platform-badge"><i className="fa-solid fa-cart-shopping me-1"></i> Google Shopping</span>
                        <span className="platform-badge"><i className="fa-brands fa-youtube me-1"></i> YouTube Ads</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/contact" className="btn btn-primary btn-sm">Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.4 Social Media */}
            <div className="accordion-item reveal delay-300">
              <button
                className={`accordion-header ${openAccordion === 4 ? 'open' : ''}`}
                onClick={() => toggleAccordion(4)}
              >
                <div className="accordion-icon"><i className="fa-solid fa-mobile-screen-button text-purple-400"></i></div>
                <div className="accordion-title">2.4 — Social Media Marketing</div>
                <div className="accordion-arrow"><i className="fa-solid fa-chevron-down"></i></div>
              </button>
              <div className={`accordion-body ${openAccordion === 4 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p style={{ color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Build a strong social media presence through consistent, high-quality content and community engagement strategies that turn followers into loyal customers.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.75rem' }}>What We Offer:</h5>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Monthly content calendar & strategy</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Graphic design & copywriting</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Reels, Stories & short-form video</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Community management & engagement</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Hashtag research & growth strategy</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Analytics & monthly growth reports</div></div>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                      <h5 style={{ fontWeight: 700, color: '#9F67F0', marginBottom: '0.75rem' }}>Platforms:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="platform-badge"><i className="fa-brands fa-instagram text-pink-500 me-1"></i> Instagram</span>
                        <span className="platform-badge"><i className="fa-brands fa-facebook-f text-blue-500 me-1"></i> Facebook</span>
                        <span className="platform-badge"><i className="fa-brands fa-x-twitter me-1"></i> X / Twitter</span>
                        <span className="platform-badge"><i className="fa-brands fa-linkedin-in text-blue-400 me-1"></i> LinkedIn</span>
                        <span className="platform-badge"><i className="fa-brands fa-tiktok me-1"></i> TikTok</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/contact" className="btn btn-primary btn-sm">Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2.5 YouTube */}
            <div className="accordion-item reveal delay-400">
              <button
                className={`accordion-header ${openAccordion === 5 ? 'open' : ''}`}
                onClick={() => toggleAccordion(5)}
              >
                <div className="accordion-icon"><i className="fa-brands fa-youtube text-red-600"></i></div>
                <div className="accordion-title">2.5 — YouTube Marketing</div>
                <div className="accordion-arrow"><i className="fa-solid fa-chevron-down"></i></div>
              </button>
              <div className={`accordion-body ${openAccordion === 5 ? 'open' : ''}`}>
                <div className="accordion-content">
                  <p style={{ color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    YouTube is the second-largest search engine. We help you grow your channel, optimize your videos for discovery, and run targeted YouTube ad campaigns for brand awareness and conversions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 style={{ fontWeight: 700, color: 'var(--accent)', marginBottom: '0.75rem' }}>What We Offer:</h5>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Channel setup & branding</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Video SEO (titles, tags, descriptions)</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Thumbnail design for higher CTR</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>YouTube Shorts strategy</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>TrueView & skippable ad campaigns</div></div>
                      <div className="feature-item"><div className="feature-bullet"><i className="fa-solid fa-check text-xs"></i></div><div>Analytics — views, watch time, subs</div></div>
                    </div>
                    <div className="glass-card" style={{ padding: '1.25rem' }}>
                      <h5 style={{ fontWeight: 700, color: '#9F67F0', marginBottom: '0.75rem' }}>Ad Formats:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="platform-badge"><i className="fa-solid fa-play me-1"></i> TrueView In-Stream</span>
                        <span className="platform-badge"><i className="fa-solid fa-thumbtack me-1"></i> Bumper Ads</span>
                        <span className="platform-badge"><i className="fa-solid fa-bullseye me-1"></i> Discovery Ads</span>
                        <span className="platform-badge"><i className="fa-solid fa-mobile-button me-1"></i> YouTube Shorts</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link href="/contact" className="btn btn-primary btn-sm">Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i></Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-STEP FUNNEL */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-label reveal">Our Approach</div>
            <h2 className="section-title reveal">The <span className="gradient-text">Growth Formula</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="process-step reveal delay-100">
              <div className="step-number">1</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Audit</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>Deep-dive analysis of your current digital presence, competitors, and opportunities.</p>
            </div>
            <div className="process-step reveal delay-200">
              <div className="step-number">2</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Strategy</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>Data-backed growth blueprint tailored to your industry, budget, and goals.</p>
            </div>
            <div className="process-step reveal delay-300">
              <div className="step-number">3</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Execute</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>Launch campaigns, publish content, and activate all agreed channels simultaneously.</p>
            </div>
            <div className="process-step reveal delay-400">
              <div className="step-number">4</div>
              <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Optimize</h4>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8', lineHeight: 1.6 }}>Continuous A/B testing, performance analysis, and strategy refinement for peak ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner reveal">
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem,4vw,2.75rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
            Ready to <span style={{ color: 'var(--accent)' }}>Supercharge</span> Your Growth?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Let&apos;s craft a custom digital marketing strategy that delivers real, measurable results.
          </p>
          <Link href="/contact" className="btn btn-accent" style={{ fontSize: '1rem' }}>Get a Free Strategy Call <i className="fa-solid fa-arrow-right ms-1"></i></Link>
        </div>
      </section>
    </>
  );
}
