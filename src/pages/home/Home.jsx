import React from "react";
import Navbar from "../../components/navbar/Navbar";
import cover from "../../assets/home.jpg";

const Home = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <div className=" mt-16 md:h-[100vh] w-full flex flex-row items-center justify-between  font-roboto ">
        <div className="md:w-1/2 md:max-w-1/2 max-w-full h-full flex flex-col  justify-start items-start gap-y-12 pl-16">
          <h1 className="text-3xl pt-5 md:max-w-3xl text-accent md:text-6xl md:font-medium  mt-52 text-fadedBlack-0 ">
            Get Involved and Stay Informed with Our Local Social Network
          </h1>
          <h1 className="text-2xl  md:max-w-xl  md:text-2xl md:font-normal  text-[#808080] ">
            Connect with your neighbors and stay up-to-date on local events and
            news with our social network. Join us today and build a stronger
            community
          </h1>
          <button className="text-white  px-8 py-3 bg-[#715feb] rounded-md hover:bg-[#6353c8] text-[16px]">
            Get Started
          </button>
        </div>
        <div className=" md:w-1/2 md:max-w-1/2 max-w-full h-full">
          <img src={cover} alt="home screen cover" className="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
