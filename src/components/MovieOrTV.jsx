import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { useInView } from "react-intersection-observer";
import Categories from "./Categories";
import { useParams } from "react-router-dom";
import SearchData from "./SearchData";
import CardSkeleton from "../Loaders/CardSkeleton";

const MoviesList = () => {
  const { query } = useParams();
  const { ref, inView } = useInView({ threshold: [0.5] });
  const [allData, setAlldata] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const sortParam = sortBy ? `&sort_by=${sortBy}` : "";
  const genreParam = selectedCategory ? `&with_genres=${selectedCategory}` : "";
  const { data, loading } = useFetch(
    `/discover/${query}?page=${page}${sortParam}${genreParam}`
  );

  useEffect(() => {
    if (data && inView) {
      setAlldata((prevData) => [...prevData, ...data?.results]);
      setPage((prev) => prev + 1);
    }
  }, [data, sortBy,loading]);
  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView]);

  useEffect(() => {
    setAlldata([]);
    setPage(1);
  }, [query, sortBy, selectedCategory]);

  return (
    <>
      <Categories
        setSelectedCategory={setSelectedCategory}
        setSortBy={setSortBy}
        media={query}
      />
      {loading && allData?.length === 0 ? (
        <CardSkeleton />
      ) : (
        <div>
          <SearchData data={allData} media={query} />
          <button ref={ref}>Load more</button>
        </div>
      )}
    </>
  );
};

export default MoviesList;
