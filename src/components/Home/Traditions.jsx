import React from "react";
import box from "../../assets/box.png";
import home3 from "../../assets/home3.jpg";

const Traditions = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] pt-8 pb-24 lg:my-20 md:my-10 my-5 mx-auto">
        <div className="flex md:flex-row flex-col-reverse lg:gap-44 md:gap-8 gap-4">
          <div className="md:w-[50%] w-full md:px-0 px-4 lg:mt-28 md:mt-4 mt-0">
            <div className="flex gap-4 items-center ">
              <div className="w-3 h-3 bg-[#EF4030] "></div>
              <h4 className="text-xl font-[600] text-[#0A385A]">
                Noulamer&apos;s Signature Selection
              </h4>
            </div>
            <h1 className="py-4  lg:text-[50px] md:text-[40px] text-[30px]  leading-none lg:pr-10 md:pr-0 pr-0 font-[600] text-[#0A385A]">
              A Modern Twist on Ocean Traditions
            </h1>
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                At Noulamer, we blend time-honored techniques with contemporary
                tastes to provide you with an unparalleled seafood experience.
                Our seasoned experts are continuously honing their craft to
                handpick the finest offerings from the sea. It&apos;s more than
                a purchase; it&apos;s a personal journey into the heart of
                Mauritian culinary heritage.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                Within our marketplace, we&apos;re more than vendors; we&apos;re
                storytellers, custodians of a rich maritime legacy. Our stall is
                a treasure trove of oceanic gems, waiting to be part of your
                next culinary adventure. And for those who value sustainability,
                our eco-conscious packaging ensures that your choice at Noulamer
                is one you can feel good about.
              </p>
              <p className="lg:text-[19px] md:text-[18px] text-[15px] font-[400] text-[#1E1E1E] leading-tight">
                Embrace the true taste of Mauritius. Let Noulamer be the gateway
                to creating unforgettable meals and memories, one dish at a
                time.&#x22;
              </p>
            </div>
          </div>
          <div className=" md:w-[50%]  w-full md:px-0 px-4 md:mb-0 mb-14">
            <div className="relative rounded-tl-[48px] ">
                <img
                  src={home3}
                  alt=""
                  width={565}
                  height={830}
                  className=" object-cover rounded-br-3xl"
                  loading="lazy"
                />
               <div className="absolute -z-10 md:right-[-65px] md:bottom-[-65px]  right-[-35px] bottom-[-35px]">
                <img
                  src={box}
                  alt=""
                  width={210}
                  height={190}
                  className="object-cover lg:w-[210px] lg:h-[190px] md:w-[190px] md:h-[165px] w-[180px] h-[150px] rounded-3xl"
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

export default Traditions;
