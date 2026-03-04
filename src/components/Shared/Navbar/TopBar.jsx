import React, { use } from "react";
import Container from "../Container/Container";
import { FaEnvelope, FaFacebookF, FaPhone, FaYoutube } from "react-icons/fa6";
import { Link, NavLink } from "react-router";

import logo from "../../../assets/images/logo-header.svg";
import Button from "../Button/Button";
import { FaOpencart, FaSearch, FaUser } from "react-icons/fa";
import InputField from "../Input/InputField";
import NavbarDrawer from "./NavbarDrawer";
import { IoCartOutline } from "react-icons/io5";
import IconBox from "../Box/IconBox";
//import useCart from "../../../hooks/useCart";

//const productPromise = fetch("http://localhost:5000/products").then(res => res.json());
const TopBar = () => {
  //const products = use(productPromise);
 // const {carts} = useCart(products)
 // console.log(carts);
  
  return (
    <>
      {/* TopBar */}
      <div className="bg-primary text-white py-2">
        <Container>
          <div className="flex justify-center md:justify-between items-center text-sm">
            {/* contact */}
            <div className="flex flex-wrap justify-center gap-x-4 md:gap-8">
              <p className="flex items-center gap-2">
                <FaPhone /> <a className="transition ease-in-out duration-300 hover:text-accent hover:underline" href="tel:01306-507274">01306-507274</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> <a className="transition ease-in-out duration-300 hover:text-accent hover:underline" href="">khatakunjo@gmail.com</a>
              </p>
            </div>
            {/* social link */}
            <div className="hidden md:flex gap-4">
              <a href="">
                <IconBox variant="facebook" className="">
                  <FaFacebookF  className="text-base"/>
                </IconBox>
              </a>
              <a href="">
                <IconBox variant="youtube" className="">
                  <FaYoutube className="text-base" />
                </IconBox>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Middle Bar */}
      <div className="bg-primary/5">
        <Container>
          <div className="navbar p-0">
            <div className="navbar-start flex-1">
              <Link to="/">
                <img
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                  src={logo}
                  alt="Khata Kunjo Logo"
                />
              </Link>
            </div>
            {/* center search bar */}
            <div className="navbar-center hidden md:flex flex-1">
              <form action="w-full">
                <div className="relative w-full">
                  <InputField placeholder="Search Here" className="w-full" />

                  <button className="text-white absolute right-0 top-1/2 -translate-y-1/2 border border-primary p-4 bg-primary rounded-r-md cursor-pointer hover:bg-[#e3790e] transition-colors ease-in-out duration-300">
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
            <div className="navbar-end gap-4 md:gap-6 flex-1 items-center">
              {/* <Link className="group w-10 h-10 text-accent font-medium transition-all duration-300 ease-in-out hover:text-primary relative">
                <FaOpencart className="text-2xl md:text-4xl" />
                <span className="absolute -top-2 -right-3  w-[18px] h-[18px] bg-primary rounded-full text-md transition-all duration-300 ease-in-out group-hover:text-white">
                  3
                </span>

              </Link> */}
              {/* this part will be reused after some days */}
              {/* <Link to="/cart"
               className="relative w-10 h-10 flex items-center justify-center cursor-pointer group text-accent font-medium transition-all duration-300 ease-in-out hover:text-primary">
                <IoCartOutline className="text-2xl md:text-3xl" />
                <span className="absolute -top-2 right-2 translate-2 text-xs text-white w-[18px] h-[18px] flex items-center justify-center rounded-full bg-primary text-md transition-all duration-300 ease-in-out group-hover:text-white">
                  {carts.length}
                </span>
              </Link> */}
              <button className="md:hidden w-8 h-8 md:w-10  md:h-10 flex items-center justify-center rounded-md p-2 bg-white text-primary transition-all duration-300 ease-in-out hover:bg-primary hover:text-white cursor-pointer border border-primary outline-0 hover:ring-1 hover:ring-primary hover:ring-offset-2">
                <FaSearch className="text-sm md:text-base lg:text-lg" />
              </button>
              <button className="w-8 h-8 md:w-10  md:h-10 flex items-center justify-center rounded-full p-2 bg-primary text-white transition-all duration-300 ease-in-out hover:bg-primary-content cursor-pointer border border-primary outline-0 hover:ring-1 hover:ring-primary hover:ring-offset-2">
                <FaUser className="text-sm md:text-base lg:text-lg" />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
