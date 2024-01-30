import React from 'react'
import Hero from '../Hero'

const description1 = `Experience Ocean Freshness,`;
const description2 = `Handpicked by Noulamer`;
const button = {title: `Explore Now` , url: `#`};
const heroImage = `/hero.png`
const Home = () => {
  return (
    <div className='w-full'>
      <Hero description1={description1} description2={description2} button={button} heroImage={heroImage}/>

    </div>
  )
}

export default Home