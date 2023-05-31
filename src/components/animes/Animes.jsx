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
          <div id="img-anime" className="w-[15rem] h-[10rem]">
            <img
              src={`https://animex-backend.onrender.com/imgsAnime/${anime.poster}`}
              alt={`Poster ${anime.name}`}
              width="100%"
              height="100%"
            />
          </div>
          <div
            id="text-anime"
            className="w-full flex flex-wrap justify-center items-center text-black h-[5rem]"
          >
            <p className="w-full text-center text-black text-2xl font-bold mt-5 mb-5">
              {anime.name}
            </p>
            <p className="w-full text-justify pl-5 pr-5">{anime.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Animes;
