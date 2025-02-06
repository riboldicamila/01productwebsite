import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const categories = [
  {
    id: 1,
    title: 'Pottery',
    image: '/api/placeholder/400/500',
  },
  {
    id: 2,
    title: 'Plate',
    image: '/api/placeholder/400/500',
  },
  {
    id: 3,
    title: 'heeheh',
    image: '/api/placeholder/400/500',
  },
  // Add more items as needed
];

const CategoryShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">
          <span className="text-gray-900">Exclusive</span>
          <span className="text-gray-500 ml-2">Category</span>
        </h2>
        <p className="text-gray-600">
          Discover our fantastic early booking discounts & start planning your journey.
        </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="relative group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-white px-6 py-2 rounded-full text-gray-800 font-medium">
                  {category.title}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryShowcase;