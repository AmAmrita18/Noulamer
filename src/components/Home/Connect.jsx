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
      <div className="w-full flex ">
        <div className="w-[80%] h-full px-4 py-28 gap-64  mx-auto max-w-[1200px] flex ">
          <div className="w-[45%] flex flex-col justify-center gap-6">
            <h1 className="text-5xl leading-tight  text-[#FFFFFF] font-[700]">
              Connect with Noulamer
            </h1>
            <p className="text-[#FFFFFF] text-[24px] font-[400] leading-relaxed">
              We&apos;re eager to hear from you. Fill out the form below and
              let&apos;s set sail on your seafood journey.
            </p>
          </div>
          <div className="w-[55%] flex flex-col gap-y-10">
            <div className="flex gap-x-[1rem]">
              <h1 className="text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[20px] font-[500]">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[20px] font-[500]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <div className="flex gap-x-[1rem]">
              <h1 className="text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[20px] font-[500]">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[20px] font-[500]">
                <input
                  type="text"
                  id="interest"
                  name="interest"
                  placeholder="Interested In"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <h1 className="text-[#FFFFFF] border-b pb-4 border-[#F2F2F2] text-[20px] font-[500]">
              <input
                type="text"
                id="message"
                name="message"
                placeholder="Message"
                className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#FFFFFF] outline outline-0 focus:outline-0"
              />
            </h1>
            <div className="flex justify-end">
              <Link className="text-[#FFFFFF] bg-[#0A385A] transition-all duration-700 ease-in-out  hover:scale-95  w-[28%]  flex items-center  gap-3 mt-8 px-8  py-5 rounded-full font-[600] text-[17px]">
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
