import React, { useEffect } from "react";
import { replace, useNavigate } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import img from "/default_poster.jpg";
const BASE_URL = "https://image.tmdb.org/t/p/w500";

function Card({ data, fromsearch, media }) {
  const navigate = useNavigate();
  const { data: gdata } = useFetch(`/genre/${media}/list`);
  const filteredGenres = gdata?.genres?.filter((g) =>
    data?.genre_ids?.includes(g.id)
  );

  return (
    <>
      <div
        className={`relative cursor-pointer   ${
          fromsearch && "overflow-hidden"
        }`}
        key={data.id}
        onClick={() => navigate(`/${media}/${data?.id}`, { replace: true })}
      >
        <div
          className={`overflow-hidden ${
            !fromsearch ? "w-40 h-60 sm:w-55 sm:h-80 " : "w-full h-40 sm:h-80 "
          }  lg:bg-[#2222224f] bg-[#ccbc294f] p-1 `}
        >
          <div className="h-7 w-7 lg:h-13 lg:w-13 text-[8px] lg:text-[15px] flex items-center justify-center  rounded-[50%] absolute lg:bottom-12  right-0  bottom-10 bg-orange-600 text-white">
            {data?.vote_average?.toFixed(1)}
          </div>
          <img
            className={`object-cover  ${
              !fromsearch ? "h-full " : "h-full w-full"
            } `}
            src={data.poster_path ? `${BASE_URL}${data.poster_path}` : img}
            alt=""
          />
        </div>
        <div
          className={`text-white  lg:py-1 lg:text-[15px] text-[13px]  overflow-hidden bg-[#22222234] shadow-[0px_1px_8px_0px_#4a5568] ${
            !fromsearch ? "w-40  sm:w-55 " : " w-full"
          } `}
        >
          <p className="lg:text-center font-bold lg:ps-2">
            {data.original_title || data.title || data.name}
          </p>
          <div className="lg:flex items-center justify-center ">
            {filteredGenres?.length > 0 ? (
              filteredGenres?.slice(0, 2).map((genre, index) => (
                <span key={genre.id}>
                  {genre?.name ? genre.name : "Unknown Genre"}
                  {index === 0 && filteredGenres.length > 1 ? "," : ""}
                </span>
              ))
            ) : (
              <span>Unknown Genre</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
