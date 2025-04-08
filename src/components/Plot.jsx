import React from "react";
import Creatercard from "./Cards/Creatercard";

const Plot = ({ data, cast }) => {
  const director = cast?.crew
    ?.filter(
      (c) =>
        c.known_for_department === "Directing" ||
        c.known_for_department === "Sound"
    )
    .slice(0, 4);
  const writer = cast?.crew
    ?.filter(
      (c) =>
        c.known_for_department === "Writing" ||
        c.known_for_department === "Creator"
    )
    .slice(0, 4);
  const Production = cast?.crew
    ?.filter((c) => c.known_for_department === "Production")
    .slice(0, 4);

 

  return (
    <>
      <div className="pt-7 ">
        <p className=" text-xl text-purple-500  ">Plot</p>
        <p className="lg:pe-10">{data.overview}</p>
      </div>
      <div className="lg:flex border-b-2 py-4  lg:gap-25 gap:10  lg:w-[90%]">
        <p>
          <span className="font-bold">Status:</span>{" "}
          <span className="text-gray-500">{data.status || "Null"}</span>{" "}
        </p>
        <p>
          {" "}
          <span className="font-bold">Release date:</span>{" "}
          <span className="text-gray-500">
            {data.release_date || data.first_air_date || "Null"}
          </span>
        </p>
      </div>
      <Creatercard title="Director" data={director} />
      <Creatercard title="Writer" data={writer} />
      <Creatercard title="Production" data={Production} />
    </>
  );
};

export default Plot;
