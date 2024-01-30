import React from 'react'
import { Link } from 'react-router-dom'
import headerLogo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='w-full '>
      <div className='flex justify-between items-center w-[80%] max-w-[1300px] px-4 py-8 mx-auto'>
       <div>
       <Link to="/">
          <img src={headerLogo} alt='Logo' className='py-2 object-cover' width={110} height={45} loading='lazy' />
        </Link>
       </div>

        <nav>
          <ul className='flex gap-x-14 text-[17px] font-[700] text-[#FFFFFF] leading-6'>
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