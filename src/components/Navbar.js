import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', href: 'home' },
    { title: 'About', href: 'about' },
    { title: 'Education', href: 'education' },
    { title: 'Skills', href: 'skills' },
    { title: 'Projects', href: 'projects' },
    { title: 'Contact', href: 'contact' }
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={500} className="navbar-brand">
          <span className="brand-badge">RS</span>
          <span className="brand-name">Roshan <span className="brand-accent">Subhash</span></span>
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              className="nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-cta-btn mobile-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hire Me
          </Link>
        </nav>

        <div className="navbar-actions">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-cta-btn desktop-cta"
          >
            Hire Me
          </Link>

          <button
            className={`mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
