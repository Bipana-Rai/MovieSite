import React, { useEffect, useState } from "react";
import SearchData from "./SearchData";
const Sorting = ({
  allData,
  selectedCategory,
  sortBy,
  inView,
  ref,
  media,
  loading,
}) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let filteredMovies = [...allData];
    if (selectedCategory) {
      const sortId = Number(selectedCategory);
      filteredMovies = allData.filter((e) => e?.genre_ids?.includes(sortId));
    }
      if (sortBy) {
        filteredMovies = [...allData];
      }
    setFilteredData(filteredMovies);
  }, [selectedCategory, allData,sortBy,inView]);

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
