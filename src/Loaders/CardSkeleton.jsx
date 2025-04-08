import React from "react";

const CardSkeleton = () => {
  return (
    <>
      <div className="lg:px-12 px-5 ">
        <div className="grid grid-cols-3 lg:grid-cols-5  py-3 mt-2 whitespace-nowrap lg:gap-4 gap-1 ">
          {Array(25)
            .fill()
            .map((__, i) => (
              <div className="lg:h-[355px]  lg:w-[250px]  px-3  animate-pulse shadow-[0px_1px_8px_0px_#4a5568]">
                <div className=" lg:h-65 h-30 bg-gray-700 lg:rounded-2xl rounded-l lg:mt-3 mt-1 "></div>
                <div className="lg:h-7 h-5  bg-gray-700 lg:rounded-3xl rounded-l lg:mt-2 mt-1 "></div>
                <div className="lg:h-7 h-5 lg:mt-3 mb-1 bg-gray-700 rounded-l lg:rounded-3xl mt-1"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;
