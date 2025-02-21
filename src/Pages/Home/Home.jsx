import GenericButton from "../../Components/Button.jsx";
import Carousel from "../../Components/Carousel/Carousel";
import pottery01 from "../../Components/Images/tech01.jpg";
import pottery02 from "../../Components/Images/tech02.jpg";
import pottery03 from "../../Components/Images/tech03.jpg";
import InformationBanner from "../../Components/InformationBanner/InformacionBanner";
import SpecialCategory from "../../Components/SpecialCategory.jsx/SpecialCategory";
import { mockData } from "../../HomeData.js";

import "./Home.css";

function Home() {
  return (
    <div>
      <Carousel image1={pottery01} image2={pottery02} image3={pottery03} />
      <SpecialCategory />
      {/* <InformationBanner
        title={mockData.title}
        description={mockData.description}
        benefits={mockData.benefits}
      /> */}
      <div className="home-parallax-image">
        <div className="overlay">
          <GenericButton text="Take a Look at My Work" to="/projects" />
        </div>
      </div>
    </div>
  );
}

export default Home;
