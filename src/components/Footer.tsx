import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../public/assert/progic_login.jpeg';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-intro">
          <div>
            <span className="footer-kicker"><span /> Progic / Web design studio</span>
            <h2>Make your next<br /><em>move memorable.</em></h2>
          </div>
          <Link href="/contact" className="footer-start-link">Start a project <i className="fa-solid fa-arrow-up-right-from-square" /></Link>
        </div>
        <div className="footer-grid">
          <div className="footer-brand-block">
            <div className="footer-logo">
              <Image
                src={logoImg}
                alt="Progic Technologies"
                width={48}
                height={48}
                className="h-[48px] w-auto rounded-lg"
              />
            </div>
            <p className="footer-tagline">
              Strategy-led websites and digital experiences for businesses ready to be taken seriously.
            </p>
            <div className="footer-status"><span /> Taking on select projects for 2026</div>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <span className="footer-col-number">01</span><h4>Website Design</h4>
            <ul className="footer-links">
              <li><Link href="/website-designing#basic">Basic Websites</Link></li>
              <li><Link href="/website-designing#react">React-Based</Link></li>
              <li><Link href="/website-designing#google-sites">Google Sites</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-number">02</span><h4>Digital Marketing</h4>
            <ul className="footer-links">
              <li><Link href="/digital-marketing">Meta Ads</Link></li>
              <li><Link href="/digital-marketing">SEO</Link></li>
              <li><Link href="/digital-marketing">Google Ads</Link></li>
              <li><Link href="/digital-marketing">Social Media</Link></li>
              <li><Link href="/digital-marketing">YouTube</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <span className="footer-col-number">03</span><h4>Company</h4>
            <ul className="footer-links">
              <li><Link href="/other-services">Manpower Sourcing</Link></li>
              <li><Link href="/robotics-automation">Robotics (Soon)</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
            <div className="footer-contact-list">
              <a href="mailto:hello@progictechnologies.com"><i className="fa-solid fa-envelope" /> hello@progictechnologies.com</a>
              <a href="tel:+919876543210"><i className="fa-solid fa-phone" /> +91 98765 43210</a>
              <span><i className="fa-solid fa-location-dot" /> Chennai, Tamil Nadu, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2025 <span>Progic Technologies</span>. All rights reserved.</p>
          <p className="footer-copy">Designed with <i className="fa-solid fa-heart text-red-500 mx-1"></i> in India</p>
        </div>
      </div>
    </footer>
  );
}
