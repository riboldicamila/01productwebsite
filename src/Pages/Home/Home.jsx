
import Carousel from "../../Components/Carousel/Carousel";
import pottery01 from "../../Components/Images/pottery01.jpg";
import pottery02 from "../../Components/Images/pottery02.jpg";
import pottery03 from "../../Components/Images/pottery03.jpg";
import InformationBanner from "../../Components/InformationBanner/InformacionBanner";
import SpecialCategory from "../../Components/SpecialCategory.jsx/SpecialCategory";

const mockData = {
  title: "Exciting Benefits Await!",
  description:
    "Join us today to enjoy exclusive perks and opportunities that will elevate your experience.",
  benefits: [
    {
      icon: "https://via.placeholder.com/50",
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders, no minimum required.",
    },
    {
      icon: "https://via.placeholder.com/50",
      title: "Exclusive Discounts",
      description:
        "Get access to special discounts and promotions available only to members.",
    },
    {
      icon: "https://via.placeholder.com/50",
      title: "24/7 Customer Support",
      description:
        "Our support team is available around the clock to assist you with any queries.",
    },
  ],
};

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

      {/* <BlogCarousel /> */}

      {/* carrosel with products */}
      {/*latest blog */}
    </div>
  );
}

export default Home;
