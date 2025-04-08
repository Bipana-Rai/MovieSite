import React, { useEffect, useState } from "react";

export const OptionButton = ({
  data,
  setSelectedCategory,
  setSortBy,
  title,
}) => {
  const [showPopover, setShowPopover] = useState(false);
  const togglePopover = () => setShowPopover(!showPopover);
  const [newTitle, setNewTitle] = useState(title);
  const handleChange = (e) => {
    setSortBy ? setSortBy(e) : setSelectedCategory(e);

    setShowPopover(false);
  };

  return (
    <>
      <div className="  col-span-1">
        <button
          onClick={togglePopover}
          className="relative text-center outline-0 bg-blue-900 w-full   lg:w-[250px]  h-[35px] rounded-3xl px-3 cursor-pointer "
        >
          {" "}
          {newTitle}
          <i
            className=" absolute fa fa-chevron-down right-9 lg:right-5 top-[28%]"
            aria-hidden="true"
          ></i>
        </button>
        {showPopover && (
          <div
            id="my-popover"
            className="absolute rounded-3xl z-30 bg-white text-black lg:w-[250px] w-[92%] mt-2  text-center "
          >
            {data?.map((item) => (
              <p
                className="cursor-pointer pb-1"
                onClick={() => {
                  handleChange(item.id), setNewTitle(item.name);
                }}
                key={item.id}
              >
                {item.name}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
