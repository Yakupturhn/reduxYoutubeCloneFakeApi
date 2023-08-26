import React, { useEffect } from "react";
import icons from "../assets/icon";
import youtubeIcon from "../assets/images/images";
import { useState } from "react";
import { useDispatch } from "react-redux";
import searchAction from "../redux/actions/SearchData";

const Navbar = () => {
  const dispatch = useDispatch();

  const getSearch = () => {
    dispatch(searchAction(search));
    setSearch("");
  };

  const [search, setSearch] = useState("");
  return (
    <div className="w-full flex items-center justify-between h-20 px-3">
      <div className="w-3/12 flex items-center space-x-2 ">
        <icons.menu size={25} className="icons-style" />
        <img alt="" className="w-32" src={youtubeIcon.youtube}></img>
      </div>

      <div className="w-6/12 flex items-center space-x-4 ">
        <div className="w-3/4 flex items-center ">
          <input
            className=" rounded-lg outline-none border p-2 h-10 flex-1 "
            type="text"
            placeholder="Ara"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="rounded-lg bg-gray-100 h-10 w-20 flex items-center justify-center border cursor-pointer">
            <button onClick={getSearch}>
              <icons.search className="icons-style" />
            </button>
          </div>
        </div>
        <div className=" w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer">
          {" "}
          <icons.microphone className="icons-style" />
        </div>
      </div>

      <div className="w-3/12 flex items-center justify-end space-x-5">
        <icons.video className="icons-style" />
        <icons.notification className="icons-style" />
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
