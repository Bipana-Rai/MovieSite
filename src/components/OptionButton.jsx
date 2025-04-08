import React, { useState } from "react";

export const OptionButton = ({
  data,
  setSelectedCategory,
  setSortBy,
  title,
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const togglePopover = () => setShowPopover(!showPopover);
  const handleChange = (e) => {
    setSortBy(e);
    setSelectedCategory(e); 
  };
  return (
    <div className="  col-span-1">
      <button
        onClick={togglePopover}
        className=" text-center outline-0 bg-blue-900 w-full   lg:w-[250px]  h-[35px] rounded-3xl px-3 cursor-pointer "
      >
        {" "}
        {title}
      </button>
      {showPopover && (
        <div
          id="my-popover"
          className="absolute rounded-3xl z-30 bg-white text-black lg:w-[250px]  text-center "
        >
          {data?.map((item) => (
            <p
              className="cursor-pointer"
              onClick={() =>handleChange(item.id)}
              key={item.id}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
