import React, { useEffect } from "react";
import Ratings from "./Ratings";
import Plot from "./Plot";
import DetailBackground from "./DetailBackground";

export const Description = ({ data,cast }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  

  return (
    <>
      <DetailBackground data={data} />
      <div className="lg:grid lg:grid-cols-4 gap-2 lg:mt-[6%]  lg:px-12 px-5 py-4 ">
        <div className="lg:col-span-1  flex justify-center">
          <img
            className="object-cover h-full w-full   lg:rounded-2xl  "
            src={`${BASE_URL}${data.poster_path}`}
            alt=""
          />
        </div>
        <div className="lg:col-span-3   text-white lg:px-10">
          <Ratings data={data} />
          <Plot data={data} cast= {cast}/>
        </div>
      </div>
    </>
  );
};
