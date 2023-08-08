// this component is a card items for the image
import React, { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Card({item}) {
  return (
    <div>
       <div className='m-4 container grid justify-center items-center md:grid-cols-4 gap-4'>
          <div className='flex flex-col justify-center align-middle items-center rounded-md border w-fit overflow-hidden shadow-xl'>
          {/* <img src={item?.urls.full} alt="burger" height={1000} width={1000} className='object-cover md:h-60 w-96' loading='lazy'/> */}
          <LazyLoadImage
            className='object-cover md:h-60 h-48 w-96'
            alt={item?.alt_description}
            height={192}
            effect="blur"
            src={item?.urls.full}
            width={384}
            
          />
          </div>
          </div>
    </div>
  )
}
