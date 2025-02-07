
import Carousel from "../../Components/Carousel/Carousel";
import pottery01 from "../../Components/Images/pottery01.jpg";
import pottery02 from "../../Components/Images/pottery02.jpg";
import pottery03 from "../../Components/Images/pottery03.jpg";
import InformationBanner from "../../Components/InformationBanner/InformacionBanner";
import SpecialCategory from "../../Components/SpecialCategory.jsx/SpecialCategory";
import { mockData } from "../../HomeData.js";

function Home() {
  return (
    <div>
      <Carousel image1={pottery01} image2={pottery02} image3={pottery03} />
      <SpecialCategory />
      <InformationBanner
        title={mockData.title}
        description={mockData.description}
        benefits={mockData.benefits}
      />
    </div>
  );
}

export default Home;
