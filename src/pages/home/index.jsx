import React from 'react'
import HeroBanner from './HeroBanner'
import Trending from './Trending'
import Popular from './Popular'
const index = () => {
  return (
    <div className='homePage'>
        <HeroBanner />
        <Trending />
        <Popular />
    </div>
  )
}

export default index