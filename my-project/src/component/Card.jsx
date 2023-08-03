import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Card() {
    const [photos, setPhotos] = useState({})
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos?page=1")
        .then(res=>{
            console.log(res)
        })
    },[])
  return (
    <div>
        Card
    </div>
  )
}
