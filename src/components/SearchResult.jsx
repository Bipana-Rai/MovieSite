import useFetch from "../utils/useFetch";
import SearchData from "./SearchData";
import Spinner from "../Loaders/Spinner";
import { useParams } from "react-router-dom";

function SearchResult() {
  const { query } = useParams();
  const { data, loading } = useFetch(`/search/multi?query=${query}&page=1`);
  const filteredData=data?.results?.filter((item)=>item.media_type==="tv" || item.media_type==="movie")
  const media=data?.results?.map((e)=>e.media_type)
  const newMedia=media?.slice(0,1)
  return (
    <>
      <p className="text-white text-center text-3xl py-5">
        Search Results of "{query}"
      </p>
      {loading ? (
          <Spinner/>
      ) : (
        <SearchData data={filteredData} media={newMedia}  />
      )}
    </>
  );
}

export default SearchResult;
