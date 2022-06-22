import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className=" bg-white-0 py-2 sticky top-0 flex items-center justify-between">
      <p className="font-bold px-4">REST Countries</p>
      <SearchBar />
    </div>
  );
};

export default Header;
