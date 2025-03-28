import axios from "axios";
import { useEffect, useState } from "react";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2E5OGMwOWMxOGI1NGI5N2QxMWZhNjc1OTQ3ZTg3NCIsInN1YiI6IjY2M2NkMWVkOTE0ZDU3Mzk3OGEzYTVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QolpQb14AqeoTLTi82N57BCMVqe1ElKcMma52lecNqM"
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
const useFetch=(url,params={})=>{
  const[data,setData]=useState(null)
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState(null)
  useEffect(()=>{
  const fetchData=async()=>{
      setLoading(true)
      setError(null)
      try{
        const {data}=await axios.get(BASE_URL+url,{headers,params})
        setData(data)
      }
      catch(error){
        setError(error.message,"Error Fetching data")
      }
      finally{
        setLoading(false)
      }
  }
  fetchData()
},[url])
return {error,data,loading}
}
export default useFetch