import React from "react";
import logo from "../../assets/logo-main.png";
import { FaFacebookF } from "react-icons/fa";
import Lottie from "lottie-react";
import maintenanceAnimation from "../../assets/animation/maintenance.json";
import { motion } from "motion/react";



const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-[#ffff] to-[#dfe6e9]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{  scale: 1 }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="max-w-10/12 mx-auto"
      >
        <motion.div
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 5, delay: 1, ease: "easeInOut", repeat: Infinity }}
          className="w-3/4 mx-auto mb-4"
        >
          <Lottie
            className="w-full md:w-3/4 lg:w-2/4 mx-auto"
            animationData={maintenanceAnimation}
          ></Lottie>
        </motion.div>
        <motion.div
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 5, delay:1, ease: "easeInOut", repeat: Infinity }}
          className=""
        >
          <div className="text-center">
            <h3 className="font-medium text-xl md:text-2xl text-[#F68B1F] mb-2">
              We are Launching Soon...
            </h3>
            <h1 className="text-2xl md:text-4xl font-medium font-oswald text-[#224263] tracking-wide">
              Our Website is Under Maintenance...
            </h1>
          </div>
          <div className="flex justify-center items-center gap-6 md:gap-10">
            <div className="text-center">
              <h5 className="font-semibold mb-2 text-[#F68B1F]">Follow Us</h5>
              <a
                className="block bg-[#0866FF]  text-white  w-fit p-2 rounded-full mx-auto hover:bg-[#F68B1F] duration-300"
                href="https://www.facebook.com/khatakunjobd"
              >
                <FaFacebookF size={16} />
              </a>
            </div>
            <span className="block w-2 h-12 rounded-tl-2xl rounded-br-2xl bg-[#224263]"></span>
            <figure>
              <img className="w-20 md:w-32 h-20 md:h-32 object-cover" src={logo} alt="" />
            </figure>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Maintenance;
