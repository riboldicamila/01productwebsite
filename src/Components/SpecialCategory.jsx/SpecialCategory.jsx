import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./SpecialCategory.css";

import pottery01 from "../../Components/Images/pottery01.jpg";
import pottery02 from "../../Components/Images/pottery02.jpg";
import pottery03 from "../../Components/Images/pottery03.jpg";

const images = [
  { src: pottery01, alt: "Pottery" },
  { src: pottery02, alt: "Plate" },
  { src: pottery03, alt: "Vases" },
  { src: pottery03, alt: "Vases" },
  { src: pottery03, alt: "Vases" },
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
      <h1>Exclusive <span className="highlight-word">Category</span></h1>
      <p>
          Discover our fantastic early booking discounts & start planning your
          journey.
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
            <img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialCategory;
