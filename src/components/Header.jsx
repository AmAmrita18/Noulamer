import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='w-full '>
      <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
       <div>
       <Link to="/">
          <img src={headerLogo} alt='Logo' className='py-4' width={200} height={100} loading='lazy' />
        </Link>
       </div>

        <nav>
          <ul className='flex gap-x-6 text-[20px] font-[700] text-[#FFFFFF] leading-6'>
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
        </nav>
      </div>
    </div>
  )
}

export default Header