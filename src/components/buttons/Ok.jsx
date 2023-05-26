import React from "react";

const Ok = ({ action }) => {
  return (
    <div
      className="bg-[#327B34] rounded-full p-1 flex justify-center items-center pl-2 pr-2 shadow-global transition-all duration-300 cursor-pointer hover:-translate-y-2"
      onClick={action}
    >
      <i className="bi bi-check-lg"></i>
    </div>
  );
};

export default Ok;
