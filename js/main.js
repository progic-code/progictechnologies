/* ============================================================
   PROGIC TECHNOLOGIES — Main JavaScript
   Handles: Floating Navbar, Mobile Menu, Scroll Effects,
            Counters, Tabs, Accordion, 3D Card Perspective Tilt
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── 1. NAVBAR — Scroll effect ────────────────────────────
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 40;

  function handleNavScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load

  // ── 2. MOBILE MENU ──────────────────────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');

  function openMenu() {
    mobileMenu?.classList.add('open');
    hamburger?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu?.classList.remove('open');
    hamburger?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', openMenu);
  mobileClose?.addEventListener('click', closeMenu);

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ── 3. ACTIVE NAV LINK ─────────────────────────────────
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ── 4. SCROLL REVEAL (Intersection Observer) ────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ── 5. ANIMATED COUNTERS ────────────────────────────────
  const counters = document.querySelectorAll('[data-count]');

  function animateCounter(el) {
    const target    = parseInt(el.getAttribute('data-count'));
    const suffix    = el.getAttribute('data-suffix') || '';
    const prefix    = el.getAttribute('data-prefix') || '';
    const duration  = 2000;
    const steps     = 60;
    const increment = target / steps;
    let current     = 0;
    let step        = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(Math.round(increment * step), target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
  }

  if (counters.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  // ── 6. TAB SWITCHER (Website Designing page) ───────────
  const tabBtns  = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(target)?.classList.add('active');
    });
  });

  // ── 7. ACCORDION (Digital Marketing page) ──────────────
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isOpen = header.classList.contains('open');
      const body   = header.nextElementSibling;

      accordionHeaders.forEach(h => {
        h.classList.remove('open');
        const b = h.nextElementSibling;
        if (b) b.classList.remove('open');
      });

      if (!isOpen) {
        header.classList.add('open');
        body?.classList.add('open');
      }
    });
  });

  if (accordionHeaders.length) {
    accordionHeaders[0].click();
  }

  // ── 8. SMOOTH SCROLL for anchor links ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId  = anchor.getAttribute('href');
      const targetEl  = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── 9. CONCEPT 6: 3D CARD PERSPECTIVE TILT ─────────────
  const tiltCards = document.querySelectorAll('.bento-card, .service-card, .tilt-card');

  tiltCards.forEach(card => {
    card.classList.add('tilt-card');

    card.addEventListener('mousemove', e => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Max 10 degrees tilt
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // ── 10. FORM SUBMIT (Contact page) ─────────────────────
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i> Message Sent!';
    btn.disabled = true;
    btn.style.background = 'linear-gradient(135deg, #059669, #047857)';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
      btn.style.background = '';
      contactForm.reset();
    }, 3500);
  });

  // ── 11. WAITLIST FORM (Robotics page) ──────────────────
  const waitlistForm = document.getElementById('waitlist-form');
  waitlistForm?.addEventListener('submit', e => {
    e.preventDefault();
    const btn  = waitlistForm.querySelector('button[type="submit"]');
    const input = waitlistForm.querySelector('input[type="email"]');

    btn.innerHTML = '<i class="fa-solid fa-circle-check me-2"></i> You\'re on the list!';
    btn.disabled = true;
    input.value = '';

    setTimeout(() => {
      btn.innerHTML = '<i class="fa-solid fa-bell me-2"></i> Notify Me';
      btn.disabled = false;
    }, 4000);
  });

  // ── 12. HERO ENTRY ANIMATIONS ──────────────────────────
  const heroElements = document.querySelectorAll('.hero-animate');
  heroElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s`;

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100 + i * 150);
  });

});
