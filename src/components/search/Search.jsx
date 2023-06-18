import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

const Search = ({ placeholder }) => {
  const [text, setText] = useState("");

  const { animesCopy, setAnimesCopy, animes } = useContext(store);

  let animesFiltered;

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const searchAnimes = () => {
    if (text != "") {
      animesFiltered = animesCopy.filter((anime) => {
        if (anime.name.includes(text)) {
          return anime;
        }
      });

      setTimeout(() => {
        setAnimesCopy(animesFiltered);
      }, 200);
    } else {
      setTimeout(() => {
        setAnimesCopy(animes);
      }, 200);
    }
  };

  useEffect(() => {
    searchAnimes();
  }, [text]);
  return (
    <div className="relative text-sm ">
      <input
        type="text"
        placeholder={placeholder}
        className=" bg-[#2B2D2F] p-2 pl-8 pr-4 rounded-md placeholder:text-white/80 placeholder: focus:outline-none w-full"
        onInput={handleInput}
      />
      <i className="cursor-pointer absolute left-3 top-2 text-white/80 bi bi-search "></i>
    </div>
  );
};

export default Search;
