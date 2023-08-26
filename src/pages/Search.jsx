import React from "react";
import { useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";

const Search = () => {
  const { searchVideos } = useSelector((state) => state.searchVideos);
  console.log(searchVideos);

  return (
    <div className="flex flex-wrap">
      {searchVideos?.items?.map((video, i) => (
        <HomeCard video={video} key={i}></HomeCard>
      ))}
    </div>
  );
};

export default Search;
