import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useInView } from "react-intersection-observer";
import SearchData from "./SearchData";
import Categories from "./Categories";

function TvShows() {
  const { ref, inView } = useInView({ threshold: [0.5] });
  const [allData, setAllDAta] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { data } = useFetch(`/discover/tv?page=${page}`);
  useEffect(() => {
    if (inView && data) {
      setAllDAta((prevDAta) => [...prevDAta, ...data?.results]);
      setPage((prev) => prev + 1);
    }
  }, [inView, data]);

  useEffect(() => {
    if (selectedCategory) {
      const selectedMovie = allData?.filter((e) =>
        e?.genre_ids?.includes(Number(selectedCategory))
      );
      setFilteredData(selectedMovie);
    } else {
      setFilteredData(allData);
    }
  }, [selectedCategory, allData]);
  return (
    <>
      <Categories setSelectedCategory={setSelectedCategory} />
      <div>
        {filteredData.length === 0 ? (
          <p className="text-white text-center text-3xl py-20 font-bold ">No Tv Shows found.....</p>
        ) : (
          <SearchData data={filteredData} media={"tv"} />
        )}
        <button ref={ref}></button>
      </div>
    </>
  );
}

export default TvShows;
