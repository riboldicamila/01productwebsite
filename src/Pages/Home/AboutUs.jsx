import React from "react";
import "./AboutUs.css";

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
          <button className="contact-us-btn">CONTACT US →</button>
        </div>
        <div className="image-container">
          <img src="path/to/your/image.jpg" alt="Flowers in a Vase" />
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
