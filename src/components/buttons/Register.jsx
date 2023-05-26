import React from "react";

const Register = ({ action }) => {
  return (
    <div className="flex justify-center items-center cursor-pointer">
      <div
        className="p-2 pl-16 pr-16 text-center text-white font-normal shadow-global-dark bg-[#101122] opacity-80  cursor-pointer transition-all duration-300 hover:-translate-y-2"
        onClick={action}
      >
        Registrar
      </div>
    </div>
  );
};

export default Register;
