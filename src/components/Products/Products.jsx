import React from 'react'
import Hero from '../Hero'

import GetInTouch from '../Home/GetInTouch';
import Connect from '../Home/Connect';
import Selection from './Selection';

const description1 = `Noulamer's Story: Sea,`;
const description2 = `Savoir-faire, and Sustainability`;
const button = {title: `Explore Now`, url: `/about`};
const heroImage = `/heroAbout.png`


const Products = () => {
  return (
    <div className='w-full'>
      <Hero description1={description1} description2={description2} button={button} heroImage={heroImage}/>
      <Selection/>
      <GetInTouch/>
      <Connect/>
    </div>
  )
}

export default Products