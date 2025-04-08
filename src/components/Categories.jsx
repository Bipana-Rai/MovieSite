import React, { useEffect, useState } from "react";
import useFetch from "../utils/useFetch";
import { OptionButton } from "./OptionButton";
const Categories = ({ setSelectedCategory, media, setSortBy }) => {
  const { data: gdata } = useFetch(`/genre/${media}/list`);

  const sort = [
    { id: "popularity.desc  ", name: "Popularity Descending" },
    { id: "popularity.asc   ", name: "Popularity Ascending" },
    { id: "vote_average.desc", name: "Rating Descending" },
    { id: "vote_average.asc", name: "Rating Ascending" },
  ];
  useEffect(() => {
    setSelectedCategory(null);
    setSortBy(null);
  }, [media]);

  return (
    <>
      <div className="grid lg:grid-cols-3 text-white lg:px-12 px-5 py-8">
        <div className="lg:col-span-1 ">
          <p className="md:text-3xl text-xl font-bold">Explore Movies</p>
        </div>
        <div className="lg:flex grid gap-4 col-span-2  lg:h-10 lg:justify-self-end mt-4 lg:my-0 ">
          <OptionButton
            data={gdata?.genres}
            setSelectedCategory={setSelectedCategory}
            title={"Select genres"}
          />
          <OptionButton title={"Sort by"} data={sort} setSortBy={setSortBy} />
        </div>
      </div>
    </>
  );
};

export default Categories;
