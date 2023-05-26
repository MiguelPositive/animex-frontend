import React from "react";

const Search = ({ placeholder }) => {
  return (
    <div className="relative text-sm ">
      <input
        type="text"
        placeholder={placeholder}
        className=" bg-[#2B2D2F] p-2 pl-8 pr-4 rounded-md placeholder:text-white/80 placeholder: focus:outline-none w-full"
      />
      <i className="cursor-pointer absolute left-3 top-2 text-white/80 bi bi-search "></i>
    </div>
  );
};

export default Search;
