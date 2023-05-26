import React from "react";
import { Link } from "react-router-dom";

const Registerme = () => {
  return (
    <div className="flex justify-center items-center">
      <Link to={"/register"}>
        <div className="p-1 flex justify-center items-center cursor-pointer underline hover:-translate-y-2 hover:font-medium hover:text-lg  transition-all duration-200">
          Registrarme
        </div>
      </Link>
    </div>
  );
};

export default Registerme;
