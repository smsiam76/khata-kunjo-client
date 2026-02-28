import React from "react";
import { SwiperSlide } from "swiper/react";
import Button from "../Shared/Button/Button";

import "swiper/css";
import { Link } from "react-router";

const SingleSlider = ({ singleBanner }) => {
  const { subtitle, title, description, buttonText, bg_img, content_img } =
    singleBanner;

  console.log(singleBanner);

  return (
    <>
      <div
        className="hero md:h-110 py-4 md:py-0"
        style={{
          backgroundImage: `url(${bg_img} )`,
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="hero-content">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            {/* banner content */}
            <div className="w-3/4 md:w-1/2 text-accent text-center md:text-start">
              <h4 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium">
                {subtitle}
              </h4>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2 md:my-3">
                {title}
              </h1>
              <p className="text-base lg:text-lg mb-6">{description}</p>
              <Link to="/products">
                <Button>{buttonText}</Button>
              </Link>
            </div>

            {/* banner img */}
            <div className="">
              <img
                className="w-full h-48 md:h-56 lg:h-64 object-cover"
                src={content_img}
                alt="Khata Kunjo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleSlider;
