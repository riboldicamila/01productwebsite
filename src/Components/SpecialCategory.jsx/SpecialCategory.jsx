import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./SpecialCategory.css";

import pottery01 from "../../Components/Images/about01.jpg";
import pottery02 from "../../Components/Images/about04.jpg";
import pottery03 from "../../Components/Images/about03.jpg";
import pottery04 from "../../Components/Images/about05.jpg";

const images = [
  { src: pottery01, alt: "Pottery" },
  { src: pottery02, alt: "Plate" },
  { src: pottery03, alt: "Vases" },
  { src: pottery04, alt: "Vases" },
];

const SpecialCategory = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (swiperRef.current) {
        const swiper = swiperRef.current.swiper;
        if (swiper.isEnd) {
          swiper.slideTo(0);
        } else {
          swiper.slideNext();
        }
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="special-category-container">
      <div className="exclusive-category">
        <h1>
          Software <span className="highlight-word">Development</span>
        </h1>
        <p>
          Web developer skilled in frontend, backend, and database integration,
          with a technology management background to deliver practical and
          effective solutions.
        </p>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={false} // Hide the navigation arrows
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} className="special-img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialCategory;
