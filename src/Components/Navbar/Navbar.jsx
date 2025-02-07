import { useState, useEffect } from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logoImage from '../Images/logo.png';
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
          info@gmail.com
        </span>
        <span className="nav-icon">
          <FaGlobe />
        </span>
      </div>
      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="left-side">
          <ul className="nav-links">
            <li><Link to="/">Liliana</Link></li> {/* Add Link component */}
            <li><Link to="/creations">Creations</Link></li> {/* Add Link component */}
            <li><Link to="/about-us">History</Link></li> {/* Add Link component */}
          </ul>
        </div>
        <div className="logo">
          <img className="logo" src={logoImage} alt="Logo" />
        </div>
        <div className="right-side">
          <ul className="nav-links">
            <li><Link to="/blog">Blog</Link></li> {/* Add Link component */}
            <li><Link to="/search">Search</Link></li> {/* Add Link component */}
            <li><Link to="/contact">Contact</Link></li> {/* Add Link component */}
          </ul>
        </div>
      </nav>
      <div className="thin-line"></div>
    </div>
  );
}

export default Navbar;
