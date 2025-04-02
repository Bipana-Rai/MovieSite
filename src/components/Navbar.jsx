import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate=useNavigate()
    const[show,setShow]=useState(false)
    const[value,setValue]=useState("")
    const handleSearch=()=>{
    show?setShow(false):setShow(true)
    }
  return (
    <header className="relative lg:px-12 px-5 mt-3 ">
      <nav className="bg-[#19182544] flex justify-between py-3 px-3 border-2  border-[#695222] text-white">
        <div className="text-3xl text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text font-bold">
         <p className="cursor-pointer" onClick={()=>navigate('/')}> Movix</p>
        </div>
        <div className="flex items-center gap-8 lg:text-xl">
          <p className="cursor-pointer" onClick={()=>navigate('/explore/movies')}>Movies</p>
          <p onClick={()=>navigate('/explore/tv')} className="cursor-pointer">Tvshows</p>
          <i className=" pe-5  fas fa-search cursor-pointer" onClick={handleSearch}></i>
        </div>
      </nav>
      <form className={` flex absolute w-full  ${show?"visible":"invisible"} z-40` } onSubmit={()=>navigate(`/search/${value}`)}>
      <input className="bg-white h-13 w-[84%] px-4 outline-0 " type="text" value={value} placeholder="search for movies and shows...." onChange={(e)=>setValue(e.target.value)} />
      <div className="flex  items-center justify-center bg-white w-[8%] text-2xl h-13 cursor-pointer" onClick={()=>setShow(false)}>X</div>
      </form>
    </header>
  );
};

export default Navbar;
