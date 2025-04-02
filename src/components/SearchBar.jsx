import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${value}`);
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <div className="  flex lg:w-[50vw] w-[70vw] h-10">
          <input
            className=" bg-white outline-0 rounded-l-xl text-black w-full px-3 text-[15px] "
            type="text"
            value={value}
            placeholder="Search for movies and shows..."
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="  bg-gradient-to-r from-yellow-500 to-orange-500 rounded-r-xl px-4 "
            onClick={handleSearch}
          >
            search
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
