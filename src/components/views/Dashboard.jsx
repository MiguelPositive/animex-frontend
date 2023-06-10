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
    getIdUser,
    getAnimes,
    user,
    editMode,
    idUser,
    counter,
  } = useContext(store);

  const [showRegister, setShowRegister] = useState("hidden");
  const [activeOverflow, setActiveOverflow] = useState(true);

  const sendOption = () => {
    setShowRegisterAnime(true);
  };

  useEffect(() => {
    getIdUser(user);
  }, []);

  useEffect(() => {
    if (idUser != undefined) {
      getAnimes();
    }
  }, [idUser]);

  useEffect(() => {
    /*Este useEffect me muestra u oculta la venta de registro de anime
con un retardo para mostrar la animación de salida de la ventana*/

    // console.log(showRegister);

    if (showRegisterAnime) {
      setShowRegister("absolute");
      setActiveBlur("show-register-anime");
      setActiveOverflow(false);
    } else {
      setTimeout(() => {
        setShowRegister("hidden");
        setActiveBlur("hidden-register-anime");
        setActiveOverflow(true);
      }, 500);
    }
  }, [showRegisterAnime]);

  useEffect(() => {
    if (editMode) {
      setShowRegister("absolute");
      setActiveBlur("show-register-anime");
      setActiveOverflow(false);
    } else if (editMode === false) {
      setTimeout(() => {
        setShowRegister("hidden");
        setActiveBlur("hidden-register-anime");
        setActiveOverflow(true);
      }, 500);
    }
  }, [editMode]);
  return (
    <div
      className={`${activeOverflow ? "" : "w-screen h-screen overflow-hidden"}`}
    >
      <div
        id="container-dashboard"
        className={`relative min-w-full min-h-screen  bg-bg-dashboard bg-center bg-cover  text-white ${
          activeOverflow ? "overflow-hidden" : ""
        }`}
      >
        <div className="absolute top-0 w-full h-full bg-[#111111] bg-opacity-95 z-10"></div>

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
              <Options title={counter} add={false} />
            </div>
            <div>
              <Options title={"Agregar anime"} add={true} action={sendOption} />
            </div>
          </div>

          <div className="flex justify-center items-center gap-5 flex-wrap mt-5 pb-7">
            <Animes />
          </div>
        </div>

        <div
          className={`${showRegister} top-24 w-full h-full  flex justify-center items-start z-20`}
        >
          <RegisterAnime />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
