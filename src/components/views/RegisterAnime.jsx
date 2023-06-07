import React from "react";
import Close from "../buttons/Close";
import Ok from "../buttons/Ok";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp.jsx";

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
    nameAnime,
  } = useContext(store);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [poster, setPoster] = useState(null);

  const [animation, setAnimation] = useState("");

  const closeWindow = () => {
    setShowRegisterAnime(false);
    setEditMode(false);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangePoster = (e) => {
    // console.log(e.target.files[0]);
    setPoster(e.target.files[0]);
  };

  const applyFormData = () => {
    // utilizo formData para poder enviar el archivo poster

    const formData = new FormData();

    getIdUser(user);

    formData.append("name", name);
    formData.append("description", description);
    formData.append("poster", poster);
    formData.append("id_user", idUser);
    formData.append("_id", idTemp);

    return formData;
  };

  const sendAndRegister = () => {
    addAnime(applyFormData());
  };

  const sendAndUpdate = () => {
    updateAnime(applyFormData());
  };

  useEffect(() => {
    if (showRegisterAnime) {
      setAnimation("animate__bounceIn");
    } else {
      setAnimation("animate__bounceOut");
    }
  }, [showRegisterAnime]);

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
        value={(editMode ? nameAnime : null) || ""}
      />

      <label htmlFor="" className="text-center font-bold mb-1">
        Descripción del anime
      </label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="6"
        className="w-full mb-6 rounded-md bg-black/0 focus:outline-none border-white/50 border-[1px] pl-3 pr-3 pt-2"
        onChange={handleChangeDescription}
      ></textarea>

      <label htmlFor="" className="w-full text-center font-bold mb-1">
        Poster
      </label>
      <input
        type="file"
        name="file"
        className="mb-5"
        onChange={handleChangePoster}
      />

      <div className="w-full flex justify-center items-center">
        <Ok action={sendAndRegister} />
      </div>
    </div>
  );
};

export default RegisterAnime;
