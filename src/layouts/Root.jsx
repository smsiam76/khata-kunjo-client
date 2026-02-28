import React from "react";
import TopBar from "../components/Shared/Navbar/TopBar";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer/Footer";
import logo from "../assets/images/logo-header.svg";

const Root = () => {
  return (
    <>
      <header>
            <TopBar />
            <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer logo={logo}></Footer>
      </footer>
    </>
  );
};

export default Root;
