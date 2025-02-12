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
  { src: "https://res.cloudinary.com/dav7tzdzv/image/upload/v1739355097/about01_n9nhnq.jpg", alt: "Pottery" },
  { src: pottery02, alt: "Plate" },
  { src: pottery03, alt: "Vases" },
  { src: pottery04, alt: "Vases" },
];

const SpecialCategory = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

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
        Web developer with a solid grip on frontend, backend, and databases—bringing a tech management background to build practical solutions.
        </p>
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        navigation={false}
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
