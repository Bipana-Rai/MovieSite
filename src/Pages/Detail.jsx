import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'

const Detail = () => {
    const {id} = useParams()
    const { error, data, loading } = useFetch(`/movie/${id}`)
    console.log(data)
  return (
    <>
    <div className='h-[100vh] '>
        <img className='h-full w-full' src="https://image.tmdb.org/t/p/original/x0pkoGlwWdkzRxgQioD3cUG0awu.jpg " alt="" />
    </div>
    
    <div>Detail {JSON.stringify(data)}</div>
    </>
  )
}

export default Detail