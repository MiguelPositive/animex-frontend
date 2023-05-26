import React from "react";
import { useContext } from "react";
import { store } from "../context/ContextApp";

const FillFields = ({ display, color }) => {
  const { inputsEmpy } = useContext(store);

  if (inputsEmpy) {
    return (
      <div
        className={`animate__animated animate__zoomIn text-center text-sm mb-4 font-semibold ${
          color == "black" ? "text-black" : "text-white"
        }`}
      >
        Los campos deben estar llenos
      </div>
    );
  } else {
    return (
      <div
        className={`animate__animated animate__zoomOut text-center  mb-4 font-semibold  ${display}`}
      >
        Los campos deben estar llenos
      </div>
    );
  }

  return <></>;
};

export default FillFields;
