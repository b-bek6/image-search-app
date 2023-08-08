// initial items are called inside this components 

import Card from './Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Items(){
  const [photo, setPhoto] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`https://api.unsplash.com/photos?page=${page}&client_id=csgwFB-xx73FwyFcV7Qmb9yqDHIyng4cCORmZpqYz2E`)
      .then(res=>{
        console.log(res.data);
        setLoading(false)
        setPhoto((prev) => [...prev, ...res.data])
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [page]);

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
          onClick={() => setPage(prev => prev + 1)}
        >View More..</button>
      }
     </div>
    </>
  )
}
