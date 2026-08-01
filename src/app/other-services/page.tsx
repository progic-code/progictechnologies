'use client';

import { useState } from 'react';
import Link from 'next/link';
import ClientEffects from '@/components/ClientEffects';

const models = [
  { icon: 'fa-solid fa-user-check', number: '01', title: 'Contract staffing', text: 'Bring in skilled professionals for a defined project, period, or capability gap.', points: ['Flexible 3–12 month engagements', 'Support with onboarding and handover', 'Scale the team as the work changes'] },
  { icon: 'fa-solid fa-briefcase', number: '02', title: 'Permanent hiring', text: 'Find people who fit the role, the skill requirements, and the way your team works.', points: ['Role and requirement discovery', 'Candidate screening and shortlisting', 'Interview coordination and support'], featured: true },
  { icon: 'fa-solid fa-people-group', number: '03', title: 'Dedicated project teams', text: 'Build a focused cross-functional team around the outcome you need to deliver.', points: ['Team composition by project need', 'Technical or operational leadership', 'Flexible scale-up support'] },
];

const industries = [
  ['IT & software', 'fa-solid fa-laptop-code', 'Developers, designers, QA, product, and delivery roles.'],
  ['Marketing & content', 'fa-solid fa-bullhorn', 'Creative, performance, social, and content specialists.'],
  ['Manufacturing', 'fa-solid fa-industry', 'Operations, engineering, quality, and technical talent.'],
  ['Healthcare', 'fa-solid fa-hospital', 'Specialist, support, administration, and operations roles.'],
  ['Finance & banking', 'fa-solid fa-landmark', 'Analytical, compliance, customer, and technology roles.'],
  ['E-commerce & retail', 'fa-solid fa-cart-shopping', 'Growth, operations, customer experience, and support.'],
  ['Logistics', 'fa-solid fa-truck-fast', 'Planning, coordination, warehouse, and supply-chain roles.'],
  ['Education', 'fa-solid fa-graduation-cap', 'Academic, training, operations, and EdTech talent.'],
  ['Real estate', 'fa-solid fa-building', 'Sales, administration, customer, and project coordination.'],
  ['Automotive', 'fa-solid fa-car', 'Technical, operations, service, and mobility roles.'],
  ['Energy & utilities', 'fa-solid fa-bolt', 'Engineering, field, safety, and operations capability.'],
  ['Customer operations', 'fa-solid fa-headset', 'Customer support, BPO, service, and team leadership.'],
];

const steps = [
  ['01', 'Understand', 'We clarify the role, team context, skills, timeline, and what success looks like.'],
  ['02', 'Shortlist', 'We search, screen, and organise relevant people around your actual requirement.'],
  ['03', 'Connect', 'You meet the strongest matches and make the final decision with confidence.'],
  ['04', 'Support', 'We help with onboarding, coordination, and the next step after the hire.'],
];

export default function OtherServices() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <div className="talent-page">
      <ClientEffects />

      <section className="talent-hero"><div className="talent-hero-grid" /><div className="talent-hero-orb" /><div className="container talent-hero-inner"><div className="talent-hero-copy"><div className="section-label hero-animate"><span className="status-dot" /> Talent &amp; growth services</div><h1 className="hero-animate">The right people for the <span className="gradient-text">work that matters.</span></h1><p className="hero-animate">When your team needs more capability, we help you find the people who can make the next stage possible — flexibly, thoughtfully, and with a clear process.</p><div className="flex gap-3 flex-wrap hero-animate"><Link href="/contact" className="btn btn-primary">Tell us who you need <i className="fa-solid fa-arrow-right" /></Link><a href="#models" className="btn btn-outline">Explore the models <i className="fa-solid fa-arrow-down" /></a></div></div><div className="talent-hero-card hero-animate"><div className="talent-hero-card-head"><span>TEAM BUILD / 2026</span><i className="fa-solid fa-arrow-up-right-from-square" /></div><div className="talent-hero-card-title">Good work<br />needs good<br /><em>people.</em></div><div className="talent-hero-card-foot"><span><i className="fa-solid fa-circle-check" /> Role clarity</span><span><i className="fa-solid fa-circle-check" /> Human fit</span><span><i className="fa-solid fa-circle-check" /> Flexible scale</span></div></div></div></section>

      <section className="talent-proof-strip"><div className="container"><span><b>03</b> engagement models</span><span><b>12</b> industry directions</span><span><b>01</b> accountable partner</span><span><b>∞</b> room to scale</span></div></section>

      <section className="section talent-models" id="models"><div className="container"><div className="section-header"><div className="section-label reveal">Choose your model</div><h2 className="section-title reveal">Support that fits the <span className="gradient-text">moment you&apos;re in.</span></h2><p className="section-sub mx-auto reveal">Whether you need one specialist or a complete delivery team, start with the model that matches your current stage.</p></div><div className="talent-model-grid">{models.map((model, index) => <article className={`talent-model-card ${model.featured ? 'featured' : ''} reveal delay-${(index + 1) * 100}`} key={model.title}>{model.featured && <span className="talent-model-badge">Most chosen</span>}<div className="talent-model-top"><span>{model.number}</span><i className={model.icon} /></div><h3>{model.title}</h3><p>{model.text}</p><ul>{model.points.map((point) => <li key={point}><i className="fa-solid fa-check" />{point}</li>)}</ul><Link href="/contact" className="btn btn-outline">Discuss this model <i className="fa-solid fa-arrow-right" /></Link></article>)}</div></div></section>

      <section className="section talent-industries" id="industries"><div className="container"><div className="talent-section-heading"><div><div className="section-label reveal">Where we help</div><h2 className="section-title reveal">People for your <span className="gradient-text">kind of work.</span></h2></div><p className="section-sub reveal">Explore the areas we can support. Tell us what your team is building and we&apos;ll help shape the requirement.</p></div><div className="talent-industry-layout"><div className="talent-industry-list">{industries.map((industry, index) => <button className={`talent-industry-button ${activeIndustry[0] === industry[0] ? 'active' : ''} reveal delay-${(index % 4 + 1) * 100}`} onClick={() => setActiveIndustry(industry)} key={industry[0]}><i className={industry[1]} /><span>{industry[0]}</span><i className="fa-solid fa-arrow-up-right-from-square" /></button>)}</div><div className="talent-industry-detail glass-card"><span className="talent-detail-number">{String(industries.findIndex((item) => item[0] === activeIndustry[0]) + 1).padStart(2, '0')}</span><i className={`${activeIndustry[1]} talent-detail-icon`} /><h3>{activeIndustry[0]}</h3><p>{activeIndustry[2]}</p><Link href="/contact" className="btn btn-primary">Find talent here <i className="fa-solid fa-arrow-right" /></Link></div></div></div></section>

      <section className="section talent-process"><div className="container"><div className="section-header"><div className="section-label reveal">A human process</div><h2 className="section-title reveal">Clear from first brief to <span className="gradient-text">first day.</span></h2></div><div className="talent-process-grid">{steps.map(([number, title, text], index) => <div className="talent-process-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index < 3 && <i className="fa-solid fa-arrow-right" />}</div>)}</div></div></section>

      <section className="talent-cta"><div className="container"><div className="section-label">Your next hire</div><h2>Tell us who would make<br /><span className="gradient-text">your team stronger.</span></h2><p>Share the role, the context, or simply the problem you&apos;re trying to solve. We&apos;ll help you find the right starting point.</p><Link href="/contact" className="btn btn-accent">Start a talent conversation <i className="fa-solid fa-arrow-right" /></Link></div></section>
    </div>
  );
}
