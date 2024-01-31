import React from 'react'
import box from '../../assets/box.png';
import home2 from '../../assets/home2.jpg'
import { FaCheck } from "react-icons/fa6";


const Process = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%]  max-w-[1300px] py-8 mx-auto'>
                <div className='flex gap-16'>
                    <div className='relative w-[45%]'>
                        <div className='absolute left-[-65px] bottom-[-105px]'>
                            <img src={box} alt="" width={210} height={190} className='object-cover' />
                        </div>
                        <div className='absolute top-16  rounded-tl-[48px] '>
                            <img src={home2} alt="" width={460} height={680} className=' object-cover  rounded-tl-3xl' />
                        </div>
                    </div>
                    <div className='w-[55%] mt-32'>
                        <div className='flex gap-4 items-center '>
                            <div className='w-3 h-3 bg-[#EF4030] '></div>
                            <h4 className='text-xl font-[600] text-[#0A385A]'>Harvested with Care, Served with Pride</h4>
                        </div>
                        <h1 className='py-4 text-[50px] leading-tight font-[600] text-[#0A385A]'>Our Sea-to-Service Process</h1>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>
                                Step into the world of Noulamer and witness the meticulous journey of our seafood. From the pristine waters along the South Coast, through our state-of-the-art processing facilities, to your plate, we ensure every scale and shell meets our rigorous standards.
                            </p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>Our facilities are designed to maintain the ocean&apos;s freshness, featuring:</p>
                        </div>
                        <ul className='flex gap-x-8 mt-8'>
                            <div className='flex flex-col gap-y-4 justify-between'>
                                <div className='flex  items-center  gap-4'>
                                    <div className='w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]'><FaCheck className='w-[11px] h-[11px]  text-[#FFFFFF]' />
                                    </div>
                                    <li className='text-[19px] font-[600] text-[#000A2D] leading-tight'>Ice-cold Storage</li>
                                </div>
                                <div className='flex items-center  gap-4'>
                                    <div className='w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]'><FaCheck className='w-[11px] h-[11px]  text-[#FFFFFF]' />
                                    </div>
                                    <li className='text-[19px] font-[600] text-[#000A2D] leading-tight'>Sustainable Packing Areas</li>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-4 justify-between '>
                                <div className='flex items-center  gap-4' >
                                    <div className='w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]'><FaCheck className='w-[11px] h-[11px]  text-[#FFFFFF]' />
                                    </div>
                                    <li className='text-[19px] font-[600] text-[#000A2D] leading-tight'>Quality Control Stations</li>
                                </div>

                                <div className='flex items-center  gap-4'>
                                    <div className='w-[14px] h-[14px] rounded-full flex items-center bg-[#EF4030]'><FaCheck className='w-[11px] h-[11px]  text-[#FFFFFF]' />
                                    </div>
                                    <li className='text-[19px] font-[600] text-[#000A2D] leading-tight'>Community-Focused Market Stall</li>
                                </div>
                            </div>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process