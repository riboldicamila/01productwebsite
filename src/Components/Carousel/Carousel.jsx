import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css"
import GenericButton from "../Button";

function Carousel({ image1, image2, image3 }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      style={{ maxHeight: "700px" }}
    >
      {[image1, image2, image3].map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "500px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
          />
          {index !== 1 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              <h2 style={{ fontSize: "1rem", textTransform: "uppercase" }}>
                Art & Print
              </h2>
              <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                Create Your Clay
              </h1>
              <p style={{ fontSize: "1rem", maxWidth: "70%", marginBottom: "1rem" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                tincidunt n morbi habitasse viverra.
              </p>
              <GenericButton text="Know More" />
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
