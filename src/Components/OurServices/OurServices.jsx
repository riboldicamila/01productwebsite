import './OurServices.css';
import gifComputer from '../Images/computer-gif.gif'; 
import gifDocument from '../Images/document-gif.gif'; 
import gifWork from '../Images/work-gif.gif'; 


const OurServices = () => {
  return (
    <section className="our-services">
      <h2>My Journey</h2>
      <p>Know more about my journey into software development and how my skills can help you succeed in web development projects.</p>

      <div className="service-cards">
        <div className="service-card">
          <div className="icon-container">
            <img src={gifDocument} alt="GIF Animation" width="48" height="48" />
          </div>
          <h3>BACHELORS DEGREE</h3>
          <p>Graduated with a Bachelors in Information Systems from UBA, Argentina, with a strong foundation in both business and technology management, empowering me to create solutions that align with real-world needs.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src={gifWork} alt="GIF Animation" width="48" height="48" />
          </div>
          <h3>WORK EXPERIENCE</h3>
          <p>Extensive experience working on frontend development, React.js, and backend systems, integrating them with databases for seamless functionality and performance. I am committed to delivering user-friendly, high-quality web applications.</p>
        </div>

        <div className="service-card">
          <div className="icon-container">
            <img src={gifComputer} alt="GIF Animation" width="48" height="48" />
          </div>
          <h3>WEB DEVELOPMENT</h3>
          <p>From building modern, responsive UIs to integrating backend systems, I specialize in creating full-stack web applications using technologies such as React, Node.js, and databases, all while ensuring scalability and performance.</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
