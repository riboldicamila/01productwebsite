import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link for navigation
import logoImage from '../Images/logo.png'
import './navbar.css';

function Navbar() {
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
      <nav className="navbar">
        <div className="left-side">
          <ul className="nav-links">
            <li><Link to="/">Liliana</Link></li> {/* Use Link for navigation */}
            <li><Link to="/">Creations</Link></li> {/* Use Link for navigation */}
            <li><Link to="/">History</Link></li> {/* Use Link for navigation */}
          </ul>
        </div>
        <div className="logo">
          <img className="logo" src={logoImage} alt="Logo" />
        </div>
        <div className="right-side">
          <ul className="nav-links">
            <li><Link to="/blog">Blog</Link></li> {/* Use Link for navigation */}
            <li><Link to="/search">Search</Link></li> {/* Use Link for navigation */}
            <li><Link to="/contact">Contact</Link></li> {/* Use Link for navigation */}
          </ul>
        </div>
      </nav>
      <div className="thin-line"></div>
    </div>
  );
}

export default Navbar;
