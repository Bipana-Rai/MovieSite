import React, { useState } from "react";
import useFetch from "../utils/useFetch";
const Categories = ({  setSelectedCategory }) => {
  const { data: gdata } = useFetch(`/genre/movie/list`);
  const sortBy = [
    "Popularity Descending",
    "Popularity Ascending",
    "Rating Descending",
    "Rating Ascending",
  ];
  const handleChange = (e) => {
    setSelectedCategory(Number(e.target.value))
  };
 
  return (
    <>
      <div className="grid lg:grid-cols-3 text-white lg:px-12 px-5 py-8">
        <div className="lg:col-span-1 ">
          <p className="md:text-3xl text-xl font-bold">Explore Movies</p>
        </div>
        <div className="lg:flex gap-4 lg:col-span-2  lg:h-10 lg:justify-self-end mt-4 lg:my-0 ">
          <div className=" lg:col-span-1">
            {/* <button popovertarget="my-popover">Open Popover</button>
            <div popover="manual" id="my-popover">
              Greetings, one and all!
            </div> */}

            <select
              className="hide-scrollbar  text-center outline-0 bg-blue-900   lg:w-[250px] w-[200px] h-[35px] rounded-3xl px-3  "
              onChange={handleChange}
            >
              <option value="" hidden>
                Select genres
              </option>
              {gdata?.genres?.map((item) => (
                <option key={item.id} value={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          <select className="  text-center outline-0 bg-blue-900   lg:w-[250px] w-[200px] h-[35px] rounded-3xl   ">
            <option value="" hidden>
              Sort by
            </option>
            {sortBy.map((item) => {
              <option  value="action">{item}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Categories;
