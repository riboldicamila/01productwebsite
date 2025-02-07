import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      
      <div className="contact-content">
        <div className="contact-image">
          <img 
            src="/path-to-your-image.jpg" 
            alt="Decorative vase with flowers" 
            className="main-image"
          />
        </div>
        
        <div className="contact-info">
          <h2 className="get-in-touch">GET IN TOUCH</h2>
          <p className="subtitle">Wed Love to Hear From You, Lets Get In Touch!</p>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>Address</h3>
              <p>Silver business point</p>
              <p>India</p>
            </div>
            
            <div className="info-item">
              <h3>Phone</h3>
              <p>9033697984</p>
            </div>
            
            <div className="info-item">
              <h3>Email</h3>
              <p>info@gmail.com</p>
            </div>
            
            <div className="info-item">
              <h3>Additional Information</h3>
              <p>We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
            </div>
          </div>
          
          <div className="social-links">
            <h3>Social</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-snapchat"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-vimeo-v"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;