import React from "react";
import "./AboutUs.css";
import OurServices from "../../Components/OurServices/OurServices";
import pottery01 from "../../Components/Images/pottery01.jpg";
import GenericButton from "../../Components/Button";


function AboutUs() {
  return (
    <div>
      <div className="about-me-container">
        <div className="about-us-content">
          <h2>About Us</h2>
          <h3>We Have Everything You Need ?</h3>
          <p>
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit. Accessorize with a straw hat and
            youre ready for summer!
          </p>
          <h4>Sample Unordered List</h4>
          <ul>
            <li>Lorem ipsum, or lipsum as it is sometimes known</li>
            <li>
              Dummy text used in laying out print, graphic, or web designs
            </li>
            <li>The passage is attributed to</li>
          </ul>
          <GenericButton />
        </div>
        <div className="image-container">
          <img src={pottery01} alt="Flowers in a Vase" />
        </div>
      </div>

      <OurServices />

    </div>
  );
}

export default AboutUs;
