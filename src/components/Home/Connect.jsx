import React from "react";
import connectImg from "/connect.png";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Connect = () => {
  return (
    <div
      className="w-full h-[570px]"
      style={{
        backgroundImage: `url('${connectImg}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="w-full flex  ">
        <div className="w-[80%] h-full px-4 md:py-28 py-8 lg:gap-50 md:gap-24 gap-1  mx-auto max-w-[1200px] flex md:flex-row flex-col justify-center items-center">
          <div className="md:w-[45%] w-full flex flex-col justify-center md:gap-6 gap-3">
            <h1 className="lg:text-5xl md:text-4xl text-3xl leading-tight  text-[#FFFFFF] font-[700]">
              Connect with Noulamer
            </h1>
            <p className="text-[#FFFFFF] lg:mr-20 lg:text-[24px] md:text-[21px] text-[19px] font-[400] leading-relaxed">
              We&apos;re eager to hear from you. Fill out the form below and
              let&apos;s set sail on your seafood journey.
            </p>
          </div>
          <div className="md:w-[55%] w-full md:px-0 pr-8 md:pt-0 pt-4 flex flex-col md:gap-y-10 gap-y-4">
            <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-4  gap-x-[1rem]">
              <h1 className="text-[#FFFFFF] lg:w-[220px] md:w-[170px] w-full border-b border-[#F2F2F2] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="lg:w-[220px] md:w-[170px] w-full bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] placeholder:text-opacity-60 outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#FFFFFF] lg:w-[220px] md:w-[170px] w-full border-b border-[#F2F2F2] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="lg:w-[220px] md:w-[170px] w-full bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] placeholder:text-opacity-60 outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-4 gap-x-[1rem]">
              <h1 className="text-[#FFFFFF] lg:w-[220px] md:w-[170px] w-full border-b border-[#F2F2F2] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                  className="lg:w-[250px] md:w-[170px] w-full bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] placeholder:text-opacity-60 outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#FFFFFF] lg:w-[220px] md:w-[170px] w-full border-b border-[#F2F2F2] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
                <input
                  type="text"
                  id="interest"
                  name="interest"
                  placeholder="Interested In"
                  className="lg:w-[250px] md:w-[170px] w-full bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] placeholder:text-opacity-60 outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <h1 className="text-[#FFFFFF] border-b md:pb-4 pb-0 lg:w-[450px] w-full border-[#F2F2F2] lg:text-[20px] md:text-[18px] text-[16px] font-[500]">
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] placeholder:text-opacity-60 outline outline-0 focus:outline-0"
              />
            </h1>
            <div className="flex justify-end">
              <Link className="text-[#FFFFFF] bg-[#0A385A] transition-all duration-700 ease-in-out  hover:scale-95  w-[150px]  flex items-center  gap-3 md:mt-8 mt-3 px-8  py-5 rounded-full font-[600] text-[17px]">
                Submit <GoArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
