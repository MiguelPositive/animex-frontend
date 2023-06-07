import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useState } from "react";
import { useEffect } from "react";

const Animes = () => {
  const { animesCopy, deleteAnime } = useContext(store);

  const [idTemp, setIdTemp] = useState("");

  const saveIdTemp = (idCurrent) => {
    setIdTemp(idCurrent);

    if (idTemp == idCurrent) {
      setIdTemp("");
    }
  };

  return (
    <div className="flex justify-center gap-5 flex-wrap ">
      {animesCopy.map((anime) => (
        <div
          className={`relative w-[14rem] h-[20rem] bg-white rounded-md  overflow-hidden transition-all duration-200 hover:scale-110 z-10`}
          key={anime._id}
        >
          <div
            id="text-anime"
            className="w-full flex flex-wrap justify-center items-center text-black h-[5rem] "
          >
            <p className="w-full text-center text-black text-2xl font-bold">
              {anime.name}
            </p>
          </div>

          <img
            id="image-anime"
            className="-mt-4 w-full h-[17rem]"
            src={`https://animex-backend.onrender.com/imgsAnime/${anime.poster}`}
            alt={`Poster ${anime.name}`}
          />

          <div
            id="button-options"
            className="absolute top-0 right-3  text-black cursor-pointer"
            onClick={() => {
              saveIdTemp(anime._id);
            }}
          >
            <i className="bi bi-hurricane text-2xl"></i>
          </div>

          <div
            id="options"
            className={`absolute top-8 right-3 bg-black flex flex-col justify-center items-center p-1 rounded-full shadow-lg shadow-black/70 animate__animated ${
              idTemp == anime._id
                ? "animate__bounceIn static"
                : "animate__bounceOut"
            } `}
          >
            <i
              id="edit-anime"
              className="bi bi-pencil-square cursor-pointer"
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
