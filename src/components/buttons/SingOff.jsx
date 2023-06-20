import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";
import { useState } from "react";
import { useEffect } from "react";
import { cookies } from "../hooks/useValidateCredentials";
import { useNavigate } from "react-router-dom";

const SingOff = () => {
  const { exitUser, setExitUser } = useContext(store);

  const [opacity, setOpacity] = useState("opacity-0");
  const [hidden, setHidden] = useState("hidden");
  const navigate = useNavigate();

  const handleClick = () => {
    if (exitUser === null) {
      setExitUser(true);
    } else if (exitUser) {
      setExitUser(false);
    } else {
      setExitUser(true);
    }
  };

  const deleteCookies = () => {
    cookies.set("cookieUser", "", { path: "/" });
    cookies.set("cookiesUserId", "", { path: "/" });

    navigate("/");
    setExitUser(false);
  };

  useEffect(() => {
    if (exitUser) {
      setOpacity("opacity-100");
      setTimeout(() => {
        setHidden("");
      }, 100);
    } else {
      setOpacity("opacity-0");
      setTimeout(() => {
        setHidden("hidden");
      }, 100);
    }
  }, [exitUser]);

  return (
    <div className="relative">
      <div
        className="w-10 h-10 bg-bg-deku-avatar bg-center bg-cover bg-opacity-100 cursor-pointer rounded-full shadow-global-light"
        onClick={handleClick}
      ></div>

      <div
        className={`w-5 h-5 bg-[#911C1C] rotate-45 absolute right-4 top-14 cursor-pointer ${opacity} ${hidden}`}
        onClick={deleteCookies}
      ></div>

      <div
        className={`${hidden} w-32 h-10 text-center font-bold bg-[#911C1C] cursor-pointer flex justify-center items-center rounded-full absolute right-0 top-16 transition-all duration-100 hover:shadow-md hover:shadow-black ${opacity} `}
        onClick={deleteCookies}
      >
        Salir
      </div>
    </div>
  );
};

export default SingOff;
