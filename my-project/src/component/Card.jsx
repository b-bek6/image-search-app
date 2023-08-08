// For each Items this component will be called

import React, { useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Card({item}) {
  return (
    <div>
          <div className='flex flex-col justify-center align-middle items-center rounded-md border w-fit overflow-hidden  drop-shadow-lg'>
          <img src={item?.urls.full} alt="burger" height={100} width={100} className='object-cover h-48 w-96' loading='lazy'/>
          <div>{item?.name}</div>
          </div>
    </div>
  )
}
