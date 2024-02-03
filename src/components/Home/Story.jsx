import React from "react";
import box from "../../assets/box.png";
import home1 from "../../assets/home1.jpg";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";

const Story = (button) => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 lg:my-20 md:my-10 my-5 mx-auto">
        <div className="flex md:flex-row flex-col lg:gap-44 md:gap-10 gap-10">
          <div className=" w-[50%]">
            <div className="relative top-16  rounded-tl-[48px] ">
              <div className="absolute -z-10 left-[-65px] top-[-65px]">
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
                src={home1}
                alt=""
                width={520}
                height={830}
                className=" object-cover rounded-tl-3xl"
                loading="lazy"
              />
              </div>
            </div>
          </div>
          <div className="w-[50%] lg:mt-40  md:mt-8 mt-3">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#EF4030] "></div>
              <h4 className="text-xl font-[600] text-[#0A385A]">
                Mauritius&apos; Finest Sea Harvest
              </h4>
            </div>
            <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] leading-none font-[600] text-[#0A385A]">
              Sea to Table Story
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                Choosing the right source for your seafood is crucial for taste
                and quality. At Noulamer, we&apos;re not just a business;
                we&apos;re a tradition, deeply rooted in Mauritius since 1974.
                Our selection ranges across the freshest fish, shrimp, and more,
                all locally sourced.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                We&apos;ve nurtured strong relationships with local fishermen
                along the South Coast, ensuring that every product in our stall
                and in major retailers reflects our commitment to excellence.{" "}
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                Dive into our story and discover why every bite is a testament
                to our heritage and dedication.
              </p>
            </div>

            <Link className="text-[#FFFFFF] w-[220px] bg-[#0A385A] transition-all duration-700 ease-in-out hover:scale-95  flex items-center gap-3 mt-8 px-8 py-5 rounded-full font-[600] text-[17px]">
              Read About Us <GoArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
