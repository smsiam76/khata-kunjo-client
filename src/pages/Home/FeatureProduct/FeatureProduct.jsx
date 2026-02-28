import React from "react";
import Container from "../../../components/Shared/Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "../../../components/Shared/Card/ProductCard";

const FeatureProduct = ({ data }) => {
  return (
    <section className="my-16">
      <Container>
        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-accent">Featured Products</h2>
        </div>
        <div>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            slidesPerView="auto"
            spaceBetween="auto"
            className="mySwiper"
          >
            {data.map((product) => (
              <SwiperSlide key={product?._id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default FeatureProduct;
