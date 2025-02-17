import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './IconsCarousel.css'; 

const images = [
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739789972/icon04_ct01yp.png',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739789972/icon01_wux6ol.png',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739790241/icon09_hsm2bv.png',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739789972/icon06_thy89r.jpg',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739789972/icon02_jq3cd7.png',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739789972/icon03_g16nso.png',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739790149/icon07_irhjfp.png',
  'https://res.cloudinary.com/dav7tzdzv/image/upload/v1739790149/icon08_wfjnfh.png'
];

const IconsCarousel = () => {
  return (
    <div className="icon-carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IconsCarousel;