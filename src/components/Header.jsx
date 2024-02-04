import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center w-[80%] max-w-[1200px] md:px-4 px-0 py-8 mx-auto">
        <div>
          <Link to="/">
            <img
              src={headerLogo}
              alt="Logo"
              className="py-2 object-cover lg:w-[110px]  lg:h-[120px] md:w-[90px] md:h-[100px] w-[70px] h-[80px]"
              width={110}
              height={120}
              loading="lazy"

            />
          </Link>
        </div>

        <nav className="">
          <ul className="md:flex hidden lg:gap-x-14 md:gap-x-8  gap-4 md:text-[17px] text-[15px] font-[700] text-[#FFFFFF] leading-6">
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/">HOME</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/products">PRODUCTS</Link>
            </li>
            <li className="transition-all duration-700 ease-in-out  hover:scale-95 ">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
