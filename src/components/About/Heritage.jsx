import React from 'react'
import box from '../../assets/box.png';
import about1 from '../../assets/About2.jpg'

import { Link } from 'react-router-dom';
import { GoArrowRight } from "react-icons/go";

const Heritage = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%]  max-w-[1200px] py-8 my-20 mx-auto'>
                <div className='flex gap-44'>

                    <div className='w-[50%] mt-40'>
                        <div className='flex gap-4 items-center '>
                            <div className='w-3 h-3 bg-[#EF4030] '></div>
                            <h4 className='text-xl font-[600] text-[#0A385A]'>Mauritius&apos; Seafood Heritage</h4>
                        </div>
                        <h1 className='py-4 text-[50px] leading-tight font-[600] text-[#0A385A]'>Our Legacy
                            Beneath the Waves</h1>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>
                                Noulamer isn't just a seafood supplier; we are the guardians of Mauritius' marine legacy. For over four decades, we've voyaged beyond the shorelines to bring you the bounties of the sea. Our journey, beginning in 1974 with Mr. Ibrahim Hosany's vision, has been one of passion, a deep respect for the ocean, and a commitment to the community we serve.
                            </p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>Our approach intertwines traditional methods with innovative practices to sustainably harvest seafood without compromising the delicate marine ecosystem. At the heart of Noulamer is our desire to not just sell seafood but to educate and share the narratives behind each species we offer </p>

                        </div>
                        <Link className='text-[#FFFFFF] bg-[#0A385A] flex items-center gap-3 mt-8 px-8 w-[42%] py-5 rounded-full font-[600] text-[17px]'>Read About Us <GoArrowRight className='w-6 h-6' />
                        </Link>

                    </div>
                    <div className='relative w-[50%]'>
                        <div className='absolute right-[-70px]'>
                            <img src={box} alt="" width={210} height={190} className='object-cover' />
                        </div>
                        <div className='absolute top-16   '>
                            <img src={about1} alt="" width={520} height={830} className=' object-cover rounded-tr-3xl' />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Heritage