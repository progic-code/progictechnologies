'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoImg from '../../public/assert/progic_login.jpeg';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const navLinks: { href: string; label: string; badge?: string; featured?: boolean }[] = [
    { href: '/home', label: 'Home' },
    { href: '/', label: 'Web Design', featured: true },
    { href: '/digital-marketing', label: 'Digital Marketing' },
    { href: '/robotics-automation', label: 'Robotics' },
    { href: '/other-services', label: 'Other Services' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <Image
              src={logoImg}
              alt="Progic Technologies"
              width={40}
              height={40}
              className="rounded-lg h-[40px] w-auto"
              priority
            />
            <span className="nav-brand-name">PROGIC</span>
          </Link>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${isActive(link.href) ? 'active' : ''} ${link.featured ? 'nav-primary-link' : ''}`}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                  {link.badge && <span className="nav-badge">{link.badge}</span>}
                </Link>
              </li>
            ))}
            {/* <li>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event('open-theme-switcher'))}
                className="px-3 py-2 text-xs font-bold rounded-full border border-[var(--glass-border)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center gap-1.5 cursor-pointer"
                title="Change Color Palette"
              >
                <i className="fa-solid fa-palette text-accent"></i>
                <span>Palette</span>
              </button>
            </li> */}
            <li>
              <Link href="/contact" className="nav-cta">
                Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </li>
          </ul>

          <div
            className={`hamburger ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button
          className="mobile-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close Mobile Menu"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={isActive(link.href) ? 'text-accent font-bold' : ''}
          >
            {link.label}
            {link.badge && <span className="nav-badge ms-2">{link.badge}</span>}
          </Link>
        ))}

        <button
          type="button"
          onClick={() => {
            setMobileOpen(false);
            window.dispatchEvent(new Event('open-theme-switcher'));
          }}
          className="btn btn-outline mt-2 flex items-center justify-center gap-2"
        >
          <i className="fa-solid fa-palette text-accent"></i> Change Color Palette
        </button>

        <Link
          href="/contact"
          className="btn btn-primary mt-3"
          onClick={() => setMobileOpen(false)}
        >
          Get a Quote <i className="fa-solid fa-arrow-right ms-1"></i>
        </Link>
      </div>
    </>
  );
}
