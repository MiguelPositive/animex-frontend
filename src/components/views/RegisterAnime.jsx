import React from "react";
import Close from "../buttons/Close";
import Ok from "../buttons/Ok";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp.jsx";

import { cookies } from "../hooks/useValidateCredentials";

import { empySpace } from "../windows/empySpace";

const RegisterAnime = () => {
  const {
    showRegisterAnime,
    setShowRegisterAnime,
    user,
    getIdUser,
    idUser,
    addAnime,
    updateAnime,
    idTemp,
    editMode,
    setEditMode,
    setNameAnime,
    nameAnime,
  } = useContext(store);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(null);

  const [animation, setAnimation] = useState("");

  const [border, setBorder] = useState("");

  const [miniature, setMiniature] = useState(null);
  const [activeMiniature, setActiveMiniature] = useState(false);

  const closeWindow = () => {
    setShowRegisterAnime(false);
    setEditMode(false);
    setName("");
    setNameAnime("");
  };

  const handleChangeName = async (e) => {
    setName(e.target.value);
  };

  const handleChangePoster = (e) => {
    setPoster(e.target.files[0]);
    setActiveMiniature(true);

    const reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setMiniature(e.target.result);
    };
  };

  const applyFormData = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("description", description);
    formData.append("poster", poster);
    formData.append("id_user", cookies.get("cookiesUserId"));
    formData.append("_id", idTemp);

    return formData;
  };

  const clean = () => {
    setName("");
  };

  const sendAndRegister = () => {
    if (poster === null) {
      empySpace();
    } else {
      addAnime(applyFormData(), clean);
    }
  };

  const sendAndUpdate = () => {
    updateAnime(applyFormData(), clean);
  };

  /*
  
  Es necesarrio poner e.preventDefault() en el evento
  onDrop para que el navegador no abra la imagen que se le esta
  soltando, sino que procese la imagen como se quiere en el evento.

  Ademas, se debe poer e.preventDefault() en el evento onDragOver para
  que funcion el evento onDrop
  
  */

  const handlerDrop = (e) => {
    e.preventDefault();

    setPoster(e.dataTransfer.files[0]);
    setActiveMiniature(true);

    const reader = new FileReader();

    reader.readAsDataURL(e.dataTransfer.files[0]);
    reader.onload = (e) => {
      e.preventDefault();
      setMiniature(e.target.result);
    };
  };

  const handlerDragOver = (e) => {
    e.preventDefault();
    setBorder("border-dashed");
  };

  const handleDragLeave = () => {
    setBorder("");
  };

  useEffect(() => {
    if (showRegisterAnime) {
      setAnimation("animate__bounceIn");
    } else {
      setAnimation("animate__bounceOut");

      setTimeout(() => {
        setActiveMiniature(false);
      }, 500);
    }
  }, [showRegisterAnime]);

  useEffect(() => {
    if (editMode) {
      setName(nameAnime);
    }
  }, [editMode]);

  return (
    <div
      className={`animated__animated ${animation} relative w-[17rem] rounded-md flex justify-center flex-wrap bg-[#2B2D2F] p-6`}
    >
      <div className="absolute right-2 top-2">
        <Close action={closeWindow} />
      </div>

      <label htmlFor="" className="text-center font-bold mb-1">
        Nombre del anime
      </label>

      <input
        type="text"
        className="w-full mb-6 rounded-md bg-black/0 focus:outline-none border-white/50 border-[1px] pl-3 pr-3"
        onChange={handleChangeName}
        value={name}
      />

      <div
        id="drag-zone"
        onDragOver={handlerDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handlerDrop}
        className={`w-full flex flex-wrap rounded-md border-2 border-white p-4 pb-0 mb-5 ${border} overflow-hidden`}
      >
        <label
          htmlFor="input-poster"
          className="w-full text-center font-bold p-2 rounded-md cursor-pointer bg-[#D87A31] transition-all duration-100 hover:scale-110"
        >
          Arraste o suelte la imagen del poster
        </label>

        <input
          type="file"
          name="poster"
          id="input-poster"
          className="hidden"
          onChange={handleChangePoster}
        />

        {/* <div className="w-[20rem] h-[15rem] bg-dance bg-cover "></div> */}

        <div className="flex justify-center items-center w-full">
          <img
            src={
              activeMiniature
                ? miniature
                : "https://media.tenor.com/UkK1G2I0EisAAAAi/ast-anime.gif"
            }
            className={`${
              activeMiniature
                ? "mt-7 mb-7 rounded-md max-h-[15rem] animation-miniature"
                : "w-[20rem] h-[17rem]"
            }`}
            alt="Poster del anime"
            title="Poster del anime"

          />
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <Ok action={editMode ? sendAndUpdate : sendAndRegister} />
      </div>
    </div>
  );
};

export default RegisterAnime;
