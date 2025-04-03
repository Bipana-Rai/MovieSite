import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useInView } from "react-intersection-observer";
import Categories from "./Categories";
import Sorting from "./Sorting";
import Spinner from "../Loaders/Spinner";

const MoviesList = () => {
  const { ref, inView } = useInView({ threshold: [0.5] });
  const [allData, setAlldata] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data, loading } = useFetch(`/discover/movie?page=${page}`);
  useEffect(() => {
    if (data && inView) {
      setAlldata((prevData) => [...prevData, ...data?.results]);
      setPage((prev) => prev + 1);
    }
  }, [data, inView]);

  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />
      {loading && allData.length===0? (
       <Spinner/>
      ) : (
        <Sorting
          allData={allData}
          selectedCategory={selectedCategory}
          inView={inView}
          ref={ref}
          media={"movie"}
        />
      )}
    </>
  );
};

export default MoviesList;
