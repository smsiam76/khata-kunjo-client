import React from "react";
import Container from "../Container/Container";
import { Link, NavLink } from "react-router";
import NavbarDrawer from "./NavbarDrawer";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import Button from "../Button/Button";


const Navbar = () => {
  const links = (
    <>
      <NavLink
        className="block py-3 px-6 transition-colors ease-in-out duration-300  hover:bg-[#e3790e]"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="block py-3 px-6 transition-colors ease-in-out duration-300  hover:bg-[#e3790e]"
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className="block py-3 px-6 transition-colors ease-in-out duration-300  hover:bg-[#e3790e]"
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        className="block py-3 px-6 transition-colors ease-in-out duration-300  hover:bg-[#e3790e]"
        to="/contact"
      >
        Contact
      </NavLink>
    </>
  );

  const categories = <>
    <Link className="py-3 px-4 border border-white/20 hover:bg-primary" to="/products">All Khata</Link>
    <Link className="py-3 px-4 border border-white/20 hover:bg-primary" to="/products/category/spiral">Spiral Khata</Link>
    <Link className="py-3 px-4 border border-white/20 hover:bg-primary" to="/products/category/selai">Selai Khata</Link>
   
  </>
  return (
    <div className="bg-primary">
      <Container>
        <div className="flex justify-between items-center">
          {/* dropdown for browse categories */}
          <div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 py-3 px-4 bg-primary-content cursor-pointer text-white font-medium"
              >
                <FaBars className="block tex-lg md:text-xl" />
                <p className="text-sm md:text-base">Browse Categories</p>
                <FaAngleDown className="block tex-lg md:text-xl" />
              </div>

              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-primary-content z-10 px-0 pb-0 w-full rounded-b-md text-white shadow-sm"
              >
                {
                  categories
                }
              </ul>
            </div>
          </div>
          <nav className="hidden lg:block text-white">
            <ul className="flex">{links}</ul>
          </nav>
          <NavbarDrawer links={links}></NavbarDrawer>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
