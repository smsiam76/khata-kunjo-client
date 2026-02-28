import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

import SingleSlider from "./SingleSlider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const bannerPromise = fetch("/banner.json").then((res) => res.json());

const Banner = () => {
  const bannerData = use(bannerPromise);
  //console.log(bannerData);

  return (
    <section className="relative">
      <div className="swiper-button-prev !hidden md:!block md:w-8 md:h-8 rounded-full p-3 bg-primary absolute left-2 top-1/2 translate-x-4 -translate-y-1/2 z-10 transition-all duration-300 ease-in-out hover:bg-primary-content cursor-pointer border border-primary outline-0 hover:ring-1 hover:ring-primary hover:ring-offset-2">
        <FaArrowLeft
          size={12}
          className=" text-white font-medium text-sm"
        />
      </div>
      <div className="swiper-button-next !hidden md:!block md:w-8 md:h-8 rounded-full p-3 bg-primary text-white absolute right-2 top-1/2 -translate-x-4 -translate-y-1/2 z-10 transition-all duration-300 ease-in-out hover:bg-primary-content cursor-pointer border border-primary outline-0 hover:ring-1 hover:ring-primary hover:ring-offset-2">
        <FaArrowRight
          size={12}
          className="text-white font-medium text-sm"
        />
      </div>
      <Swiper
        // navigation={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((singleBanner, idx) => (
          <SwiperSlide key={idx}>
            <SingleSlider singleBanner={singleBanner}></SingleSlider>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
