import React from 'react'
import box from '../../assets/box.png';
import home3 from '../../assets/home3.jpg'


const Traditions = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%]  max-w-[1200px] pt-8 pb-24 my-20 mx-auto'>
                <div className='flex gap-44'>

                    <div className='w-[50%] mt-28'>
                        <div className='flex gap-4 items-center '>
                            <div className='w-3 h-3 bg-[#EF4030] '></div>
                            <h4 className='text-xl font-[600] text-[#0A385A]'>Noulamer&apos;s Signature Selection</h4>
                        </div>
                        <h1 className='py-4 text-[50px] leading-none pr-10 font-[600] text-[#0A385A]'>A Modern Twist
                            on Ocean Traditions</h1>
                        <div className='flex flex-col gap-y-4'>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>
                                At Noulamer, we blend time-honored techniques with contemporary tastes to provide you with an unparalleled seafood experience. Our seasoned experts are continuously honing their craft to handpick the finest offerings from the sea. It&apos;s more than a purchase; it&apos;s a personal journey into the heart of Mauritian culinary heritage.
                            </p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>Within our marketplace, we&apos;re more than vendors; we&apos;re storytellers, custodians of a rich maritime legacy. Our stall is a treasure trove of oceanic gems, waiting to be part of your next culinary adventure. And for those who value sustainability, our eco-conscious packaging ensures that your choice at Noulamer is one you can feel good about.</p>
                            <p className='text-[19px] font-[400] text-[#1E1E1E] leading-tight'>Embrace the true taste of Mauritius. Let Noulamer be the gateway to creating unforgettable meals and memories, one dish at a time.&#x22;</p>
                        </div>

                    </div>
                    <div className='relative w-[50%]'>
                        <div className='absolute right-[-55px] bottom-[-160px]'>
                            <img src={box} alt="" width={210} height={190} className='object-cover' />
                        </div>
                        <div className='absolute top-6  rounded-tl-[48px] '>
                            <img src={home3} alt="" width={500} height={830} className=' object-cover rounded-br-3xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Traditions