import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useInView } from "react-intersection-observer";
import Categories from "./Categories";
import Sorting from "./Sorting";
import Spinner from "../Loaders/Spinner";
import { useParams } from "react-router-dom";

const MoviesList = () => {
  const { query } = useParams();
  const { ref, inView } = useInView({ threshold: [0.5] });
  const [allData, setAlldata] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const[sortBy,setSortBy]=useState(null)
  const { data, loading } = useFetch(`/discover/${query}?page=${page}&sort_by=${sortBy}`);
  useEffect(() => {
    if (data && inView) {
      setAlldata((prevData) => [...prevData, ...data?.results]);
      setPage((prev) => prev + 1);
    }
  }, [data,inView,sortBy]);
  useEffect(() => {
    setAlldata([]);
    setPage(1);
  }, [query,sortBy]);
  
  
  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} setSortBy={setSortBy} media={query} />
      {loading && allData.length === 0 ? (
        <Spinner />
      ) : (
        <Sorting
          allData={allData}
          selectedCategory={selectedCategory}
          sortBy={sortBy}
          inView={inView}
          ref={ref}
          media={query}
          fromSearch={false}
          page={page}
        />
      )}
    </>
  );
};

export default MoviesList;
