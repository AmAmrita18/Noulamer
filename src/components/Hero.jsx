import React from 'react'
import Header from './Header'

const Hero = ({description1, description2, button, heroImage}) => {
  return (
    <div className='w-full h-screen' style={{ backgroundImage: `url('${heroImage}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', objectFit: 'cover'}}>
        <div className='w-full'>
            <Header/>
            <div className='w-11/12 h-full mx-auto max-w-[1160px] flex flex-col items-center justify-center '>
                {/* <h1 className='text-[96px] font-[600]'>{description1}</h1>
                <h1 className='text-[96px] font-[600]'>{description2}</h1> */}
            </div>
        </div>
    </div>
  )
}

export default Hero