import React from "react";

const Access = ({ action }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex justify-center items-center text-center p-2 pl-3 pr-3 bg-black/80 text-white     font-medium cursor-pointer 450px:pl-8 450px:pr-8"
        onClick={action}
      >
        Iniciar sesión
      </div>
    </div>
  );
};

export default Access;
