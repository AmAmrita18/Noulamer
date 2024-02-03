/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Hero = ({ description1, description2, button, heroImage }) => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-full">
        <Header />
        <div className="w-[80%] h-full px-4 mx-auto max-w-[1200px] flex flex-col justify-center items-start ">
          <h1 className="lg:text-7xl md:text-6xl text-5xl leading-tight mt-24 text-[#FFFFFF] font-[600]">
            {description1}
          </h1>
          <h1 className="lg:text-7xl md:text-6xl text-5xl leading-tight  text-[#FFFFFF] font-[600]">
            {description2}
          </h1>
          <Link className="text-[#FFFFFF] bg-[#0A385A] transition-all duration-700 ease-in-out  hover:scale-95  flex items-center gap-3 mt-8 px-8 py-5 rounded-full font-[600] text-[17px]">
            {button.title} <GoArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
