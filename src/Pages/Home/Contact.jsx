import './Contact.css';
import { contactInfo } from '../../Data/ContactData'; 
import contact01 from "../../Components/Images/contact01.jpg";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"; 


const Contact = () => {
  const socialLinks = [
    { name: "Website", icon: <FaGlobe size={24} />, link: "https://camila-riboldi.vercel.app/" },
    { name: "Linkedin", icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/camila-riboldi/" },
    { name: "Github", icon: <FaGithub size={24} />, link: "https://github.com/riboldicamila" },
  ];
  
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
                  {social.icon}
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
