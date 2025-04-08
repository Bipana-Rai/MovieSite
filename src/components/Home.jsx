import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import useFetch from "../utils/useFetch";

const Home = () => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  const { error, data, loading } = useFetch("/trending/all/week");
  const [bgImage, setBgImage] = useState([]);

  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setBgImage(`${BASE_URL}${data.results[randomIndex].backdrop_path}`);
    } else {
      console.error("Backdrop path not found");
    }
  }, [data]);

  return (
    <>
      <section className=" lg:px-12 px-5  ">
        <div className="  relative lg:h-[90vh] h-[60vh] ">
          <img className=" object-cover w-full h-full " src={bgImage} alt="" />
          <div className=" inset-0 text-white text-center absolute flex flex-col justify-center items-center bg-[#00000079]  h-full ">
            <div className="w-80 md:w-full">
              <p className="lg:text-3xl text-xl">Welcome</p>
              <p className="lg:text-xl text-s">
                Millions of movies, TV shows and people to discover. Explore
                now.
              </p>
            </div>
            <SearchBar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
