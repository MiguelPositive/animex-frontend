import React from "react";
import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { cookies } from "../hooks/useValidateCredentials.jsx";
import { animeRegistered } from "../windows/animeRegistered.js";
import { animeUpdated } from "../windows/animeUpdated.js";

export const store = createContext();

const ContextApp = ({ children }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const [inputsEmpy, setInputsEmpy] = useState(null);
  const [register, setRegister] = useState(null);

  const [showRegisterAnime, setShowRegisterAnime] = useState(false);

  const [activeBlur, setActiveBlur] = useState("");

  // uso esa variable para traer el id del respectivo usuario y almacenarlo en las cookies
  const [idUser, setIdUser] = useState("");

  const [animes, setAnimes] = useState([]);
  const [animesCopy, setAnimesCopy] = useState([]);

  //Es el id que se va utilizar para editar o borrar un anime
  const [idTemp, setIdTemp] = useState("");

  const [editMode, setEditMode] = useState(false);

  const [nameAnime, setNameAnime] = useState("");

  const [counter, setCounter] = useState(0);

  const [changeOpacity, setChangeOpacity] = useState(null);

  //outside = afuera
  const [outside, setOutside] = useState(true);

  const [loaderDashboard, setLoaderDashboard] = useState(false);

  const handleChangeUser = (newUser) => {
    setUser(newUser);
  };

  const handleChangePassword = (newPassword) => {
    setPassword(newPassword);
  };

  /* function handleSendLogin - handleSendRegister
  
    Le paso un parametro de tipo boolenao para determinar si los
    campos o inputs estan vacios o no. Ademas, determino si se trata de un registro
    de usuario o una validación de usuario para entrar a la dashboard. 

    Ademas, cada vez que la variable inputsEmpy cambia, el useEffect de la vista
    RegisterUser (rehistrar usuario) ejecuta la funcion redirect para redirigir a la persona
    ya se para crear su usuario o para entrar al sistema, siempre y cuando los
    campos de los inputs esten llenos.
  */

  const handleSendLogin = (value) => {
    setRegister(false);
    setInputsEmpy(value);
  };

  const handleSendRegister = (value) => {
    setRegister(true);
    setInputsEmpy(value);
  };

  /*
  
  funcion centrar vista:

  tomo el ancho de la ventana del navegador y el alto
  para luego dividir en dos cada uno, y así, asigarle al navegador
  estos nuevos valores como coordenadas, y de esta forma centrar la vista.
  Esto lo hice porque en pantallas moviles el login no cargaba en el
  centro de la pantalla.
  
  */

  const handleViewCenter = () => {
    let xBrowser = window.innerWidth;
    let yBrowser = window.innerHeight;

    let xCenter = xBrowser / 2;
    let yCenter = yBrowser / 2;

    setTimeout(() => {
      window.scrollTo(xCenter, yCenter);
    }, 300);
  };

  const createUser = async (user, password) => {
    try {
      await axios.post("https://animex-backend.onrender.com/create-user", {
        user,
        password,
      });
    } catch (error) {
      console.log(
        `error en el frontend al intentar crear un usuario. ${error}`
      );
    }
  };

  /*
  
  correctCredentials valida las credenciales digitadas por el usuario
  con las que hay en la base de datos.

  retorna true si todo sale correctamente
  
  */

  const correctCredentiasl = async (user, password) => {
    try {
      const {
        data: { validation },
      } = await axios.post(
        "https://animex-backend.onrender.com/correct-credentials",
        {
          user,
          password,
        }
      );

      return await validation;
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar revisar si las credenciales existen o no. ${error}`
      );
    }
  };

  const getIdUser = async (value1) => {
    try {
      const {
        data: { id },
      } = await axios.post("https://animex-backend.onrender.com/get-id-user", {
        user: value1,
      });

      setIdUser(await id);
      cookies.set("cookiesUserId", id, { path: "/" });
      console.log(id);
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar consultar el id del usuario. ${error}`
      );
    }
  };

  const getAnimes = async () => {
    try {
      const {
        data: { animesData },
      } = await axios.post("https://animex-backend.onrender.com/get-animes", {
        id_user: cookies.get("cookiesUserId"),
      });

      setAnimes(await animesData);
      setAnimesCopy(await animesData);
      setCounter(await animesData.length);
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar consultar los animes. ${error}`
      );
    }
  };

  const getNameAnime = (id) => {
    let temp = animesCopy.filter((iterator) => {
      if (iterator._id == id) {
        return iterator;
      }
    });

    // console.log(temp[0].name);
    setNameAnime(temp[0].name);
  };

  const addAnime = async (formData, reset) => {
    try {
      await axios.post("https://animex-backend.onrender.com/add-anime", formData);

      animeRegistered();
      getAnimes();
      setShowRegisterAnime(false);
      reset();
    } catch (error) {
      console.log(
        `ocurrio un error en el backend al intentar añadir un anime. ${error}`
      );
    }
  };

  const updateAnime = async (formData, reset) => {
    try {
      console.log(formData);
      await axios.post(
        "https://animex-backend.onrender.com/update-anime",
        formData
      );

      animeUpdated();
      setShowRegisterAnime(false);
      getAnimes();
      reset();
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar actualizar el anime ${error}`
      );
    }
  };

  const deleteAnime = async (idTemp) => {
    try {
      await axios.post("https://animex-backend.onrender.com/delete-anime", {
        idTemp,
      });

      getAnimes();
    } catch (error) {
      console.log(
        `ocurrio un error en el frontend al intentar eliminar el anime. ${error}`
      );
    }
  };

  return (
    <store.Provider
      value={{
        user,
        password,
        setUser,
        setPassword,
        handleChangeUser,
        handleChangePassword,
        inputsEmpy,
        setInputsEmpy,
        handleSendLogin,
        handleViewCenter,
        handleSendRegister,
        correctCredentiasl,
        register,
        setRegister,
        createUser,
        getIdUser,
        idUser,
        showRegisterAnime,
        setShowRegisterAnime,
        idTemp,
        setIdTemp,
        activeBlur,
        setActiveBlur,
        addAnime,
        getAnimes,
        getNameAnime,
        setNameAnime,
        nameAnime,
        updateAnime,
        deleteAnime,
        animes,
        setAnimes,
        setAnimesCopy,
        animesCopy,
        editMode,
        setEditMode,
        counter,
        setCounter,
        outside,
        setOutside,
        changeOpacity,
        setChangeOpacity,
        loaderDashboard,
        setLoaderDashboard,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextApp;
