import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import useValidateCredentials from "../hooks/useValidateCredentials";
import Input from "../inputs/Input";
import Registerme from "../buttons/Registerme";
import Access from "../inputs/Access";
import FillFields from "../helper/FillFields";

const Login = () => {
  const {
    handleSendLogin,
    inputsEmpy,
    handleViewCenter,
    setRegister,
    loaderDashboard,
    setLoaderDashboard,
  } = useContext(store);

  const { validateInputEmpy, redirect } = useValidateCredentials();

  const [deleteHelp, setDeleteHelp] = useState("block");
  const [animationLogin, setAnimationLogin] = useState("");
  const [animationLoader, setAnimationLoader] = useState("hidden");
  const [hiddenLogin, setHiddenLogin] = useState("");

  const send = () => {
    let validation = validateInputEmpy();

    handleSendLogin(validation);

    if (validation === false) {
      setLoaderDashboard(true);
    } else {
      setLoaderDashboard(false);
    }
  };

  useEffect(() => {
    handleViewCenter();
    setRegister(null);
  }, []);

  useEffect(() => {
    if (!inputsEmpy) {
      setTimeout(() => {
        setDeleteHelp("hidden");
      }, 500);

      redirect();
    } else {
      setDeleteHelp("block");
    }
  }, [inputsEmpy]);

  useEffect(() => {
    inputsEmpy
      ? setAnimationLogin("login-empy")
      : setAnimationLogin("login-full");
  }, [inputsEmpy]);

  useEffect(() => {
    if (loaderDashboard) {
      setAnimationLoader("z-20");
      setHiddenLogin("hidden");
    } else {
      console.log(loaderDashboard);
      setAnimationLoader("hidden");
      setHiddenLogin("");
    }
  }, [loaderDashboard]);

  return (
    <div className="transition-view w-screen h-screen flex justify-center items-center bg-bg-login bg-cover bg-center overflow-hidden ">
      <div
        id="card-login"
        className={`min-h-[18rem] w-[15rem] pt-10 pl-5 pr-5  bg-[#1E142E] bg-opacity-25 rounded-md shadow-global shadow-black/25 400px:w-[18rem] 400px:pl-7 400px:pr-7 relative z-20 
       ${animationLogin}`}
      >
        <div className={`${hiddenLogin} `}>
          <div className="mb-10">
            <Input
              placeholder={"Usuario"}
              isUser={true}
              id={1}
              color={"black"}
              keyDown={send}
            />
          </div>
          <div className="mb-8">
            <Input
              placeholder={"Contraseña"}
              isUser={false}
              id={2}
              color={"black"}
              keyDown={send}
            />
          </div>
          <div className="mb-5">
            <Registerme />
          </div>
          <div className="mb-4">
            <Access action={send} />
          </div>
          <FillFields display={deleteHelp} color={"black"} />
        </div>

        <div
          className={`w-full h-full absolute top-0 right-0 flex justify-center items-center ${animationLoader}`}
        >
          <div className="bg-loader bg-cover w-[5rem] h-[5rem] animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
