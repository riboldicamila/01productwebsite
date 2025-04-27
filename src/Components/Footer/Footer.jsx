import { Link } from "react-router-dom";

import logoImage from "../../assets/Images/logoWhite.png";
import { ABOUT_LINKS, BUSINESS_LINKS, CONTACT_INFO } from "../../Data/FooterData";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="footer-column">
        <h3 className="title">About</h3>
        <ul>
          {ABOUT_LINKS.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="title">Work</h3>
        <ul>
          {BUSINESS_LINKS.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="title">Contact Information</h3>
        <p>
          <strong>Location:</strong> {CONTACT_INFO.location}
        </p>

        <p>
          <strong>Email: </strong>
          <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
