import React from "react";

const DetailBackground = ({ data }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <div className=" ">
        <img
          className=" object-cover h-screen w-screen absolute  top-0 -z-40  "
          src={`${BASE_URL}${data.backdrop_path}`}
          alt=""
        />
        <div className="shadow-[0px_4px_10px_rgba(0,0,0,0.8)] bg-[#020202d7] h-screen w-screen absolute  top-0 -z-40 "></div>
      </div>
    </>
  );
};

export default DetailBackground;
