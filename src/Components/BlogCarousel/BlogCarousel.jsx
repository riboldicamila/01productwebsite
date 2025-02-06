import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const blogPosts = [
  {
    id: 1,
    image: '/path/to/image1.jpg',
    date: '17 March 2023',
    title: 'Artem - Digital Marketing...',
    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy...'
  },
  {
    id: 2,
    image: '/path/to/image2.jpg',
    date: '17 March 2023',
    title: 'Artem - Digital Marketing...',
    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy...'
  },
  {
    id: 3,
    image: '/path/to/image3.jpg',
    date: '17 March 2023',
    title: 'Artem - Digital Marketing...',
    description: 'Faded short sleeves t-shirt with high neckline. Soft and stretchy...'
  }
];

const BlogCarousel = () => {
  return (
    <div className="blog-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="blog-slide">
              <img 
                src={post.image} 
                alt={post.title} 
                className="blog-image"
              />
              <div className="blog-date">{post.date}</div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <a href="/blog" className="read-more">READ MORE</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogCarousel;