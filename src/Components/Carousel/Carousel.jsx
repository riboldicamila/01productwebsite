import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GenericButton from "../GenericButton/Button";

import "./Carousel.css";

function Carousel({ image3 }) {
  const textSlides = [
    "Get to know my journey and how I become a software developer.",
    "Enjoy creating websites, learning about tech.",
    "MERN stack. Javascript. React.js",
  ];

  return (
    <div
      className="carousel-container"
      style={{ backgroundImage: `url(${image3})` }}
    >
      <div className="static-text">
        <h2>DEVELOPER</h2>
        <h1>Crafting Solutions</h1>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          speed: 1000,
          disableOnInteraction: false,
        }}
        className="swiper-carousel"
      >
        {textSlides.map((text, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="carousel-text">
              <p>{text}</p>
              <GenericButton text="Know More" to="/about" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
