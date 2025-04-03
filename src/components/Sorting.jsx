import React, { useEffect, useState } from "react";
import SearchData from "./SearchData";

const Sorting = ({ allData, selectedCategory, inView, ref, media,loading }) => {
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    const sortFunctions = {
      0: (a, b) => b.popularity - a.popularity,
      1: (a, b) => a.popularity - b.popularity,
      2: (a, b) => b.vote_average - a.vote_average,
      3: (a, b) => a.vote_average - b.vote_average,
    };

    let filteredMovies = [...allData];

    if (selectedCategory) {
      const sortId = Number(selectedCategory);
      filteredMovies = allData.filter((e) => e?.genre_ids?.includes(sortId));
      if (sortFunctions[sortId]) {
        filteredMovies = [...allData].sort(sortFunctions[sortId]);
      }
    }
    setFilteredData(filteredMovies);
  }, [selectedCategory, allData, inView]);

  return (
    <>
      <div>
      {filteredData.length === 0 ? (
          <p className="text-white text-center text-2xl lg:py-20">
            No data found...
          </p>
        ) : (
          <SearchData data={filteredData} media={media} />
        )}
        <button ref={ref}>Load more</button>
      </div>
    </>
  );
};

export default Sorting;
