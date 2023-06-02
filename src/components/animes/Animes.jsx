import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useImage } from "react-image";

const Animes = () => {
  const { animesCopy } = useContext(store);

  return (
    <div className="flex justify-center gap-5 flex-wrap ">
      {animesCopy.map((anime) => (
        <div
          className={`relative w-[14rem] h-[20rem] bg-white rounded-md cursor-pointer overflow-hidden transition-all duration-200 hover:scale-110 z-10`}
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

          <div className="absolute top-0 right-3  text-black">
            <i class="bi bi-hurricane text-2xl"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animes;
