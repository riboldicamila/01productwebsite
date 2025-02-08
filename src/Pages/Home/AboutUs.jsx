import React from "react";
import "./AboutUs.css";
import OurServices from "../../Components/OurServices/OurServices";
import pottery01 from "../../Components/Images/tech02.jpg";
import GenericButton from "../../Components/Button";


function AboutUs() {
  return (
    <div>
      <div className="about-me-container">
        <div className="about-us-content">
          <h2>About </h2>
          <h3>How is my developer profile?</h3>
          <p>
            Have +3 years of experience developing applications and websites. 
            Passionate about UX/UI experience. Worked with API (RESTful applications), backend services, databases, and different frameworks.
          </p>
          <h4>Main skills </h4>
          <ul>
            <li>React JS, HTML, CSS</li>
            <li>
              JavaScript (ongoing training on Node.js+Express+MongoDB)
            </li>
            <li>Experience with Python, SQL, Cherrypy framework</li>
          </ul>
          <GenericButton text="LinkedIn" to="/" />
        </div>
        <div className="image-container">
          <img src={pottery01} alt="tech" />
        </div>
      </div>

      <OurServices />

    </div>
  );
}

export default AboutUs;
