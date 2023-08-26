import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import detailAction from "../redux/actions/DetailData";
import DetailCard from "../components/DetailCard";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { getVideo, isLoading } = useSelector((state) => state.getVideo);
  console.log(getVideo, "getvideo");

  useEffect(() => {
    dispatch(detailAction(id));
  }, [dispatch]);
  return (
    <div>
      {isLoading ? (
        <div>Detaylar yükleniyorr....</div>
      ) : (
        getVideo?.items?.map((video, i) => <DetailCard key={i} video={video} />)
      )}
    </div>
  );
};

export default Detail;
