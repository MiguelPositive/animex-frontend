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
    setInputsEmpy,
    inputsEmpy,
    handleViewCenter,
    setRegister,
  } = useContext(store);

  const { validateInputEmpy, redirect } = useValidateCredentials();

  const [deleteHelp, setDeleteHelp] = useState("block");
  const [animationLogin, setAnimationLogin] = useState("");

  const send = () => {
    handleSendLogin(validateInputEmpy());
    redirect();
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
    } else {
      setDeleteHelp("block");
    }

    redirect();
  }, [inputsEmpy]);

  useEffect(() => {
    inputsEmpy
      ? setAnimationLogin("login-empy")
      : setAnimationLogin("login-full");
  }, [inputsEmpy]);

  return (
    <div className="transition-view w-screen h-screen flex justify-center items-center bg-bg-login bg-cover bg-center overflow-hidden ">
      <div
        id="card-login"
        className={`min-h-[18rem] w-[15rem] pt-10 pl-5 pr-5  bg-[#1E142E] bg-opacity-25 rounded-md shadow-global shadow-black/25 400px:w-[18rem]   400px:pl-7 400px:pr-7  ${animationLogin}`}
      >
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
    </div>
  );
};

export default Login;
