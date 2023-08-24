import React from "react";
import images from "../assets/images/images";

const HomeCard = ({ video }) => {
  return (
    <div className="w-[300px] m-3 cursor-pointer">
      <img className="w-[300px]" src={images.youtube} alt=""></img>
      <div className="font-bold mt-1">
        Lorem ipsum dolor sit amet consectetur
      </div>
      <div className="text-sm mt-1 tracking-wider text-gray-700">
        Yakup Turhan
      </div>
      <div className="text-xs mt-1 tracking-wider text-gray-700">
        <span>100k Görüntülenme</span>
        <span>1 yıl önce</span>
      </div>
    </div>
  );
};

export default HomeCard;
