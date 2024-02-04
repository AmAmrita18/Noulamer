/* eslint-disable react/no-unescaped-entities */
import React from "react";
import box from "../../assets/box.png";
import about1 from "../../assets/About2.jpg";

import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Heritage = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 lg:my-20 md:my-10 my-5 mx-auto">
        <div className="flex md:flex-row flex-col-reverse lg:gap-44 md:gap-10 gap-10">
          <div className="md:w-[50%] w-full lg:mt-40 md:mt-4 mt-0 md:px-0 px-4">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#EF4030] "></div>
              <h4 className="text-xl font-[600] text-[#0A385A]">
                Mauritius&apos; Seafood Heritage
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-none pr-16 font-[600] text-[#0A385A]">
              Our Legacy Beneath the Waves
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                Noulamer isn't just a seafood supplier; we are the guardians of
                Mauritius' marine legacy. For over four decades, we've voyaged
                beyond the shorelines to bring you the bounties of the sea. Our
                journey, beginning in 1974 with Mr. Ibrahim Hosany's vision, has
                been one of passion, a deep respect for the ocean, and a
                commitment to the community we serve.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                Our approach intertwines traditional methods with innovative
                practices to sustainably harvest seafood without compromising
                the delicate marine ecosystem. At the heart of Noulamer is our
                desire to not just sell seafood but to educate and share the
                narratives behind each species we offer{" "}
              </p>
            </div>
            <Link className="text-[#FFFFFF] bg-[#0A385A] transition-all duration-700 ease-in-out hover:scale-95  flex items-center w-[220px] gap-3 mt-8 px-8 py-5 rounded-full font-[600] md:text-[17px] text-[15px]">
              Read About Us <GoArrowRight className="w-6 h-6" />
            </Link>
          </div>
          <div className=" md:w-[50%] w-full md:px-0 px-6 md:mb-0 mb-14">
            <div className="relative top-16   ">
              <div className="absolute -z-10 md:top-[-65px] md:right-[-65px] top-[-50px] right-[-50px]">
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
                  src={about1}
                  alt=""
                  width={520}
                  height={830}
                  className=" object-cover rounded-tr-3xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;
