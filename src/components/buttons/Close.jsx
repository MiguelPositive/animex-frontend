import React from "react";
import { Link } from "react-router-dom";

const Close = ({ go, action }) => {
  return (
    <div className="flex justify-center items-center" onClick={action}>
      <Link to={go}>
        <div className="rounded-full bg-[#961111] opacity-80 text-lg text-center text-white font-sed font-extrabold  pl-2 pr-2 flex justify-center items-center cursor-pointer shadow-global  transition-all duration-300 hover:-translate-y-2">
          x
        </div>
      </Link>
    </div>
  );
};

export default Close;
