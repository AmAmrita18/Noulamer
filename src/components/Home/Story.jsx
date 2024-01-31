import React from 'react'
import box from '../../assets/box.png';
import home1 from '../../assets/home1.jpg'
import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const Story = (button) => {
    return (
        <div className='w-full'>
            <div className='w-[80%]  max-w-[1200px] py-8 my-20 mx-auto'>
                <div className='flex gap-44'>
                    <div className='relative w-[50%]'>
                        <div className='absolute left-[-65px]'>
                            <img src={box} alt="" width={210} height={190} className='object-cover' />
                        </div>
                        <div className='absolute top-16  rounded-tl-[48px] '>
                            <img src={home1} alt="" width={520} height={830} className=' object-cover rounded-tl-3xl' />
                        </div>
                    </div>
                    <div className='w-[50%] mt-40'>
                        <div className='flex gap-4 items-center '>
                            <div className='w-3 h-3 bg-[#EF4030] '></div>
                            <h4 className='text-xl font-[600] text-[#0A385A]'>Mauritius&apos; Finest Sea Harvest</h4>
                        </div>
                        <h1 className='py-4 text-[50px] leading-tight font-[600] text-[#0A385A]'>Sea to Table Story</h1>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>
                                Choosing the right source for your seafood is crucial for taste and quality. At Noulamer, we&apos;re not just a business; we&apos;re a tradition, deeply rooted in Mauritius since 1974. Our selection ranges across the freshest fish, shrimp, and more, all locally sourced.
                            </p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>We&apos;ve nurtured strong relationships with local fishermen along the South Coast, ensuring that every product in our stall and in major retailers reflects our commitment to excellence. </p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>Dive into our story and discover why every bite is a testament to our heritage and dedication.</p>
                        </div>
                        <Link className='text-[#FFFFFF] bg-[#0A385A] flex items-center gap-3 mt-8 px-8 w-[42%] py-5 rounded-full font-[600] text-[17px]'>Read About Us <GoArrowRight className='w-6 h-6' />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Story