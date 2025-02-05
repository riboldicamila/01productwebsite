import { FaEnvelope, FaGlobe } from 'react-icons/fa';
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
            <li>Liliana </li>
            <li>Creations</li>
            <li>History</li>
          </ul>
        </div>
        <div className="logo">
          <img className="logo" src={logoImage} alt="Logo" />
        </div>
        <div className="right-side">
          <ul className="nav-links">
            <li>Blog</li>
            <li>Search</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className="thin-line"></div>
    </div>
  )
}

export default Navbar
