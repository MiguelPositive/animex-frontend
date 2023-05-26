import Swal from "sweetalert2";

const userRegistered = () => {
  Swal.fire({
    title: "Usuario Registrado",
    imageUrl: "https://media.tenor.com/FMR75MjeyWsAAAAi/deredere-anime.gif",
    imageHeight: "350",
    background: "#EDEDED",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
};
export default userRegistered;
