import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useNavigate } from "react-router-dom";
import { errorCredentials } from "../windows/errorCredentials";

function useValidateCredentials() {
  const {
    user,
    password,
    inputsEmpy,
    register,
    createUser,
    correctCredentiasl,
  } = useContext(store);
  const navigate = useNavigate();

  const validateInputEmpy = () => {
    if (user === "" && password === "") {
      return true;
    } else {
      return false;
    }
  };

  const redirect = async () => {
    if (inputsEmpy === false) {
      if (register) {
        console.log("se van a registrar las credenciales");
        createUser(user, password);
      } else if (register === false) {
        let temp = await correctCredentiasl(user, password);

        if (temp === true) {
          navigate("/dashboard");
        } else {
          errorCredentials();
        }
      }
    }
  };

  return { validateInputEmpy, redirect };
}

export default useValidateCredentials;
