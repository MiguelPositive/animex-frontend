import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useImage } from "react-image";

const Animes = () => {
  // const { src } = useImage({
  //   srcList: "https://www.example.com/foo.jpg",
  // });

  const { animesCopy } = useContext(store);

  return (
    <div className="flex justify-center gap-5 flex-wrap">
      {animesCopy.map((anime) => (
        <div
          className={`w-[15rem] h-[20rem] bg-white rounded-md cursor-pointer overflow-hidden`}
          key={anime._id}
        >
          <img
            id="img-anime"
            src={`https://animex-backend.onrender.com/imgsAnime/${anime.poster}`}
            alt={`Poster ${anime.name}`}
            className="w-full h-[10rem]"
          />

          <div
            id="text-anime"
            className="flex justify-center items-center text-black h-[5rem]"
          >
            <p className="w-full text-center text-black">{anime.name}</p>
            <p className="w-full">{anime.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animes;
