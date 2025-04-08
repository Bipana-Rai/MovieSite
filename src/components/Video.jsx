import { stringify } from "postcss";
import React from "react";

function Video({ url, name }) {
  return (
    <>
    
      <div>
        <iframe
          className="h-60 w-80  "
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          allowfullscreen
        ></iframe>
        <p className="text-white">{name}</p>
      </div>
    </>
  );
}

export default Video;
