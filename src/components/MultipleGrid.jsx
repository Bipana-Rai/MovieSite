import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch'
import Grid from './Grid';


function MultipleGrid() {
  const [isDay, setIsDay] = useState("day")
  const[ismovie,setIsMovie]=useState("movie")
  const[ismovie1,setIsMovie1]=useState("movie")

  const { error, data, loading } = useFetch(`/trending/all/${isDay}`);
  const { error:Perror, data:Pdata,loading: Ploading } = useFetch(`/${ismovie}/popular`);
  const { error:Rerror, data:Rdata,loading: Rloading } = useFetch(`/${ismovie1}/top_rated`);
  
  useEffect(() => {
    console.log(data)
  }, [data])

  

  return (
    <>
      <Grid data={data} error={error} loading={loading}  title={"Trending"} t1={"day"} t2={"week"} h1={"DAY"} h2={"WEEK"} isLeft={isDay} setIsLeft={setIsDay}/>
      <Grid data={Pdata} error={Perror} loading={Ploading}  title={"Popular"} t1={"movie"} t2={"tv"} h1={"MOVIES"} h2={"TV SHOWS"} isLeft={ismovie} setIsLeft={setIsMovie}/>
      <Grid data={Rdata} error={Rerror} loading={Rloading}  title={"Top Rated"} t1={"movie"} t2={"tv"} h1={"MOVIES"} h2={"TV SHOWS"} isLeft={ismovie1} setIsLeft={setIsMovie1} />
    </>
  )
}




export default MultipleGrid