import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import ctaImage from '/Cta.png'

const CtaAbout = () => {
    return (
        <div className='w-full h-screen ' style={{ backgroundImage: `url('${ctaImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover' }}>
            <div className='w-[80%] h-full  mx-auto max-w-[1300px] flex flex-col justify-center items-center'>
                <h1 className='text-7xl leading-tight mt-24 text-[#FFFFFF] font-[600]'>View our Products</h1>

                <Link className='text-[#FFFFFF] bg-[#0A385A] flex items-center gap-3 mt-8 px-8  py-5 rounded-full font-[600] text-[17px]'>Explore Now <GoArrowRight className='w-6 h-6' />
                </Link>
            </div>
        </div>)
}

export default CtaAbout