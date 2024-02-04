import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] max-w-[1200px]  md:px-4 px-0 lg:py-40 md:py-28 py-10  mx-auto">
        <div className="flex rounded-2xl   shadow-2xl drop-shadow-2xl lg:flex-row md:flex-col flex-col">
          <div className="flex flex-col lg:w-[44%] w-full md:py-12 py-6  px-16 rounded-2xl bg-[#0A385A]">
            <div className="flex flex-col">
              <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] font-[600] leading-tight text-[#FFFFFF] ">
                Contact
              </h1>
              <p className="md:text-xl text-lg font-[400] py-2 text-[#C9C9C9]">
                Say something to start live chat!
              </p>
            </div>

            <div className="flex md:py-12 py-6 flex-col md:gap-y-8 gap-y-5">
              <div className="flex flex-row items-center gap-5">
                <div>
                  <BiSolidPhoneCall className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#FFFFFF] leading-tight">
                  +230 5123 4567
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <IoMailSharp className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#FFFFFF] leading-tight">
                  info@noulamer.shop
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <FaLocationDot className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#FFFFFF] leading-tight">
                  Stall Number 3, Quatre Bornes Market
                </p>
              </div>
            </div>
            <div className="md:w-[35%] w-full flex flex-row gap-5 md:pt-10 pt-0 md:pb-20 pb-4   items-center">
              <div className="w-7 bg-black cursor-pointer h-7 rounded-full flex items-center justify-center">
                <TiSocialFacebook className="text-[#FFFFFF] text-lg" />
              </div>
              <div className="w-7 h-7 bg-[#FFFFFF] cursor-pointer rounded-full flex items-center justify-center ">
                <IoLogoInstagram className="text-black text-xs" />
              </div>
            </div>
          </div>
          <div className="md:w-[56%] w-full flex flex-col  md:gap-y-10 gap-y-4 lg:py-32 md:py-24 py-12 px-12">
            <div className="flex md:flex-row flex-col gap-x-16 md:gap-y-0 gap-y-4">
              <h1 className="text-[#0A385A] lg:w-[190px] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  className="bg-transparent lg:w-[190px] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-80 outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#0A385A] lg:w-[190px] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="bg-transparent lg:w-[190px] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-80 outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <div className="flex md:flex-row flex-col gap-x-16 md:gap-y-0 gap-y-4">
              <h1 className="text-[#0A385A] lg:w-[190px] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="bg-transparent lg:w-[190px] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-80 outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#0A385A] lg:w-[190px] md:w-[230px] w-full border-b border-[#8D8D8D] md:text-[20px] text-[16px] font-[400]">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                  className="bg-transparent lg:w-[190px] md:w-[230px] w-full transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-80 outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <div>
              <h1 className="text-[#0A385A]  pb-4  md:text-[20px] text-[16px] font-[400]">
                Select Subject
              </h1>
              <div>
                <ul className="flex md:flex-row flex-col justify-between lg:gap-4 md:gap-10 gap-1">
                  <li className="text-[#0A385A] flex md:items-baseline item-center md:text-[16px] text-[14px] font-[400] ">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3"
                    />

                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                  <li className="text-[#0A385A] flex md:items-baseline item-center md:text-[16px] text-[14px] font-[400]">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3"
                    />
                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                  <li className="text-[#0A385A] flex md:items-baseline item-center md:text-[16px] text-[14px] font-[400]">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3"
                    />
                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                  <li className="text-[#0A385A] flex md:items-baseline item-center md:text-[16px] text-[14px] font-[400]">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3 "
                    />
                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:pr-20 pr-0">
              <h1 className="text-[#0A385A] border-b md:pb-4 pb-0 border-[#8D8D8D]  md:text-[20px] text-[16px] md:font-[500] font-[400]">
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="bg-transparent transition-all w-full  duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] placeholder:text-opacity-80 outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
