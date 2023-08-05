import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

export default function SearchItems() {
  const [photo, setPhoto] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const search = useSelector(store => {return store.search?.value})



  useEffect(()=>{
    axios.get(`https://api.unsplash.com/search/photos?query=${search}&client_id=csgwFB-xx73FwyFcV7Qmb9yqDHIyng4cCORmZpqYz2E`)
    .then(res=>{
      console.log(page);
      setLoading(false)
      setPhoto(res.data.results)
    })
  },[search])


    useEffect(()=>{
    axios.get(`https://api.unsplash.com/search/photos?query=${search}?page=${page}&client_id=csgwFB-xx73FwyFcV7Qmb9yqDHIyng4cCORmZpqYz2E`)
    .then(res=>{
      setLoading(false)
      setPhoto(prev=> [...prev, ...res.data.results])
    })
  },[page])


  return (
    <>
     <div>
        <div className='m-4 container grid md:grid-cols-4 gap-4'>
          {
            photo.map(item => {
              return <div className=''>
                <Card item={item} />
              </div>
            })
          }
      </div>
      {
        loading ?
        <div>Loading..</div>
        :
        <button 
            onClick={()=>
            setPage(prev => prev+1)
            }
            >View More..</button>
      }
     </div>
    </>
  )
}

