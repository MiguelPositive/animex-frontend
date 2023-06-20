import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useNavigate } from "react-router-dom";
import { errorCredentials } from "../windows/errorCredentials";
import Cookies from "universal-cookie";

import userRegistered from "../windows/userRegistered";

export const cookies = new Cookies();

function useValidateCredentials() {
  const {
    user,
    password,
    inputsEmpy,
    register,
    createUser,
    correctCredentiasl,
    getIdUser,
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
        createUser(user, password);
        navigate("/");

        setTimeout(() => {
          userRegistered();
        }, 150);
      } else if (register === false) {
        let temp = await correctCredentiasl(user, password);

        if (temp === true) {
          cookies.set("cookieUser", user, { path: "/" });
          getIdUser(user);

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
