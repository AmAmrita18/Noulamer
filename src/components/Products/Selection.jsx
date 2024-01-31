import React from 'react'
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';

const Selection = () => {
  return (
    <div className='w-full'>
            <div className='w-[80%]  max-w-[1200px] pt-8 py-8 mx-auto'>
                <div className='flex flex-col items-center justify-center mt-24'>
                    <div className='flex gap-4 items-center '>
                        <div className='w-3 h-3 bg-[#EF4030] '></div>
                        <h4 className='text-xl font-[600] text-[#0A385A]'>Our Seafood Selection</h4>
                    </div>
                    <h1 className='py-4 text-[50px] text-center font-[600] mx-32 leading-tight text-[#0A385A] '>Taste the freshness of Mauritius' waters. Our select seafood brings the ocean's bounty straight to your table.</h1>
                  
                </div>
                <div className='grid grid-cols-3 gap-4 gap-y-20 mt-40'>
                    <div className='relative'>
                        <img src={product1} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Trout</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product2} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Tuna</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product3} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Tilapia</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product3} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Tilapia</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product2} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Trout</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product1} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Tuna</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product2} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Tuna</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product1} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Trout</h1>
                        </div>
                    </div>
                    <div  className='relative'>
                        <img src={product3} width={380} height={480} alt="" />
                        <div className='absolute bottom-0  w-[380px] h-[100px] rounded-2xl bg-[#0A385A] flex items-center '>
                            <h1 className='text-4xl text-[#FFFFFF] font-[600] ml-6'>Tilapia</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Selection