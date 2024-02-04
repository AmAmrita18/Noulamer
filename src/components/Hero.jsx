/* eslint-disable react/prop-types */
import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Hero = ({ description1, description2, button, heroImage }) => {
  return (
    <div
      className="w-full md:h-screen h-full md:pb-0 pb-6"
      style={{
        backgroundImage: `url('${heroImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-full">
        <Header />
        <div className="w-[80%] h-full  mx-auto max-w-[1200px] flex flex-col justify-center items-start ">
          <h1 className="lg:text-[4rem] md:text-6xl text-[2.1rem] leading-tight lg:mt-24 md:mt-44 mt-0 text-[#FFFFFF] font-[600]">
            {description1}
          </h1>
          <h1 className="lg:text-[4rem] md:text-6xl text-[2.1rem] leading-tight  text-[#FFFFFF] font-[600]">
            {description2}
          </h1>
          <Link className="text-[#FFFFFF] bg-[#0A385A] transition-all duration-700 ease-in-out  hover:scale-95  flex items-center gap-3 mt-8 px-8 py-5 rounded-full font-[600] md:text-[17px] text-[15px]">
            {button.title} <GoArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
