import React from "react";
import "./AboutUs.css";
import OurServices from "../../Components/OurServices/OurServices";
import pottery01 from "../../Components/Images/tech02.jpg";
import GenericButton from "../../Components/Button";
import IconsCarousel from "../../Components/IconsCarrousel/IconsCarrousel";

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
            While working and finishing my studies, I also realized how much I
            enjoy the whole development process—being part of a team,
            understanding agile methodologies, having productive discussions
            with the team, and being involved in a project from beginning to
            end.
          </p>
          <p>
            My last role was at an American bank, where I gained a lot of growth
            and experience. However, due to a relocation to Italy, I had to
            leave that behind. Now, I’m looking for a new role to keep doing
            what I enjoy.
          </p>

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
