import React from "react";
import Header from "../header/Header";
import Options from "../buttons/Options";
import RegisterAnime from "./RegisterAnime";
import Animes from "../animes/Animes";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp.jsx";

const Dashboard = () => {
  const {
    setShowRegisterAnime,
    showRegisterAnime,
    activeBlur,
    setActiveBlur,
    getAnimes,
    setAnimesCopy,
    animesCopy,
    animes,
  } = useContext(store);

  const [showRegister, setShowRegister] = useState("hidden");

  const sendOption = () => {
    setShowRegisterAnime(true);
  };

  useEffect(() => {
    /*Este useEffect me muestra u oculta la venta de registro de anime
con un retardo para mostrar la animación de salida de la ventana*/

    if (showRegisterAnime) {
      setShowRegister("absolute");
      setActiveBlur("show-register-anime");
    } else {
      setTimeout(() => {
        setShowRegister("hidden");
        setActiveBlur("hidden-register-anime");
      }, 500);
    }
  }, [showRegisterAnime]);

  useEffect(() => {
    getAnimes();
  }, []);

  useEffect(() => {
    console.log(animesCopy);
  }, [animesCopy]);
  return (
    <div
      id="container-dashboard"
      className="relative min-w-full min-h-screen  bg-bg-dashboard bg-center bg-cover  text-white "
    >
      <div className="absolute top-0 w-full h-full bg-[#111111] bg-opacity-95 z-10 "></div>

      <div
        id="header"
        className={`relative z-20 pl-[4%] pr-[4%] ${activeBlur}`}
      >
        <div className="pt-5">
          <Header />
        </div>

        <div
          id="options-dashboard"
          className="flex justify-between items-center flex-wrap mt-3"
        >
          <div className="">
            <Options title={"# 10"} add={false} />
          </div>
          <div>
            <Options title={"Agregar anime"} add={true} action={sendOption} />
          </div>
        </div>

        <div className="flex justify-center items-center gap-5 flex-wrap mt-5">
          <Animes />
        </div>
      </div>

      <div
        className={`${showRegister} top-0 w-full h-full  flex justify-center items-center z-20`}
      >
        <RegisterAnime />
      </div>
    </div>
  );
};

export default Dashboard;
