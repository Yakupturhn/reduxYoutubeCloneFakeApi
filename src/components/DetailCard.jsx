import moment from "moment";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import icons from "../assets/icon";

const formatViewCount = (viewCount) => {
  if (viewCount) {
    const num = parseInt(viewCount, 10);
    if (!isNaN(num)) {
      if (num >= 1000) {
        const numStr = num.toString();
        return `${numStr.charAt(0)}.` + numStr.slice(1);
      }

      return num.toString();
    }
  }

  return viewCount;
};

const DetailCard = ({ video }) => {
  const formattedViewCount = formatViewCount(video?.statistics?.viewCount);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const description = showFullDescription
    ? video?.snippet?.description
    : video?.snippet?.description.substring(0, 200) + "..."; // Örneğin, ilk 200 karakteri göster

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="max-w-[650px] m-10">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${video?.id}`}
      ></ReactPlayer>
      <div className="font-bold text-xl mt-2">{video?.snippet?.title}</div>
      <div className="space-x-2">
        <span>{formattedViewCount} Görüntülenme</span>
        <span>
          {moment(video?.snippet?.publishedAt).startOf("day").fromNow()}
        </span>
      </div>

      <div className="mt-2">
        <p className="text-gray-700 text-sm">{description}</p>
        {showFullDescription ? (
          <button
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={toggleDescription}
          >
            Daha az göster
          </button>
        ) : (
          <button
            className="text-blue-500 hover:underline cursor-pointer"
            onClick={toggleDescription}
          >
            Daha fazla göster
          </button>
        )}
      </div>

      <div className="mt-2 text-blue-700">
        {video?.snippet?.tags?.map((tag, i) => `#${tag} `)}
      </div>
      <div className="align-items space-x-5">
        <span className="align-items">
          <icons.like className="icon-style" />
          {video?.statistics?.likeCount}
        </span>
        <span className="align-items">
          <icons.dislike /> {video?.statistics?.dislikeCount}
        </span>
      </div>
    </div>
  );
};

export default DetailCard;
