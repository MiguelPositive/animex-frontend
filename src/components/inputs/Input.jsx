import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

const Input = ({ placeholder, isUser, id, color, keyDown }) => {
  const [moveLabel, setMoveLabel] = useState(false);
  const [showLabel, setShowLabel] = useState("");
  const [showScroll, setShowScroll] = useState(false);
  const [showEye, setShowEye] = useState("bi bi-eye-slash-fill cursor-pointer");
  const [showPassoword, setShowPassword] = useState("text");

  const [value, setValue] = useState("");

  const [moveScroll, setMoveScroll] = useState("");
  const [changeBorder, setChangeBorder] = useState("");

  const { handleChangeUser, handleChangePassword, setInputsEmpy } =
    useContext(store);

  const handleMoveLabel = () => {
    setShowScroll(true);
    setInputsEmpy(null);

    if (!moveLabel) {
      setMoveLabel(true);
      setShowLabel("text-sm font-medium");
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);

    if (isUser) {
      handleChangeUser(e.target.value);
    } else if (!isUser) {
      handleChangePassword(e.target.value);
    }
  };

  const handleBlur = () => {
    setShowScroll(false);
    setInputsEmpy(null);

    if (moveLabel == true && value == "") {
      setMoveLabel(false);
      setShowLabel("");
    }
  };

  const handleShowPassword = () => {
    if (!isUser) {
      if (showEye == "bi bi-eye-slash-fill cursor-pointer") {
        setShowEye("bi bi-eye-fill cursor-pointer");
        setShowPassword("text");
      } else if (showEye == "bi bi-eye-fill cursor-pointer") {
        setShowEye("bi bi-eye-slash-fill cursor-pointer");
        setShowPassword("password");
      }
    }
  };

  useEffect(() => {
    if (!isUser) {
      setShowPassword("password");
    }
  }, []);

  useEffect(() => {
    if (showScroll) {
      setMoveScroll("after:right-1");
      setChangeBorder("border-b-[0px]");
    } else {
      setMoveScroll("after:right-64");
      setChangeBorder("border-b-[1px]");
    }
  }, [showScroll]);

  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      keyDown();
    }
  };

  return (
    <div className="relative ">
      <label
        className={`font-normal transition-all duration-100 absolute ${
          color == "black" ? "text-black" : "text-white/80"
        } ${showLabel} ${moveLabel ? "-top-5" : "top-0"}`}
        htmlFor={id}
      >
        {placeholder}
      </label>

      <div
        className={`overflow-hidden relative  after:content-[''] after:absolute after:top-5 after:right-50
       after:border-b-[3px] after:rounded-[300rem]  ${
         color == "black" ? "after:border-black" : "after:border-white/80"
       } after:w-full after:transition-all after:duration-500 ${moveScroll}`}
      >
        <input
          id={id}
          type={showPassoword}
          className={`text-${color} pr-7 w-full focus:outline-none bg-inherit  ${changeBorder} ${
            color == "black" ? "border-black/80" : "border-white/80"
          } cursor-pointer `}
          onFocus={handleMoveLabel}
          onBlur={handleBlur}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <i
          className={`absolute -top-[0.2rem] right-1 text-xl ${
            color == "black" ? "text-black" : "text-white/80"
          } ${isUser ? "bi bi-person-circle" : showEye}`}
          onClick={handleShowPassword}
        ></i>
      </div>
    </div>
  );
};

export default Input;
