import React from "react";

const Copyright = () => {
  return (
    <div className="w-full bg-[#0A385A]">
      <div className="w-[80%] max-w-[1200px] px-4 py-8  mx-auto">
        <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-2 justify-between">
          <h1 className="text-[#FFFFFF] text-center lg:text-[19px] md:text-[18px] text-[15px] font-[400]">
            © Noulamer 2024 – All Rights Reserved.
          </h1>
          <h1 className="text-[#FFFFFF] text-center lg:text-[19px] md:text-[18px] text-[15px] font-[400]">
            Built With Passion by{" "}
            <span className="border-b ">The Meraki Studio</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
