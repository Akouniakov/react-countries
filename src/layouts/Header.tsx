import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="container bg-white-0 ">
      <div className="flex w-screen">
        <p className="font-bold ">REST Countries</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
