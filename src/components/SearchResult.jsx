import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import useFetch from '../utils/useFetch'
import SearchData from './SearchData'

function SearchResult() {
    const {query}=useParams()
    const{data}=useFetch(`/search/movie?query=${query}&page=1`)
  return (
   <>
   <p className='text-white text-center text-3xl py-5'>Search Results of "{query}"</p>
    <SearchData data={data?.results}/>
   </>
  )
}

export default SearchResult