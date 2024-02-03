import React from "react";

const Pledge = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] pt-8 py-2 lg:my-20 md:my-14 my-5 mx-auto">
        <div className="flex flex-col items-center justify-center lg:mt-32 md:mt-4 mt-1">
          <div className="flex gap-4 items-center ">
            <div className="w-3 h-3 bg-[#EF4030] "></div>
            <h4 className="text-xl font-[600] text-[#0A385A]">
              Why choose Noulamer
            </h4>
          </div>
          <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px]  text-center font-[600] leading-tight text-[#0A385A] ">
            Noulamer&apos;s Pledge: <br />
            Authenticity & Freshness Redefined
          </h1>
          <div className="flex flex-col mt-6 gap-y-4">
            <p className="lg:text-[19px] md:text-[18px] text-[15px] text-center font-[400] md:mx-[7.75rem] mx-0 text-[#1E1E1E] leading-tight">
              While our reputation may precede us, we believe the true Noulamer
              experience is best felt firsthand.
              <br />
              We warmly invite you to visit our renowned stall at Quatre Bornes
              market. Here, you can meet our dedicated team, witness the
              unrivaled freshness of our seafood, and understand why our
              customers keep coming back.
            </p>
            <p className="lg:text-[19px] md:text-[18px] text-[15px] text-center font-[400] text-[#1E1E1E] leading-tight">
              Our commitment to local sourcing and unmatched quality isn&apos;t
              just something we say; it&apos;s a promise we live by every day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pledge;
