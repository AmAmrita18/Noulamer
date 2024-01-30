import React from 'react'

const Pledge = () => {
    return (
        <div className='w-full'>
            <div className='w-[80%]  max-w-[1300px] py-8 my-20 mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex gap-4 items-center '>
                        <div className='w-2 h-2 bg-[#EF4030] '></div>
                        <h4 className='text-xl font-[600] text-[#0A385A]'>Mauritius&apos; Finest Sea Harvest</h4>
                    </div>
                    <h1 className='py-4 text-5xl font-[600] text-[#0A385A]'>Noulamer&apos;s Pledge:
                        Authenticity & Freshness Redefined</h1>
                    <div className='flex flex-col gap-y-4'>
                        <p className='text-[19px] font-[400] text-[#1E1E1E]'>
                            While our reputation may precede us, we believe the true Noulamer experience is best felt firsthand.
                            We warmly invite you to visit our renowned stall at Quatre Bornes market. Here, you can meet our dedicated team, witness the unrivaled freshness of our seafood, and understand why our customers keep coming back.
                        </p>
                        <p className='text-[19px] font-[400] text-[#1E1E1E]'>Our commitment to local sourcing and unmatched quality isn&apos;t just something we say; it&apos;s a promise we live by every day.</p>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pledge