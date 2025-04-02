import React, { use, useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import SearchData from "./SearchData";
import { useInView } from "react-intersection-observer";
import Categories from "./Categories";

const MoviesList = () => {
  const { ref, inView } = useInView({ threshold: [0.5] });
  const [allData, setAlldata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data } = useFetch(`/discover/movie?page=${page}`);

  useEffect(() => {
    if (data && inView) {
      setAlldata((prevData) => [...prevData, ...data?.results]);
      setPage((prev) => prev + 1);
    }
  }, [data,inView]);

  useEffect(() => {
    if(selectedCategory ){
      const selectedMovie=allData?.filter((e)=> e?.genre_ids?.includes(Number(selectedCategory)));
      setFilteredData(selectedMovie)
    }
    else{
      setFilteredData(allData)
    }  
  }, [selectedCategory,allData]);

  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />
      <div>
        {filteredData.length===0?(<p>No movies found</p>):
          (<SearchData data={filteredData} media={"movie"} />)}
        <button ref={ref}>Load more</button>
      </div>
    </>
  );
};

export default MoviesList;
