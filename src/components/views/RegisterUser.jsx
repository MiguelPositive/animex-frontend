import React, { useEffect, useState } from "react";
import Input from "../inputs/Input";
import Register from "../buttons/Register";
import Close from "../buttons/Close";
import FillFields from "../helper/FillFields";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import useValidateCredentials from "../hooks/useValidateCredentials";

const RegisterUser = () => {
  const { handleViewCenter, handleSendRegister, setInputsEmpy, inputsEmpy } =
    useContext(store);

  const [display, setDisplay] = useState("block");

  const { validateInputEmpy, redirect } = useValidateCredentials();

  const send = () => {
    // se le pasa el valor de tipo booleano a la funcion del contexto
    handleSendRegister(validateInputEmpy());
  };

  useEffect(() => {
    handleViewCenter();
    setInputsEmpy(false);
  }, []);

  useEffect(() => {
    if (!inputsEmpy) {
      setTimeout(() => {
        setDisplay("hidden");
      }, 500);
    } else {
      setDisplay("block");
    }

    /*es la funcion redirect del hook personalizado useValidateCredentials
    que envia a la persona a crear su usuario o entrar al sistema, 
    si los campos estan llenos
    
    */
    redirect();
  }, [inputsEmpy]);

  return (
    <div className="transition-view overflow-hidden w-screen h-screen bg-bg-register bg-cover bg-bottom flex justify-center items-center p-14 ">
      <div
        id="card-register"
        className={`p-7 pb-2 shadow-global-dark shadow-black/25 rounded-lg relative min-w-[16rem] min-h-[22rem]    ${
          inputsEmpy ? "register-empy" : "register-full"
        }`}
      >
        <div className="absolute right-3 top-3">
          <Close go={"/"} />
        </div>
        <div className="text-white/80 text-xl font-bold flex justify-center items-center text-center mt-5 mb-10">
          <p>Registro de Usuario</p>
        </div>

        <div className="mb-12">
          <Input
            id={3}
            isUser={true}
            placeholder={"Usuario"}
            color={"white"}
            keyDown={send}
          />
        </div>
        <div className="mb-12">
          <Input
            id={4}
            isUser={!true}
            placeholder={"Contraseña"}
            color={"white"}
            keyDown={send}
          />
        </div>

        <div className="mb-7">
          <Register action={send} />
        </div>

        <FillFields display={display} color={"white"} />
      </div>
    </div>
  );
};

export default RegisterUser;
