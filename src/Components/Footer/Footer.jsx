import "./Footer.css";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import logoImage from "../Images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <img src={logoImage} alt="Logo" className="logo" />
        <p className="text-light">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
        <div className="social-media-icons">
          <FaTiktok className="tiktok-icon" />
          <FaInstagram className="instagram-icon" />
        </div>
      </div>
      <div className="footer-column">
        <h3 className="title">About Us</h3>
        <p>About Us</p>
        <p>History</p>
        <p>Our Creations</p>
      </div>
      <div className="footer-column">
        <h3 className="title">Our Business</h3>
        <p>About Us</p>
        <p>History</p>
      </div>
      <div className="footer-column">
        <h3 className="title">Contact Information</h3>
        <p>
          <strong>Location:</strong> 1234 Address St, City, Country
        </p>
        <p>
          <strong>Contact Us:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
