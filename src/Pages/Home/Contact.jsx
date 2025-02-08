import './Contact.css';
import { contactInfo, socialLinks } from '../../Data/ContactData'; 

import contact01 from "../../Components/Images/contact01.jpg";


const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      
      <div className="contact-content">
        <div className="contact-image">
          <img 
            src={contact01}
            alt="Decorative vase with flowers" 
            className="main-image"
          />
        </div>
        
        <div className="contact-info">
          <h2 className="get-in-touch">GET IN TOUCH</h2>
          <p className="subtitle">Would love to connect, Lets Get In Touch!</p>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>Based on</h3>
              <p>{contactInfo.address[0]}</p>
              <p>{contactInfo.address[1]}</p>
            </div>
            
            <div className="info-item">
              <h3>Phone</h3>
              <p>{contactInfo.phone}</p>
            </div>
            
            <div className="info-item">
              <h3>Email</h3>
              <p>{contactInfo.email}</p>
            </div>
            
            <div className="info-item">
              <h3>Additional Information</h3>
              <p>{contactInfo.additionalInfo}</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Social</h3>
            <div className="social-icons">
              {socialLinks.map((social) => (
                <a href={social.link} key={social.name} className="social-icon">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
