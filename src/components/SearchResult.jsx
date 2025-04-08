import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import SearchData from "./SearchData";
import Spinner from "../Loaders/Spinner";

function SearchResult() {
  const { query } = useParams();
  const { data, loading } = useFetch(`/search/multi?query=${query}&page=1`);
  const filteredData=data?.results?.filter((item)=>item.media_type==="tv" || item.media_type==="movie")
  return (
    <>
      <p className="text-white text-center text-3xl py-5">
        Search Results of "{query}"
      </p>
      {loading ? (
          <Spinner/>
      ) : (
        <SearchData data={filteredData}  fromSearch={true}/>
      )}
    </>
  );
}

export default SearchResult;
