import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../../assets/images/logo-header.svg";
import { IoCloseSharp } from "react-icons/io5";


const NavbarDrawer = ({ links }) => {
  return (
    <div className="relative grid lg:hidden z-50">
      <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-1" className="block cursor-pointer">
          <FaBars className="text-white text-xl" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-1"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-3/4 space-y-2 p-0">
          <li className="flex flex-row justify-between items-center pt-2 px-4">
            <div>
              <img className="w-12 h-12" src={logo} alt="" />
            </div>
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="p-3 bg-primary text-white transition-colors ease-in-out duration-300 hover:bg-primary-content"
            >
              <IoCloseSharp className="font-medium text-sm" />
            </label>
          </li>
          <span className="divider"></span>
          {links}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
