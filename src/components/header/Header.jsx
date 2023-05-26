import React from "react";
import Search from "../search/Search";
import SingOff from "../buttons/SingOff";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[70%]">
        <Search placeholder={"Buscar anime"} />
      </div>
      <div>
        <SingOff />
      </div>
    </div>
  );
};

export default Header;
