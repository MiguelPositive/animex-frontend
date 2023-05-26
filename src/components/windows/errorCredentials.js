import Swal from "sweetalert2";
export const errorCredentials = () => {
  Swal.fire({
    title: "Credenciales invalidas",
    icon: "error",
    background: "#EDEDED",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
