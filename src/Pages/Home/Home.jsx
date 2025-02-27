import GenericButton from "../../Components/GenericButton/Button.jsx";
import Carousel from "../../Components/Carousel/Carousel";
import SpecialCategory from "../../Components/SpecialCategory.jsx/SpecialCategory";

import tech01 from "../../assets/Images/tech01.jpg";
import tech02 from "../../assets/Images/tech02.jpg";
import tech03 from "../../assets/Images/tech03.jpg";

import "./Home.css";

function Home() {
  return (
    <div>
      <Carousel image1={tech01} image2={tech02} image3={tech03} />
      <SpecialCategory />
      <div className="home-parallax-image">
        <div className="overlay">
          <GenericButton text="Take a Look at My Work" to="/projects" />
        </div>
      </div>
    </div>
  );
}

export default Home;
