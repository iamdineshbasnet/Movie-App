import React from 'react'
import HeroBanner from './HeroBanner'
import Trending from './Trending'
const index = () => {
  return (
    <div className='homePage'>
        <HeroBanner />
        <Trending />
    </div>
  )
}

export default index