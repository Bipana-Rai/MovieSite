import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="lg:grid  lg:grid-cols-4  gap-2 animate-pulse lg:mt-[6%] lg:ms-[10%]  lg:px-12 px-5 py-4   ">
        <div className="lg:col-span-1 lg:h-100  h-[70vh] bg-gray-700  flex justify-center rounded-xl "></div>
        <div className="lg:col-span-3  w-full lg:px-10 animate-pulse   text-white  ">
          <div className="  bg-gray-700  h-20 lg:w-[80%] mt-3 rounded-xl ">  </div>
          <div className=" bg-gray-700  rounded-2xl  h-9 lg:w-[80%] w-[70%] lg:mt-15 mt-3 "></div>
          <div className=" bg-gray-700  rounded-2xl  h-9 lg:w-[80%] w-[70%] mt-3 "></div>
          <div className=" bg-gray-700  rounded-2xl  h-9 lg:w-[80%] w-[70%] mt-3 "></div>
          <div className=" bg-gray-700  rounded-2xl  h-9 lg:w-[80%] w-[70%] mt-3 "></div>
        
        </div>
      </div>
    </>
  );
};

export default Skeleton;
