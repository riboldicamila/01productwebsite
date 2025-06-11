import { useState, useEffect } from 'react';
import { FaEnvelope, FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logoImage from '../../assets/Images/logo-main.png';
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT } from '../../Data/NavbarData';

import './Navbar.css';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Combine all navigation links for mobile menu
  const allNavLinks = [...NAV_LINKS_LEFT, ...NAV_LINKS_RIGHT];

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="top-bar">
        <span className="email">
          <span className="nav-icon">
            <FaEnvelope />
          </span>
          <span>cami.riboldi@gmail.com</span>
        </span>
        <span className="nav-icon">
          <FaGlobe />
        </span>
      </div>
      
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <button 
          className="hamburger-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <div className={`left-side ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-links">
            {NAV_LINKS_LEFT.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="Logo" />
          </Link>
        </div>

        <div className={`right-side ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-links">
            {NAV_LINKS_RIGHT.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="thin-line"></div>
    </div>
  );
}

export default Navbar;