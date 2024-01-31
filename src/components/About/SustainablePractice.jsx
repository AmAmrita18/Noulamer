import React from 'react'
import box from '../../assets/box.png';
import about2 from '../../assets/About1.jpg'

const SustainablePractice = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%]  max-w-[1200px] py-8 mb-40 my-20 mx-auto'>
                <div className='flex gap-44'>
                <div className='relative w-[50%]'>
                        <div className='absolute left-[-65px]'>
                            <img src={box} alt="" width={210} height={190} className='object-cover' />
                        </div>
                        <div className='absolute top-16   '>
                            <img src={about2} alt="" width={520} height={830} className=' object-cover rounded-tl-3xl' />
                        </div>
                    </div>
                    <div className='w-[50%] mt-40'>
                        <div className='flex gap-4 items-center '>
                            <div className='w-3 h-3 bg-[#EF4030] '></div>
                            <h4 className='text-xl font-[600] text-[#0A385A]'>Our Sustainable Practice</h4>
                        </div>
                        <h1 className='py-4 text-[50px] leading-tight font-[600] text-[#0A385A]'>Harvesting with 
Integrity and Care</h1>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>
                            Our ethos extends beyond mere trade; it's about imparting the stories as vibrant as the catch on ice. Our commitment to meticulous sourcing has cultivated strong relationships with esteemed retailers like Super U Belle Rose and Super U Flacq, reinforcing our trusted presence for over six years.
                            </p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>In today's world, where the provenance of produce is as savored as its flavor, Noulamer stands out. We're educators, conservationists, and a family, united in continuing the tradition of responsible fishing and celebrating the joy of fresh, flavorful seafood.</p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>Experience our passion at Stall Number 3, Quatre Bornes Market, where the freshness of our fish, the richness of our stories, and the spirit of Mauritian hospitality invite you to partake in our legacy.</p>

                        </div>
                       

                    </div>
                   
                </div>


            </div>
        </div>)
}

export default SustainablePractice