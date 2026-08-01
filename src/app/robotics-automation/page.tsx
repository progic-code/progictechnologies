'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import ClientEffects from '@/components/ClientEffects';

const pillars = [
  { number: '01', icon: 'fa-solid fa-graduation-cap', title: 'Robotics Skills Academy', description: 'Turn curiosity into buildable systems with hands-on robotics and coding experiences for ages 7–18+.', tags: ['Arduino', 'Python', 'Raspberry Pi'] },
  { number: '02', icon: 'fa-solid fa-robot', title: 'Robotics R&D', description: 'Design autonomous machines and intelligent field systems that solve real-world operating challenges.', tags: ['Autonomous', 'Sensors', 'Computer Vision'] },
  { number: '03', icon: 'fa-solid fa-industry', title: 'Industrial Automation', description: 'Optimise workflows, improve safety, and connect smart systems across the factory floor.', tags: ['PLC', 'SCADA', 'Smart Factory'] },
  { number: '04', icon: 'fa-solid fa-mobile-screen-button', title: 'Control Software', description: 'Build the web and mobile experiences that monitor, control, and make sense of your machines.', tags: ['Web Apps', 'Mobile', 'APIs'] },
];

const process = [
  ['01', 'Discovery', 'Goals, constraints, operating environment, and opportunities.'],
  ['02', 'Planning', 'Architecture, timeline, resources, and the right technical path.'],
  ['03', 'Design', 'Hardware schematics, system wireframes, and experience design.'],
  ['04', 'Development', 'Agile builds across hardware, software, sensors, and integrations.'],
  ['05', 'Deployment', 'Testing, QA, launch, and performance monitoring in the real world.'],
  ['06', 'Support', 'Ongoing optimisation, maintenance, and scale-up partnership.'],
];

export default function RoboticsAutomation() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setEmail(''); }, 4000);
  };

  return (
    <div className="robotics-page">
      <ClientEffects />

      <section className="robotics-hero">
        <div className="robotics-circuit" /><div className="robotics-orb robotics-orb-one" /><div className="robotics-orb robotics-orb-two" />
        <i className="fa-solid fa-gear robotics-gear robotics-gear-one" /><i className="fa-solid fa-gears robotics-gear robotics-gear-two" />
        <div className="container robotics-hero-inner">
          <div className="robotics-hero-copy">
            <div className="section-label hero-animate"><span className="status-dot" /> Robotics division / in development</div>
            <h1 className="hero-animate">Engineering the <span className="gradient-text">physical future.</span></h1>
            <p className="hero-animate">From robotics education to autonomous systems and smart factory builds, we are creating technology that connects curiosity, intelligence, and real-world action.</p>
            <div className="flex gap-3 flex-wrap hero-animate"><a href="#pillars" className="btn btn-primary">Explore the division <i className="fa-solid fa-arrow-down" /></a><Link href="/contact" className="btn btn-outline">Discuss an idea <i className="fa-solid fa-arrow-right" /></Link></div>
          </div>
          <div className="robotics-hero-visual hero-animate"><div className="robotics-dashboard"><div className="robotics-dashboard-head"><span><i className="fa-solid fa-circle" /> LIVE SYSTEMS</span><b>PROGIC / R&D</b></div><div className="robotics-dashboard-core"><div className="robotics-ring robotics-ring-one" /><div className="robotics-ring robotics-ring-two" /><i className="fa-solid fa-robot" /></div><div className="robotics-dashboard-status"><span><i className="fa-solid fa-circle-check" /> Sensor array online</span><span><i className="fa-solid fa-wave-square" /> Telemetry stable</span><span><i className="fa-solid fa-bolt" /> Ready to build</span></div></div><div className="robotics-float-card robotics-float-card-top"><i className="fa-solid fa-microchip" /><span><b>Intelligent systems</b><small>Hardware + software + data</small></span></div><div className="robotics-float-card robotics-float-card-bottom"><span className="robotics-mini-bars"><i /><i /><i /><i /></span><span><b>Build mode</b><small>Physical future loading…</small></span></div></div>
        </div>
      </section>

      <section className="robotics-intro"><div className="container robotics-intro-grid"><div><div className="section-label reveal">One connected ecosystem</div><h2 className="section-title reveal">Hardware, software, and <span className="gradient-text">human potential.</span></h2></div><p className="section-sub reveal">The most useful technology does more than look advanced. It makes people safer, helps teams move faster, and gives the next generation the confidence to build.</p></div></section>

      <section className="section robotics-pillars" id="pillars"><div className="container"><div className="section-header"><div className="section-label reveal">What we are building</div><h2 className="section-title reveal">Four ways into the <span className="gradient-text">future.</span></h2><p className="section-sub mx-auto reveal">A robotics division designed to educate, invent, automate, and connect the physical world to the digital one.</p></div><div className="robotics-pillar-grid">{pillars.map((pillar, index) => <article className={`robotics-pillar-card reveal delay-${(index + 1) * 100}`} key={pillar.number}><div className="robotics-pillar-top"><span>{pillar.number}</span><i className={pillar.icon} /></div><h3>{pillar.title}</h3><p>{pillar.description}</p><div className="robotics-tags">{pillar.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></div></section>

      <section className="section robotics-use-cases"><div className="container robotics-use-grid"><div className="robotics-use-visual reveal"><div className="robotics-use-screen"><span className="robotics-use-kicker">FIELD SYSTEM / 001</span><strong>Observe.<br /><em>Adapt.</em><br />Act.</strong><div className="robotics-use-route"><i /><span /><i /><span /><i /></div></div></div><div><div className="section-label reveal">Built for real conditions</div><h2 className="section-title reveal">Technology that leaves the <span className="gradient-text">lab.</span></h2><p className="section-sub reveal">We think beyond demos: autonomous navigation, sensor-rich platforms, industrial workflow automation, and the software that keeps every moving part visible.</p><div className="robotics-use-list reveal"><span><i className="fa-solid fa-check" /> Safer repetitive operations</span><span><i className="fa-solid fa-check" /> Smarter workflows and telemetry</span><span><i className="fa-solid fa-check" /> Systems designed to scale</span></div><Link href="/contact" className="btn btn-primary mt-8 reveal">Talk to the team <i className="fa-solid fa-arrow-right" /></Link></div></div></section>

      <section className="section robotics-process"><div className="container"><div className="section-header"><div className="section-label reveal">From idea to reality</div><h2 className="section-title reveal">A six-step path to <span className="gradient-text">working technology.</span></h2></div><div className="robotics-process-grid">{process.map(([number, title, text], index) => <div className="robotics-process-card reveal" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p>{index < process.length - 1 && <i className="fa-solid fa-arrow-right" />}</div>)}</div></div></section>

      <section className="robotics-waitlist"><div className="robotics-waitlist-glow" /><div className="container robotics-waitlist-inner"><div><div className="section-label">Be early</div><h2>Want to build something <span className="gradient-text">that moves?</span></h2><p>Tell us where you see an opportunity. Join the early-access list for robotics pilots, education programmes, and automation conversations.</p></div><form onSubmit={handleSubmit} className="robotics-waitlist-form"><label htmlFor="robotics-email">Business email</label><div><input id="robotics-email" type="email" required placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} /> <button type="submit" className="btn btn-accent" disabled={submitted}>{submitted ? <><i className="fa-solid fa-circle-check" /> You&apos;re on the list</> : <><i className="fa-solid fa-bell" /> Notify me</>}</button></div></form></div></section>
    </div>
  );
}
