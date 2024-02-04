import React from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";

const Selection = () => {
  return (
    <div className="w-full">
      <div className="w-[80%]  max-w-[1200px] py-8 mx-auto">
        <div className="flex flex-col items-center justify-center md:mt-24 mt-8">
          <div className="flex gap-4 items-center ">
            <div className="w-3 h-3 bg-[#EF4030]"></div>
            <h4 className="text-xl font-[600] text-[#0A385A]">
              Our Seafood Selection
            </h4>
          </div>
          <h1 className="py-4 lg:text-[50px] md:text-[40px] text-[30px] text-center font-[600] lg:mx-32 mx-auto leading-tight text-[#0A385A] ">
            Taste the freshness of Mauritius' waters. Our select seafood brings
            the ocean's bounty straight to your table.
          </h1>
        </div>

        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:gap-y-20 md:gap-y-12 gap-y-6 lg:mt-40 md:mt-24 mt-10">
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product1}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full   h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">Trout</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product2}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">Tuna</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto  transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product3}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">
                Tilapia
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product3}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">
                Tilapia
              </h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product2}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">Trout</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product1}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">Tuna</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product2}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">Tuna</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product1}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">Trout</h1>
            </div>
          </div>
          <div className="relative cursor-pointer mx-auto transition-all duration-700 ease-in-out  hover:scale-95  hover:brightness-75">
            <img
              src={product3}
              width={390}
              height={480}
              className="object-cover"
              alt=""
              loading="lazy"
            />
            <div className="absolute bottom-0  w-full h-[100px] rounded-2xl bg-[#0A385A] flex items-center ">
              <h1 className="text-4xl text-[#FFFFFF] font-[600] ml-6">
                Tilapia
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selection;
