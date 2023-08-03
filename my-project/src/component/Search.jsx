import React from 'react'
import { VscSearch } from 'react-icons/vsc'

export default function Search() {
  return (
    <div>
            <div className='container flex gap-3 bg-blue-500 h-[50px] mt-4 items-center rounded-md'>
            <VscSearch 
            className='text-3xl text-white'
            />
            <input type="text" className=' bg-gradient-to-r from-blue-400 to-blue-500 w-[100%] h-[100%] text-white px-4'/>
            </div>
    </div>
  )
}
