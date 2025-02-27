import React from "react";

import OurServices from "../../Components/OurServices/OurServices";
import pottery01 from "../../assets/Images/tech02.jpg";
import GenericButton from "../../Components/GenericButton/Button";
import IconsCarousel from "../../Components/IconsCarrousel/IconsCarrousel";

import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-me-container">
        <div className="about-us-content">
          <h2>About </h2>
          <h3>My Story</h3>
          <p>
            My name is Camila. I am originally from Buenos Aires, Argentina. I
            studied at the University of Buenos Aires for my bachelor’s degree
            and, while doing so, started working in tech, especially with
            full-stack development teams. At that time, I realized that software
            development is something I really enjoy and that challenges me every
            day. I started to dig deeper into it and specialize in the parts I
            liked the most, such as frontend and React.js.
          </p>
          <p>
            My last role was at an American bank, where I gained a lot of growth
            and experience. However, due to a relocation to Italy, I had to
            leave that behind. Now, I’m looking for a new role to keep doing
            what I enjoy.
          </p>
          <div className="skillset">
            <h4>Skillset:</h4>
            <ul>
              <li>MERN tech stack (MongoDB, Express, React.js, Node.js)</li>
              <li>
                Experience in deployment to dev, uat, and prod environments
              </li>
              <li>Worked with Agile methodologies (Scrum, Jira)</li>
              <li>Git (both with GitHub and Bitbucket)</li>
            </ul>
            <p>
              Feel free to reach out—always happy to chat about tech and
              projects!
            </p>
          </div>

          <GenericButton
            text="LinkedIn"
            to="https://www.linkedin.com/in/camila-riboldi/"
          />
        </div>
        <div className="image-container">
          <img src={pottery01} alt="tech" />
        </div>
      </div>

      <OurServices />

      <IconsCarousel />
    </div>
  );
}

export default AboutUs;
