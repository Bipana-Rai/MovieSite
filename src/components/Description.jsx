import React, { useEffect } from "react";
import Ratings from "./Ratings";
import Plot from "./Plot";
import DetailBackground from "./DetailBackground";
import img from "./images/default_poster.jpg";

export const Description = ({ data, cast }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <>
      <DetailBackground data={data} />
      <div className="lg:grid lg:grid-cols-4 gap-2 lg:mt-[6%] lg:ms-[10%]  lg:px-12 px-5 py-4   ">
        <div className="lg:col-span-1  flex justify-center  ">
          <img
            className="object-cover l h-full w-full   lg:rounded-2xl   "
            src={data.poster_path ? `${BASE_URL}${data.poster_path}` : img}
            alt=""
          />
        </div>
        <div className="lg:col-span-3  lg:px-10  text-white ">
          <Ratings data={data} />
          <Plot data={data} cast={cast} />
        </div>
      </div>
    </>
  );
};
