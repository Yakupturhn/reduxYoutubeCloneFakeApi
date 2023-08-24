import React, { useEffect } from "react";
import HomeCard from "../components/HomeCard";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import homeAction from "../redux/actions/HomeData";

const Home = () => {
  const dispatch = useDispatch();
  const { getVideos, isLoading } = useSelector((state) => state.getVideos);

  useEffect(() => {
    dispatch(homeAction("new"));
  }, [dispatch]);

  return (
    <div className="m-3 flex flex-wrap">
      <Filter />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        getVideos.map((video, index) => <HomeCard video={video} key={index} />)
      )}
    </div>
  );
};

export default Home;
