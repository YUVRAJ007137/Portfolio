import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      // Navbar remains permanently sticky (no auto-hide)
      setHidden(false);
      lastScroll.current = current;

      // Active section detection (only on home page)
      if (window.location.pathname === '/') {
        const sections = ['work', 'education', 'projects', 'about', 'contact'];
        for (const id of sections.reverse()) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top < 300) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      // Close menu with Escape key
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const links = [
    { href: '/#work', label: 'Work', match: 'work' },
    { href: '/#education', label: 'Education', match: 'education' },
    { href: '/#projects', label: 'Projects', match: 'projects' },
    { href: '/#about', label: 'About', match: 'about' },
    { href: '/#contact', label: 'Contact', match: 'contact' },
    { href: '/blog', label: 'Blog', match: 'blog' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''} ${hidden ? 'nav--hidden' : ''}`}>
        <Link to="/" className="nav__logo">
          <span className="nav__logo-dot" />
          YC
        </Link>
        <div className="nav__links">
          {links.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav__link ${
                (location.pathname === '/' && activeSection === l.match) || (location.pathname === '/blog' && l.match === 'blog') 
                  ? 'nav__link--active' 
                  : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="mailto:yuvrajsc42@gmail.com" className="nav__cta">
            Let's talk
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 17 9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
        <button className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-overlay ${menuOpen ? 'mobile-overlay--open' : ''}`}>
        <div className="mobile-overlay__inner">
          {links.map((l, i) => (
            <Link
              key={l.href}
              to={l.href}
              className="mobile-overlay__link"
              style={{ transitionDelay: menuOpen ? `${i * 0.08 + 0.15}s` : '0s' }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-overlay__num">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
          <a href="mailto:yuvrajsc42@gmail.com" className="mobile-overlay__email" onClick={() => setMenuOpen(false)}>
            yuvrajsc42@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
