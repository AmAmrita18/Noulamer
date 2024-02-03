import React from "react";
import box from "../../assets/box.png";
import home2 from "../../assets/home2.jpg";
import { FaCheck } from "react-icons/fa6";

const Process = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-16 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-16 md:gap-6 gap-3 ">
          <div className=" md:w-[40%] w-full md:px-0 px-4">
            <div className="relative rounded-bl-[48px] ">
              <div className="absolute -z-10 left-[-65px] bottom-[-65px]">
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
                  src={home2}
                  alt=""
                  width={460}
                  height={700}
                  className=" object-cover rounded-bl-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-full px-4 lg:ml-8 md:ml-4 ml-0 lg:mt-20 md:mt-4 mt-1">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#EF4030] "></div>
              <h4 className="text-xl font-[600] leading-none text-[#0A385A]">
                Harvested with Care, Served with Pride
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-tight font-[600] text-[#0A385A]">
              Our Sea-to-Service Process
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#1E1E1E] leading-tight">
                Step into the world of Noulamer and witness the meticulous
                journey of our seafood. From the pristine waters along the South
                Coast, through our state-of-the-art processing facilities, to
                your plate, we ensure every scale and shell meets our rigorous
                standards.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px]  font-[400] text-[#1E1E1E] leading-tight">
                Our facilities are designed to maintain the ocean&apos;s
                freshness, featuring:
              </p>
            </div>
            <ul className="flex lg:gap-x-8 md:gap-x-4 gap-x-1 lg:mt-8 md:mt-4 mt-2">
              <div className="flex flex-col gap-y-4 justify-between">
                <div className="flex  items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#FFFFFF]" />
                  </div>
                  <li className="lg:text-[19px] md:text-[18px] text-[15px]  font-[600] text-[#000A2D] leading-tight">
                    Ice-cold Storage
                  </li>
                </div>
                <div className="flex items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#FFFFFF]" />
                  </div>
                  <li className="lg:text-[19px] md:text-[18px] text-[15px]  font-[600] text-[#000A2D] leading-tight">
                    Sustainable Packing Areas
                  </li>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 justify-between ">
                <div className="flex items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#FFFFFF]" />
                  </div>
                  <li className="lg:text-[19px] md:text-[18px] text-[15px]  font-[600] text-[#000A2D] leading-tight">
                    Quality Control Stations
                  </li>
                </div>

                <div className="flex items-center  gap-4">
                  <div className="w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]">
                    <FaCheck className="w-[11px] h-[11px]  text-[#FFFFFF]" />
                  </div>
                  <li className="lg:text-[19px] md:text-[18px] text-[15px]  font-[600] text-[#000A2D] leading-tight">
                    Community-Focused Market Stall
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
