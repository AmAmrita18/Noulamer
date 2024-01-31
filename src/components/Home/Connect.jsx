import React from 'react'
import connectImg from '/connect.png';
const Connect = () => {
    return (
        <div className='w-full h-[570px]' style={{ backgroundImage: `url('${connectImg}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover' }}>
            <div className='w-full flex '>
                <div className='w-[80%] h-full px-4 py-32 gap-64  mx-auto max-w-[1300px] flex '>
                    <div className='w-[45%] flex flex-col justify-center gap-6'>
                        <h1 className='text-5xl leading-tight  text-[#FFFFFF] font-[700]'>Connect with Noulamer</h1>
                        <p className='text-[#FFFFFF] text-[24px] font-[400] leading-relaxed'>We&apos;re eager to hear from you. Fill out the form below and let&apos;s set sail on your seafood journey.</p>
                    </div>
                    <div className='w-[55%] flex flex-col gap-y-10' >
                        <div className='flex gap-x-10'>
                            <h1 className='text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[19px] font-[500]'>Your Name</h1>
                            <h1 className='text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[20px] font-[500]'>Your Email</h1>
                        </div>
                        <div className='flex gap-x-10'>
                            <h1 className='text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[19px] font-[500]'>Phone Number</h1>
                            <h1 className='text-[#FFFFFF] w-[250px] border-b border-[#F2F2F2] text-[19px] font-[500]'>Interested In</h1>
                        </div>
                        <h1 className='text-[#FFFFFF] border-b pb-4 border-[#F2F2F2] text-[19px] font-[500]'>Message</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect