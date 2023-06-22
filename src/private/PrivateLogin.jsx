import { cookies } from "../components/hooks/useValidateCredentials";
import { Navigate } from "react-router-dom";

const PrivateLogin = ({ children }) => {
  let logged = cookies.get("logged");

  if (logged === "true") {
    return <Navigate to="/dashboard" />;
  } else {
    return children;
  }
};

export default PrivateLogin;
