import Link from 'next/link';
import ClientEffects from '@/components/ClientEffects';

const offerings = [
  { number: '01', icon: 'fa-solid fa-wand-magic-sparkles', title: 'Launch websites', text: 'Sharp, strategic websites for businesses ready to look as good as they are.', tag: 'For bold beginnings', className: 'offer-primary' },
  { number: '02', icon: 'fa-solid fa-code', title: 'Digital products', text: 'React and Next.js experiences for ideas that need more interaction, data, and room to scale.', tag: 'For big ideas', className: 'offer-secondary' },
  { number: '03', icon: 'fa-solid fa-bolt', title: 'Fast-track sites', text: 'Clean Google Sites and landing pages when you need to move quickly without looking rushed.', tag: 'For right now', className: 'offer-tertiary' },
];

const steps = [
  ['01', 'Talk it out', 'Your goals, your audience, your vibe.'],
  ['02', 'Make it visual', 'We turn the messy ideas into a clear direction.'],
  ['03', 'Make it real', 'We build, refine, launch, and stay in your corner.'],
];

export default function Home() {
  return (
    <div className="glass-home">
      <ClientEffects />

      <section className="glass-hero">
        <div className="glass-orb glass-orb-one" /><div className="glass-orb glass-orb-two" /><div className="glass-noise" />
        <div className="container glass-hero-inner">
          <div className="glass-hero-copy">
            <div className="glass-eyebrow hero-animate"><span className="glass-live-dot" /> Progic / web design studio</div>
            <h1 className="hero-animate">Websites with <span className="glass-gradient-text">main-character</span> energy.</h1>
            <p className="hero-animate">Not another template. Not another forgettable homepage. We make digital spaces that feel like your brand on its best day.</p>
            <div className="flex gap-3 flex-wrap hero-animate"><Link href="/contact" className="glass-button glass-button-primary">Let&apos;s make yours <i className="fa-solid fa-arrow-up-right-from-square" /></Link><Link href="#offerings" className="glass-button glass-button-ghost">See the possibilities <i className="fa-solid fa-arrow-down" /></Link></div>
            <div className="glass-hero-meta hero-animate"><span><i className="fa-solid fa-circle-check" /> Strategy first</span><span><i className="fa-solid fa-circle-check" /> Design obsessed</span><span><i className="fa-solid fa-circle-check" /> Built to grow</span></div>
          </div>

          <div className="glass-hero-art hero-animate">
            <div className="glass-floating-chip glass-chip-top"><i className="fa-solid fa-sparkles" /> Your brand, but louder.</div>
            <div className="glass-browser-window">
              <div className="glass-browser-head"><div><i /><i /><i /></div><span>your-next-site.com</span><b>•••</b></div>
              <div className="glass-browser-body"><small>NEW DIGITAL PRESENCE</small><strong>Make them<br /><em>stop scrolling.</em></strong><div className="glass-browser-pill">Explore your story <i className="fa-solid fa-arrow-right" /></div><div className="glass-browser-sphere" /></div>
            </div>
            <div className="glass-floating-chip glass-chip-bottom"><span className="glass-mini-avatar">P</span><span><b>Progic Studio</b><small>Designing your next move</small></span><i className="fa-solid fa-arrow-up-right-from-square" /></div>
          </div>
        </div>
        <div className="glass-scroll-cue"><span /> scroll to explore</div>
      </section>

      <div className="glass-marquee"><div className="container glass-marquee-inner"><span>Web design</span><i className="fa-solid fa-asterisk" /><span>Brand direction</span><i className="fa-solid fa-asterisk" /><span>Digital experiences</span><i className="fa-solid fa-asterisk" /><span>Good energy only</span></div></div>

      <section className="section glass-section" id="offerings">
        <div className="container">
          <div className="glass-section-heading"><div><div className="glass-eyebrow reveal">What we do</div><h2 className="reveal">Pick your <span className="glass-gradient-text">power-up.</span></h2></div><p className="reveal">From “I need a website” to “I need a whole digital world” — there&apos;s a way in.</p></div>
          <div className="glass-offerings-grid">
            {offerings.map((offering, index) => <article className={`glass-offering-card ${offering.className} reveal delay-${(index + 1) * 100}`} key={offering.number}><div className="glass-offering-top"><span>{offering.number}</span><i className={offering.icon} /></div><div><small>{offering.tag}</small><h3>{offering.title}</h3><p>{offering.text}</p></div><Link href="/contact" aria-label={`Discuss ${offering.title}`}><i className="fa-solid fa-arrow-up-right-from-square" /></Link></article>)}
          </div>
        </div>
      </section>

      <section className="section glass-case-section" id="case-study">
        <div className="container glass-case-grid">
          <div className="glass-case-visual reveal"><div className="glass-case-window"><div className="glass-case-window-head"><span>deepseedtechnologies.com</span><i className="fa-solid fa-arrow-up-right-from-square" /></div><div className="glass-case-window-body"><small>FIVE TECHNOLOGY DIVISIONS</small><strong>Seeding the<br /><em>future.</em></strong><div className="glass-case-lines"><span /><span /><span /></div></div></div><span className="glass-case-sticker">FIRST<br />PROJECT<br /><b>↗ LIVE</b></span></div>
          <div className="glass-case-copy"><div className="glass-eyebrow reveal">One real case study</div><h2 className="reveal">A big, complex story — made <span className="glass-gradient-text">easy to get.</span></h2><p className="reveal">For Deepseed Technologies, we created a digital home for robotics, automation, software, digital marketing, and their training academy — all under one clear experience.</p><div className="glass-case-tags reveal"><span>Strategy</span><span>Visual design</span><span>Development</span><span>Launch</span></div><a href="https://www.deepseedtechnologies.com/" target="_blank" rel="noreferrer" className="glass-button glass-button-ghost reveal">See the live website <i className="fa-solid fa-arrow-up-right-from-square" /></a></div>
        </div>
      </section>

      <section className="section glass-process-section">
        <div className="container"><div className="glass-section-heading"><div><div className="glass-eyebrow reveal">How it works</div><h2 className="reveal">Low stress. <span className="glass-gradient-text">High impact.</span></h2></div><p className="reveal">You bring the ambition. We bring the plan, taste, and pixels.</p></div><div className="glass-steps">{steps.map(([number, title, text], index) => <div className="glass-step reveal" key={number}><div className="glass-step-number">{number}</div><h3>{title}</h3><p>{text}</p>{index < steps.length - 1 && <i className="fa-solid fa-arrow-right glass-step-arrow" />}</div>)}</div></div>
      </section>

      <section className="glass-final-cta"><div className="glass-orb glass-orb-cta" /><div className="container"><div className="glass-eyebrow">Your sign to start</div><h2>Make your website<br /><span className="glass-gradient-text">the one they remember.</span></h2><p>Bring the rough idea. We&apos;ll help you turn it into something people want to click.</p><Link href="/contact" className="glass-button glass-button-primary">Start a conversation <i className="fa-solid fa-arrow-right" /></Link></div></section>
    </div>
  );
}
