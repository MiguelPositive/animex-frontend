import React from "react";
import { cookies } from "../components/hooks/useValidateCredentials";
import { Navigate } from "react-router-dom";

const PrivateDashboard = ({ children }) => {
  let logged = cookies.get("logged");

  if (logged === "true") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateDashboard;
