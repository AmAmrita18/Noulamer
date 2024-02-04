import React from "react";
import box from "../../assets/box.png";
import home4 from "../../assets/home4.png";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

import { IoLocationOutline } from "react-icons/io5";

const GetInTouch = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] pt-8 pb-24 md:my-12 my-5 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-28 md:gap-12 gap-3">
          <div className=" md:w-[44%] w-full md:px-0 px-6 md:mb-0 mb-8">
            <div className="relative  top-16  rounded-tl-[48px] ">
              <div className="absolute -z-10 md:left-[-65px] md:bottom-[-65px] left-[-50px] bottom-[-50px]">
                <img
                  src={box}
                  alt=""
                  width={210}
                  height={190}
                  className="object-cover lg:w-[210px] lg:h-[190px] md:w-[190px] md:h-[165px] w-[180px] h-[150px] rounded-3xl"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={home4}
                  alt=""
                  width={620}
                  height={840}
                  className=" object-cover  rounded-tl-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[56%] w-full md:px-0 px-6 mt-24">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#EF4030] "></div>
              <h4 className="text-xl font-[600] text-[#0A385A]">
                Let&apos;s Talk Seafood
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px]  leading-none font-[600] text-[#0A385A]">
              Get in touch with us
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] pr-8 text-[#1E1E1E] lg:mb-14 md:mb-6 mb-3 leading-tight">
                Dive deeper into our world of fresh, local seafood. Connect with
                us for personalized service and discover the catch that sets
                Noulamer apart.
              </p>
            </div>

            <div className="flex flex-col gap-y-8 ">
              <div className="flex flex-row items-center gap-4">
                <div className="w-14 h-14 cursor-pointer bg-[#F4F4F4] flex items-center justify-center rounded-full">
                  <IoCallOutline className="text-[#EF4030] text-2xl" />
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-[17px] font-[400] text-[#7D7D7D] leading-tight">
                    Have any questions? Call us at:
                  </h2>
                  <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#0A385A] leading-tight">
                    +230 5123 4567
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="w-14 h-14 cursor-pointer bg-[#F4F4F4] flex items-center justify-center rounded-full">
                  <IoMailOutline className="text-[#EF4030] text-2xl" />
                </div>
                <div className="flex flex-col ">
                  <h2 className="text-[17px] font-[400] text-[#7D7D7D] leading-tight">
                    Email us your queries:
                  </h2>
                  <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#0A385A] leading-tight">
                    info@noulamer.shop
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="w-14 h-14 cursor-pointer bg-[#F4F4F4] flex items-center justify-center rounded-full">
                  <IoLocationOutline className="text-[#EF4030] text-2xl" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[17px] font-[400] text-[#7D7D7D] leading-tight">
                    Visit our stall:
                  </h2>
                  <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#0A385A] leading-tight">
                    Stall Number 3, Quatre Bornes Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
