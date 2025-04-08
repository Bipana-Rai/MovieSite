import React from "react";
import img from "../images/default_profile.jpg";
function Topcast({ cast }) {
  const BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      {/* {cast?.results?.length > 0 && ( */}
        <div className="lg:px-12 px-5 py-4  ">
          <p className="text-white lg:text-4xl text-2xl">Top Cast</p>
          <div className="flex  overflow-x-auto  gap-4 hide-scrollbar pt-5   ">
            {cast?.cast?.map((cast) => (
              <div className="  ">
                <div className="lg:h-40 lg:w-40 h-30 w-30  overflow-hidden  border-3 border-[#03193a]  rounded-[50%]">
                  <img
                    className="object-cover h-full w-full"
                    src={
                      cast.profile_path
                        ? `${BASE_URL}${cast.profile_path}`
                        : img
                    }
                    alt=""
                  />
                </div>
                <div className="text-center lg:text-[16px] text-[12px] py-2 ">
                  <p className="text-white  text-wrap font-bold ">
                    {cast.original_name}
                  </p>
                  <p className="text-gray-500 ">{cast.known_for_department}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* )} */}
    </>
  );
}

export default Topcast;
