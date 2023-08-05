// this component is a card items for the image
import React, { useEffect } from 'react'
export default function Card({item}) {
  return (
    <div>
          <div className='flex flex-col justify-center align-middle items-center rounded-md border w-fit overflow-hidden shadow-xl'>
          <img src={item?.urls.full} alt="burger" height={100} width={100} className='object-cover h-48 w-96' loading='lazy'/>
          <div>{item?.name}</div>
          </div>
    </div>
  )
}
