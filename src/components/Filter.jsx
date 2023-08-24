import React from "react";
import dataFilter from "../assets/data/dataFilter";

const Filter = () => {
  return (
    <div className="flex items-center w-full overflow-x-auto">
      {dataFilter.map((data, i) => (
        <div className="bg-gray-100 cursor-pointer text-sm hover:bg-gray-200 px-3 py-1 mx-2 rounded-2xl ">
          <span>{data.icon}</span>
          <span>{data.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Filter;
