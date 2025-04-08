import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const movie = "movie";
  const tv = "tv";
  const handleSearch = () => {
    show ? setShow(false) : setShow(true);
  };
  return (
    <header className="relative lg:px-12 px-5 mt-3 ">
      <nav className="bg-[#6464642c] flex justify-between py-3 px-3 text-white shadow-[0px_1px_8px_0px_#4a5568]">
        <div className="lg:text-3xl text-xl  text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-bold">
          <p className="cursor-pointer" onClick={() => navigate("/")}>
            {" "}
            WatchVerse
          </p>
        </div>
        <div className="flex items-center lg:gap-8 gap-4 lg:text-xl">
          <p
            className="cursor-pointer"
            onClick={() => navigate(`/explore/${movie}`)}
          >
            Movies
          </p>
          <p
            onClick={() => navigate(`/explore/${tv}`)}
            className="cursor-pointer"
          >
            Tvshows
          </p>
          <i
            className=" pe-5  fas fa-search cursor-pointer"
            onClick={handleSearch}
          ></i>
        </div>
      </nav>
      <form
        className={` flex absolute w-full   ${
          show ? "visible" : "invisible"
        } z-40`}
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search/${value}`);
          setShow(false);
        }}
      >
        <input
          className="bg-white h-13 lg:w-[84%] w-[81%] px-4 outline-0 "
          type="text"
          value={value}
          placeholder="search for movies and shows...."
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className="flex  items-center justify-center bg-white lg:w-[8%] w-[7%] text-2xl h-13 cursor-pointer pe-3"
          onClick={() => setShow(false)}
        >
          X
        </div>
      </form>
    </header>
  );
};

export default Navbar;
