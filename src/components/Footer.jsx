import React from 'react'
import { Link } from 'react-router-dom'
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
  return (
    <div className='w-full '>
      <div className='w-[80%] max-w-[1300px] px-4 py-8 mx-auto'>
        <div className='flex justify-between border-b border-[#212828] py-20 items-center  '>
          <ul className='flex gap-x-14 text-[17px] font-[500] text-[#0A385A] leading-6'>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/">ABOUT US</Link>
            </li>
            <li>
              <Link to="/">PRODUCTS</Link>
            </li>
            <li>
              <Link to="/">CONTACT</Link>
            </li>
          </ul>
          <h1 className='text-[#0A385A] tracking-[0.3em]  text-[20px] font-[600]'>NOULAMER</h1>

        </div>

        <div className='flex py-16 mb-2'>
          <div className='w-[35%] flex flex-row gap-5 items-center'>
            <div className='w-7 h-7 rounded-full flex items-center justify-center border border-[#EF4030]'><TiSocialFacebook className='text-[#EF4030] text-lg' />
            </div>
            <div className='w-7 h-7 rounded-full flex items-center justify-center border border-[#EF4030]'><IoLogoInstagram className='text-[#EF4030] text-xs' />
            </div>
          </div>

          <div className='w-[65%] flex justify-end border-l border-[#212828]'>
          <p className='text-[19px] w-[70%] text-end font-[400] text-[#0A385A] leading-tight'>From the Mauritian waters to your table: A family legacy of sustainable fishing and the freshest seafood for over 40 years.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer