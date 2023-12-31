// Searching component, this is used whenever the search has a value

import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchItems() {
  const [photo, setPhoto] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const search = useSelector(store => {return store.search?.value})
  // for pagination, totalPage will have the value of total page of the result, 
  const [totalPage, setTotalPage] = useState()


// if search value is change this api is called 
  useEffect(()=>{
    axios.get(`https://api.unsplash.com/search/photos?query=${search}&client_id=csgwFB-xx73FwyFcV7Qmb9yqDHIyng4cCORmZpqYz2E`)
    .then(res=>{
      console.log(res);
      setLoading(false)
      setPage(1);
      // response from the api will be stored in setPhoto
      setPhoto(res.data.results)
      // total no of page
      setTotalPage(res.data.total_pages)
    })
  },[search])

// if search value is not change but user clicks load more.. value of page is incremented and this api will be called with search value and page value
    useEffect(()=>{
    axios.get(`https://api.unsplash.com/search/photos?query=${search}?page=${page}&client_id=csgwFB-xx73FwyFcV7Qmb9yqDHIyng4cCORmZpqYz2E`)
    .then(res=>{
      setLoading(false)
      setPhoto(prev=> res.data.results)
    })
  },[page])


  return (
    <>
     <div>
        <div className='m-4 text-3xl'>
          Showing Results For "<span className='capitalize'>{search}</span>" page {page} of {totalPage}
        </div>
        <div className='m-4 container justify-center grid md:grid-cols-4 gap-4'>
          {
            photo.map(item => {
              return <div className=''>
                <Card item={item} />
              </div>
            })
          }
      </div>
      {/* Loading Handeling */}
      {
        loading ?
        <div>Loading..</div>
        :
        <div className='flex justify-center align-middle items-center gap-4'>
          <button className='rounded-none bg-blue-400 p-2 w-[80px] text-white'
            onClick={()=>{
              if(page==1){
                setPage(totalPage)
              } else {
                setPage(prev=> prev-1);
              }
            }}
          >Pre</button>
          <span className='font-bold'>{page} of {totalPage}</span>
          <button className='rounded-none bg-blue-400 p-2 w-[80px] text-white'
            onClick={()=>{
              if(page>0&& page<totalPage){
                setPage((prev)=> prev+1)
              } else if(page==totalPage) {
                setPage(1);
              }
            }}
          >Next</button>
        </div>
      }
     </div>
    </>
  )
}

