
import Swal from "sweetalert2"
export const animeUpdated = () => {

    Swal.fire({  title: "Anime actualizado",
    imageUrl: "https://media.tenor.com/BSdQMTdokbYAAAAi/button-push.gif",
    imageHeight: "350",
    background: "#EDEDED",
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },});

}