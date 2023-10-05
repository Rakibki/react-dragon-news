import React, { useEffect, useState } from 'react'
import New from '../../components/New'

const MainCenter = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
     fetch('news.json')
     .then((res) => res.json())
     .then((data) => setNews(data))
    }, [])
  return (
    <div>
        <h1 className='font-semibold text-xl'>Dragon News Home</h1>
        <div>
            {
               news.map((item) => {
                return <New item={item} key={item._id}  />
               }) 
            }
        </div>
    </div>
  )
}

export default MainCenter