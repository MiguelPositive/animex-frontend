import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useState } from "react";
import { useEffect } from "react";

const Animes = () => {
  const {
    animesCopy,
    deleteAnime,
    idTemp,
    setIdTemp,
    editMode,
    setEditMode,
    setShowRegisterAnime,
    getNameAnime,
  } = useContext(store);

  const [animationFilter, setAnimationFilter] = useState("");

  const saveIdTemp = (idCurrent) => {
    setIdTemp(idCurrent);

    if (idTemp == idCurrent) {
      setIdTemp("");
    }
  };

  const update = () => {
    setEditMode(true);
    setShowRegisterAnime(true);
    getNameAnime(idTemp);
  };

  useEffect(() => {
    setAnimationFilter("");

    if (animationFilter == "") {
      setAnimationFilter("animate__fadeIn");
    }
  }, [animesCopy]);

  useEffect(() => {}, [animesCopy]);
  return (
    <div className="flex justify-center items-center gap-5 flex-wrap transition-all duration-200">
      {animesCopy.map((anime) => (
        <div
          className={`relative flex justify-center items-center w-[14rem] h-[22rem] bg-[#211F20] rounded-md  overflow-hidden transition-all duration-200 hover:shadow-black hover:shadow-lg hover:scale-110 z-10 animate__animated ${animationFilter}`}
          key={anime._id}
        >
          <div
            id="text-anime"
            className="absolute z-10 bottom-2 w-full flex flex-wrap justify-center items-center mt-5 "
          >
            <p className="p-1 rounded-md text-center text-white text-lg font-bold bg-[#F98620]">
              {anime.name}
            </p>
          </div>

          <img
            id="image-anime"
            className="h-auto w-auto"
            src={`https://animex-backend.onrender.com/imgsAnime/${anime.poster}`}
            alt={`Poster ${anime.name}`}
            title={`Poster ${anime.poster}`}
          />

          <div
            id="button-options"
            className="absolute top-0 right-0 pl-1 pr-1 bg-[#F98620] rounded-full text-slate-white cursor-pointer justify-center items-center hover:animate-spin"
            onClick={() => {
              saveIdTemp(anime._id);
            }}
          >
            <i className="bi bi-gear-fill text-lg before:"></i>
          </div>

          <div
            id="options"
            className={`absolute z-20 top-8 right-1 bg-[#F98620] flex flex-col justify-center items-center p-1 rounded-full shadow-lg shadow-black/70 animate__animated ${
              idTemp == anime._id
                ? "animate__bounceIn static"
                : "animate__bounceOut"
            } `}
          >
            <i
              id="edit-anime"
              className="bi bi-pencil-square cursor-pointer"
              onClick={update}
            ></i>
            <i
              id="delete-anime"
              className="bi bi-trash-fill cursor-pointer"
              onClick={() => {
                deleteAnime(idTemp);
              }}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animes;
