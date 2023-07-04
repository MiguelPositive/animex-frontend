
import Swal from "sweetalert2"
export const animeRegistered = () => {

    Swal.fire({  title: "Anime agregado",
    imageUrl: "https://media.tenor.com/V9CD2EjxQkEAAAAi/tohru-cute.gif",
    imageHeight: "350",
    background: "#EDEDED",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },});

}