import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import logoImage from "../Images/logoWhite.png";
import { aboutLinks, businessLinks, contactInfo } from "../../Data/FooterData";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logoImage} alt="Logo" className="logo" />
      </div>
      <div className="footer-column">
        <h3 className="title">About Us</h3>
        <ul>
          {aboutLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="title">Our Business</h3>
        <ul>
          {businessLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-column">
        <h3 className="title">Contact Information</h3>
        <p>
          <strong>Location:</strong> {contactInfo.location}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
