import { format } from "date-fns";
import React from "react";
import logo from "../../../assets/images/logo-footer.png"
import IconBox from "../Box/IconBox";

import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
    const year = format(new Date(), "yyyy")
  return (
    <div className="flex flex-col items-center justify-center w-full py-8 bg-gradient-to-b from-primary to-primary-content text-white/90">
      <Link to="/">
        <img className="w-24 md:w-28" src={logo} alt="" />
      </Link>
      <p className="mt-4 text-center text-sm">
        Copyright © {year} - All
        rights reservered <Link className="transition-all duration-300 ease-linear hover:text-accent hover:underline" to="/">Khata Kunjo</Link>. 
      </p>
      <div className="flex items-center gap-4 mt-5">
            <a href=""><IconBox variant="facebook" className=""><FaFacebookF className="text-base"/></IconBox></a>
            <a href=""><IconBox variant="whatsapp" className=""><FaWhatsapp className="text-base"/></IconBox></a>
      </div>
    </div>
  );
};

export default Footer;
