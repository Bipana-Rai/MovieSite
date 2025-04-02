import React from "react";
import { replace, useNavigate } from "react-router-dom";
import useFetch from "../utils/useFetch";
const BASE_URL = "https://image.tmdb.org/t/p/w500";

function Card({ data, fromsearch, media }) {
  const navigate = useNavigate();

  const { data: gdata } = useFetch(`/genre/${media}/list`);
  const filteredGenres = gdata?.genres?.filter((g) =>
    data.genre_ids.includes(g.id)
  );

  return (
    <>
      <div
        className={`relative cursor-pointer ${fromsearch && "overflow-hidden"}`}
        key={data.id}
        onClick={() => navigate(`/${media}/${data?.id}`, { replace: true })}
      >
        <div
          className={`overflow-hidden ${
            !fromsearch ? "w-40 sm:w-55" : "w-full"
          }  bg-[#695222] p-1 `}
        >
          <div className="h-10 w-10 lg:h-13 lg:w-13 flex items-center justify-center  rounded-[50%] absolute bg-orange-400  border-3 border-[#695222]   right-0 text-white">
            {data.vote_average.toFixed(1)}
          </div>
          <img
            className=" object-cover rounded-2xl"
            src={
              data.poster_path
                ? `${BASE_URL}${data.poster_path}`
                : "https://image.tmdb.org/t/p/w500/5m1w1L6wnKXhGTKhNhCBVeY4Io5.jpg"
            }
            alt=""
          />
        </div>
        <div className="   text-white w-40  sm:w-55  overflow-hidden ">
          <p className="lg:text-center">{data.original_title  || data.title ||  data.name}</p>
          <div className="lg:flex items-center justify-center  ">
            {filteredGenres?.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index < filteredGenres.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
