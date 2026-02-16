import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import logo from "../../assets/logo-main.png";
import { FaFacebookF } from "react-icons/fa";
const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#ffff] to-[#dfe6e9]">
      <div className="max-w-10/12 mx-auto">
        <div className="w-3/4 mx-auto mb-4">
          <DotLottieReact
            src="https://lottie.host/ddce81b0-ea2b-4769-8c35-534a38f180f6/OE8KFoGkwY.lottie"
            loop
            autoplay
          />
        </div>
        <div className="">
          <div className="text-center">
            <h3 className="font-medium text-2xl text-[#F68B1F] mb-2">
              We are Launching Soon...
            </h3>
            <h1 className="text-4xl font-medium font-oswald text-[#224263] tracking-wide">
              Our Website is Under Maintenance...
            </h1>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="text-center">
              <h5 className="font-semibold mb-2 text-[#F68B1F]">Follow Us</h5>
              <a className="block bg-[#0866FF]  text-white  w-fit p-2 rounded-full mx-auto hover:bg-[#F68B1F] duration-300" href="https://www.facebook.com/khatakunjobd">
                <FaFacebookF size={16} />
              </a>
            </div>
            <span className="block w-2 h-12 rounded-tl-2xl rounded-br-2xl bg-[#224263]"></span>
            <figure>
              <img className="w-32 h-32 object-cover" src={logo} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
