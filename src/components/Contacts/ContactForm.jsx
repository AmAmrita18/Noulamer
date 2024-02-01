import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";



const ContactForm = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] max-w-[1200px]  f#0A385A px-4 py-40  mx-auto">
        <div className="flex flex-row">
          <div className="flex flex-col w-[44%] py-12  px-16 rounded-2xl bg-[#0A385A]">
            <div className="flex flex-col">
              <h1 className="py-4 text-[50px] font-[600] leading-tight text-[#FFFFFF] ">
                Contact
              </h1>
              <p className="text-xl font-[400] py-2 text-[#C9C9C9]">
                Say something to start live chat!
              </p>
            </div>

            <div className="flex py-12 flex-col gap-y-8">
              <div className="flex flex-row items-center gap-5">
                <div>
                  <BiSolidPhoneCall className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="text-[19px] font-[400] text-[#FFFFFF] leading-tight">
                  +230 5123 4567
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <IoMailSharp className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="text-[19px] font-[400] text-[#FFFFFF] leading-tight">
                  info@noulamer.shop
                </p>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <FaLocationDot className="text-[#FFFFFF] cursor-pointer text-xl" />
                </div>
                <p className="text-[19px] font-[400] text-[#FFFFFF] leading-tight">
                  Stall Number 3, Quatre Bornes Market
                </p>
              </div>
            </div>
            <div className="w-[35%] flex flex-row gap-5 pt-10 pb-20   items-center">
              <div className="w-7 bg-black cursor-pointer h-7 rounded-full flex items-center justify-center">
                <TiSocialFacebook className="text-[#FFFFFF] text-lg" />
              </div>
              <div className="w-7 h-7 bg-[#FFFFFF] cursor-pointer rounded-full flex items-center justify-center ">
                <IoLogoInstagram className="text-black text-xs" />
              </div>
            </div>
          </div>
          <div className="w-[56%] flex flex-col gap-y-10 py-32 px-12">
            <div className="flex gap-x-16">
              <h1 className="text-[#0A385A] w-[250px] border-b border-[#8D8D8D] text-[20px] font-[400]">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#0A385A] w-[250px] border-b border-[#8D8D8D] text-[20px] font-[400]">
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <div className="flex gap-x-16">
              <h1 className="text-[#0A385A] w-[250px] border-b border-[#8D8D8D] text-[20px] font-[400]">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] outline outline-0 focus:outline-0"
                />
              </h1>
              <h1 className="text-[#0A385A] w-[250px] border-b border-[#8D8D8D] text-[20px] font-[400]">
                <input
                  type="tel"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] outline outline-0 focus:outline-0"
                />
              </h1>
            </div>
            <div>
              <h1 className="text-[#0A385A]  pb-4  text-[20px] font-[400]">
                Select Subject
              </h1>
              <div>
                <ul className="flex flex-row justify-between gap-4">
                  <li className="text-[#0A385A] flex items-baseline text-[16px] font-[400] ">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3 "
                    />
                  
                    <label htmlFor="generalinquiry" >General Inquiry</label>
                    
                  </li>
                  <li className="text-[#0A385A] flex items-baseline text-[16px] font-[400]">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3"
                    />
                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                  <li className="text-[#0A385A] flex items-baseline text-[16px] font-[400]">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3"
                    />
                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                  <li className="text-[#0A385A] flex items-baseline text-[16px] font-[400]">
                    <input
                      type="radio"
                      id="generalinquiry"
                      name="generalinquiry"
                      className="mr-3"
                    />
                    <label htmlFor="generalinquiry">General Inquiry</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pr-20">
              <h1 className="text-[#0A385A] border-b pb-4 border-[#8D8D8D]  text-[20px] font-[500]">
                <input
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  className="bg-transparent transition-all duration-700 ease-in-out  hover:scale-95 placeholder:text-[#0A385A] outline outline-0 focus:outline-0"
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
