import { useState, useEffect } from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import logoImage from '../Images/logo.png';
import { navLinksLeft, navLinksRight } from '../../Data/NavbarData'; 
import './navbar.css';

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

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
          <span>info@gmail.com</span>
        </span>
        <span className="nav-icon">
          <FaGlobe />
        </span>
      </div>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="left-side">
          <ul className="nav-links">
            {navLinksLeft.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="logo">
          <img className="logo" src={logoImage} alt="Logo" />
        </div>
        <div className="right-side">
          <ul className="nav-links">
            {navLinksRight.map((link) => (
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
