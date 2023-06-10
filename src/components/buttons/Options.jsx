import React from "react";

const Options = ({ title, action, add }) => {
  return (
    <div
      className="bg-[#F98620] p-2 cursor-pointer flex justify-around rounded-full font-bold transition-all duration-100 hover:scale-110"
      onClick={action}
    >
      <p className="flex justify-center items-center text-center"># {title}</p>

      {add ? (
        <i className="ml-2 font-extrabold text-xl bi bi-plus-lg"></i>
      ) : null}
    </div>
  );
};

export default Options;
