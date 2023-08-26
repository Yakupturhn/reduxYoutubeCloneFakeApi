import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import homeAction from "../redux/actions/HomeData";

const Home = () => {
  const dispatch = useDispatch();
  const { getVideos, isLoading } = useSelector((state) => state.getVideos);
  const [letter, setLetter] = useState("new");
  const [visibleVideos, setVisibleVideos] = useState([]); // Görüntülenen videoları tutar
  const [pageSize, setPageSize] = useState(9); // Her sayfada 9 kart göstermek için

  useEffect(() => {
    dispatch(homeAction(letter));
  }, [dispatch, letter]);

  useEffect(() => {
    // Yeni veriler geldiğinde görüntülenen videoları güncelle
    if (getVideos?.items) {
      setVisibleVideos(getVideos.items);
    }
  }, [getVideos]);

  // Daha fazla göster düğmesine tıklanırsa bir sonraki sayfayı gösterin
  const showMore = () => {
    setPageSize(pageSize + 3); // 3 kart daha göster
  };

  return (
    <div className="m-3 flex flex-wrap">
      <Filter setLetter={setLetter} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        visibleVideos
          .slice(0, pageSize)
          .map((video, index) => <HomeCard video={video} key={index} />)
      )}
      {visibleVideos.length > pageSize && (
        <button className="mt-40 ml-10 text-blue-700" onClick={showMore}>
          Daha Fazla Göster...
        </button>
      )}
    </div>
  );
};

export default Home;
