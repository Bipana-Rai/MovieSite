import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useInView } from "react-intersection-observer";
import Categories from "./Categories";
import Sorting from "./Sorting";
import Spinner from "../Loaders/Spinner";
function TvShows() {
  const { ref, inView } = useInView({ threshold: [0.5] });
  const [allData, setAllDAta] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data,loading } = useFetch(`/discover/tv?page=${page}`);
  useEffect(() => {
    if (inView && data) {
      setAllDAta((prevDAta) => [...prevDAta, ...data?.results]);
      setPage((prev) => prev + 1);
    }
  }, [inView, data]);

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
          media={"tv"}
          loading={loading}
         
        />
      )}
    </>
  );
}

export default TvShows;
