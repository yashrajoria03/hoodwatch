import React, { useState } from "react";
import logo from "../../assets/eye.png";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState("false");

  const handleNav = () => {
    const btn = document.getElementById("menu-btn");
    const nav = document.getElementById("menu");
    btn.classList.toggle("open");
    nav.classList.toggle("flex");
    nav.classList.toggle("hidden");
  };

  return (
    <div className=" px-4 w-full  md:h-16  flex flex-row justify-around items-center font-sans bg-[rgba(255,255,255,0.6)] backdrop-blur-md fixed top-0 left-0 right-0">
      <div className=" max-w-1/2 flex items-center justify-center gap-x-4 md:max-w-1/3">
        <img src={logo} className="w-16" alt="" />
        <h1 className="text-2xl text-[#180022] font-bold font-sans">HoodEye</h1>
      </div>
      <div className="hidden  md:flex items-center justify-center font-normal text-gray-500 text-[16px] gap-x-12 h-full  md:max-w-1/3  ">
        <a
          href="# "
          className="hover:border-t-4 hover:border-t-purple-600 h-full flex items-center"
        >
          About Us
        </a>
        <a href="#">Services</a>
        <a href="#">Contact Us </a>
      </div>
      <div className="   items-center justify-center gap-x-6  md:max-w-1/3 hidden md:flex">
        <button className="text-gray-500 font-sans px-4 py-1 bg-[#f2f4ee] rounded-md hover:bg-[#dcded9] text-[14px]">
          Sign Up
        </button>
        <button className="text-white font-sans px-4 py-1 bg-[#715feb] rounded-md hover:bg-[#6353c8] text-[14px]">
          Login
        </button>
      </div>
      <div className="md:hidden w-1/2 flex items-center justify-end">
        <button
          id="menu-btn"
          onClick={handleNav}
          className={`block hamburger md:hidden focus:outline-none ${
            toggle ? "" : "open"
          }`}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex-col items-center hidden self-end py-4 mt-10 space-y-4 font-bold sm:w-min-3xl sm:self-center px-8 right-6 drop-shadow-md text-black bg-slate-50"
        >
          <a href="#" className="font-medium px-3">
            About
          </a>
          <a href="#" className="font-medium px-3">
            Services
          </a>
          <a href="#" className="font-medium px-3">
            Contact Us
          </a>
          <a href="#" className="font-medium text-darkBlue px-3 text-[#715feb]">
            Sign Up
          </a>
          <a href="#" className="font-medium text-darkBlue   text-[#715feb]">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
