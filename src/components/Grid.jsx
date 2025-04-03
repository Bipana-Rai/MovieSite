import React, { useState } from "react";
import Card from "./Card";
import Toggle from "./Toggle";

function Grid({
  data,
  error,
  loading,
  title,
  t1,
  t2,
  isLeft,
  setIsLeft,
  h1,
  h2,
  fromSimilar,
  media,
}) {
  return (
    <section className="lg:px-12 px-5 ">
      <div className="flex justify-between">
        <p className="lg:text-4xl text-2xl text-white">{title}</p>
        {!fromSimilar && (
          <Toggle
            t1={t1}
            t2={t2}
            isLeft={isLeft}
            setIsLeft={setIsLeft}
            h1={h1}
            h2={h2}
            // setMedia={setMedia}
          />
        )}
      </div>
      <div className="hide-scrollbar flex gap-3 py-3 overflow-x-auto whitespace-nowrap">
        {data?.results?.map((item) => (
          <Card data={item} media={media} loading={loading} />
        ))}
      </div>
    </section>
  );
}

export default Grid;
