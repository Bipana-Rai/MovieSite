import React from "react";
import Grid from "./Grid";

const Recommendation = ({ recommend, media }) => {
  return (
    <>
      {recommend?.results?.length > 0 && (
        <Grid
          data={recommend}
          title={"Recommendations"}
          fromSimilar={true}
          media={media}
        />
      )}
    </>
  );
};

export default Recommendation;
