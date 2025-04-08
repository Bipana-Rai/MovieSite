import React from "react";
import Grid from "./Grid";

function Similarmovies({ smovies, title, media }) {
  return (
    <>
      {smovies?.results?.length > 0 && (
        <Grid data={smovies} fromSimilar={true} title={title} media={media} />
      )}
    </>
  );
}

export default Similarmovies;
