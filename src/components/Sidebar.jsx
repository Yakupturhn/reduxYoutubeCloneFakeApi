import React from "react";
import dataSide from "../assets/data/dataSide";
const Sidebar = () => {
  return (
    <div className="p-2 max-w-[240px] border-r h-screen space-y-2">
      {dataSide.map((data, i) => (
        <div className="flex max-w-[240px]  items-center space-x-5 p-2  hover:bg-gray-200 cursor-pointer">
          <span>{data.icon}</span>
          <span>{data.name}</span>
        </div>
      ))}{" "}
    </div>
  );
};

export default Sidebar;
