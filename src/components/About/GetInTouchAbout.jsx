import React from 'react'
import box from '../../assets/box.png';
import home4 from '../../assets/home4.png'
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

import { IoLocationOutline } from "react-icons/io5";
const GetInTouchAbout = () => {
  return (
    <div className='w-full'>
            <div className='w-[80%]  max-w-[1200px] pt-8 pb-24 my-12 mx-auto'>
                <div className='flex gap-16'>
                    <div className='relative w-[55%]'>
                        <div className='absolute left-[-65px] bottom-[-80px]'>
                            <img src={box} alt="" width={210} height={190} className='object-cover' />
                        </div>
                        <div className='absolute top-16  rounded-tl-[48px] '>
                            <img src={home4} alt="" width={620} height={840} className=' object-cover  rounded-tl-3xl' />
                        </div>
                    </div>
                    <div className='w-[45%] mt-24'>
                        <div className='flex gap-4 items-center '>
                            <div className='w-3 h-3 bg-[#EF4030] '></div>
                            <h4 className='text-xl font-[600] text-[#0A385A]'>Let&apos;s Talk Seafood</h4>
                        </div>
                        <h1 className='py-4 text-[50px] leading-tight font-[600] text-[#0A385A]'>Get in touch with us</h1>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] mb-14 leading-tight'>
                                Dive deeper into our world of fresh, local seafood.
                                Connect with us for personalized service and discover the catch that sets Noulamer apart.
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-8 '>
                            <div className='flex flex-row items-center gap-4'>
                                <div className='w-14 h-14 bg-[#F4F4F4] flex items-center justify-center rounded-full'><IoCallOutline className='text-[#EF4030] text-2xl' /></div>
                                <div className='flex flex-col '>
                                    <h2 className='text-[17px] font-[400] text-[#7D7D7D] leading-tight'>Have any questions? Call us at:</h2>
                                    <p className='text-[19px] font-[400] text-[#0A385A] leading-tight'>+230 5123 4567</p>
                                </div>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                                <div className='w-14 h-14 bg-[#F4F4F4] flex items-center justify-center rounded-full'><IoMailOutline className='text-[#EF4030] text-2xl' /></div>
                                <div className='flex flex-col '>
                                    <h2 className='text-[17px] font-[400] text-[#7D7D7D] leading-tight'>Email us your queries:</h2>
                                    <p className='text-[19px] font-[400] text-[#0A385A] leading-tight'>info@noulamer.shop</p>
                                </div>
                            </div>
                            <div className='flex flex-row items-center gap-4'>
                                <div className='w-14 h-14 bg-[#F4F4F4] flex items-center justify-center rounded-full'><IoLocationOutline className='text-[#EF4030] text-2xl' /></div>
                                <div className='flex flex-col'>
                                    <h2 className='text-[17px] font-[400] text-[#7D7D7D] leading-tight'>Visit our stall:</h2>
                                    <p className='text-[19px] font-[400] text-[#0A385A] leading-tight'>Stall Number 3, Quatre Bornes Market</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
  )
}

export default GetInTouchAbout