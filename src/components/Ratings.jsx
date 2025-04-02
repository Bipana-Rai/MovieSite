import React from "react";

const Ratings = ({ data }) => {

  return (
    <>
      <div className="  bg-[#f6f5fc2a] rounded-2xl  py-4 lg:w-[80%]  ">
        <p className=" lg:text-3xl   text-2xl  font-[Helvetica] lg:ps-10 ">
          {data.original_name || data.title || data.original_title || data.name}
        </p>
        <div className="flex lg:ps-10 pt-3  pb-2 lg:gap-9 gap-4">
          <button className="bg-yellow-500 lg:px-7  px-5 py-2  rounded-3xl">
            {data.genres[0].name}
          </button>

          <button className="bg-orange-600 lg:px-7  px-5 py-2  rounded-3xl">
            {data.runtime}min
          </button>
          <button className="bg-blue-600 lg:px-7 px-5 py-2  rounded-3xl">
            {data.vote_average.toFixed(1)}
            <i className="fas fa-star ps-2 text-yellow-500 "></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Ratings;
