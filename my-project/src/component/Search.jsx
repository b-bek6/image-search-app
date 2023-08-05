import React, { useState } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useDispatch, useSelector } from 'react-redux'
import  {setSearch} from '../redux/slice/searchSlice'

export default function Search() {
  const dispatch = useDispatch();
  let search = useSelector(store => {return store.search?.value})
  const [term, setTerm] = useState('')
  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch(setSearch(term.toLowerCase()))
  }
  return (
    <div>
            <form
              onSubmit={handleSubmit}
              className='container flex gap-3 bg-blue-500 h-[50px] mt-4 items-center rounded-md'
            >
            <VscSearch 
            type='submit'
            className='text-3xl text-white'
            />
            <input type="text"
              value={term}
              onChange={(e)=>{
                setTerm(e.target.value)
                console.log(search)
              }}
             className=' bg-gradient-to-r from-blue-400 to-blue-500 w-[100%] h-[100%] text-white px-4'
             />
            </form>
    </div>
  )
}
