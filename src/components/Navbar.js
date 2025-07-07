import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Education', href: '#education' },
    { title: 'Skills', href: '#skills' },
    { title: 'Projects', href: '#projects' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>      <div className="nav-items" style={{ width: '100%', justifyContent: 'center' }}>
        {menuItems.map((item, index) => (          <Link
            key={index}
            to={item.href.replace('#', '')}
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className={`nav-item ${activeItem === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveItem(index)}
            onMouseLeave={() => setActiveItem(null)}
            activeClass="active"
          >
            {item.title}
            <span className="nav-item-background"></span>
          </Link>
        ))}
      </div>
      <div className="nav-indicator"></div>
    </nav>
  );
};

export default Navbar;
