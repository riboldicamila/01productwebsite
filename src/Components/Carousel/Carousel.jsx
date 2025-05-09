import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

function Carousel({ videoSrc }) {
  const textSlides = [
    "Get to know my journey and how I become a software developer.",
    "Enjoy creating websites, learning about tech.",
    "MERN stack. Javascript. React.js",
  ];

  return (
    <div className="carousel-container">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src="https://res.cloudinary.com/dav7tzdzv/video/upload/v1746209885/7989675-hd_1920_1080_25fps_yqcano.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="background-overlay"></div>


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
          delay: 4500,
          speed: 2000,
          disableOnInteraction: false,
        }}
        className="swiper-carousel"
      >
        {textSlides.map((text, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="carousel-text">
              <p>{text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
