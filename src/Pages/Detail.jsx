import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../utils/useFetch";
import Topcast from "../components/Topcast";
import Video from "../components/Video";
import Similarmovies from "../components/Similarmovies";
import { Description } from "../components/Description";
import Recommendation from "../components/Recommendation";
import Spinner from "../Loaders/Spinner";

const Detail = () => {
  const { id, media } = useParams();

  const { error, data, loading } = useFetch(`/${media}/${id}`);
  const { data: cast } = useFetch(`/${media}/${id}/credits`);
  const { data: video } = useFetch(`/${media}/${id}/videos`);
  const { data: similar } = useFetch(`/${media}/${id}/similar`);
  const { data: recommend } = useFetch(`/${media}/${id}/recommendations`);


  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Description data={data} cast={cast} />
          <Topcast cast={cast} />
          {video?.results?.length>0 &&
          <div className="gap-9 lg:px-12 px-5 lg:py-4  ">
            <p className="text-white lg:text-4xl text-2xl">Official Videos</p>
            <div className="hide-scrollbar flex overflow-x-auto gap-8 ">
              {video?.results?.map((v) => (
                <Video key={v.key} url={v.key} name={v.name} />
              ))}
            </div>
          </div>
}

          <Similarmovies
            smovies={similar}
            title={"Similar Movies"}
            media={media}
          />

          <Recommendation recommend={recommend} media={media} />
        </>
      )}
    </>
  );
};

export default Detail;
