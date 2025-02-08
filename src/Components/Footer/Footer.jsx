import "./Footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../Images/logo.png";
import { aboutLinks, businessLinks, contactInfo } from "../../Data/FooterData";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logoImage} alt="Logo" className="logo" />
        <p className="text-light">Engineering user-friendly solutions.</p>
        <div className="social-media-icons">
          <FaTiktok className="tiktok-icon" />
          <FaInstagram className="instagram-icon" />
        </div>
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
