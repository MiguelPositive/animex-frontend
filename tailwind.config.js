/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "url(../src/imgs/bg-login.avif)",
        "bg-register": "url(../src/imgs/bg-register.avif)",
        "bg-dashboard": "url(../src/imgs/bg-dashboard.jpg)",
        "bg-deku-avatar": "url(../src/imgs/deku-avatar.jpg)",
        "hands-up": "url(../src/imgs/hands-up.png)",
        loader: "url(../src/imgs/loader.png)",
        dance: "url(https://media.tenor.com/UkK1G2I0EisAAAAi/ast-anime.gif)",
        trying:
          "url(https://i.pinimg.com/550x/03/d2/bc/03d2bc56b38b513d3514b46947cf20d5.jpg)",
      },

      boxShadow: {
        global:
          "6px 4px 5px rgba(0, 0, 0, 0.4), -6px 4px 5px rgba(0, 0, 0, 0.4)",
        "global-light":
          "6px 4px 5px rgba(0, 0, 0, 0.2), -6px 4px 5px rgba(0, 0, 0, 0.2)",
        "global-dark":
          "6px 4px 10px 5px rgba(0, 0, 0, 0.6), -6px 4px 10px 5px rgba(0, 0, 0, 0.6)",
      },

      fontFamily: {
        poppins: "'Poppins', sans-serif",

        sed: "'Sedgwick Ave Display', cursive;",
      },

      screens: {
        "400px": "400px",
        "510px": "510px",
        "450px": "450px",
        "775px": "775px",
      },
    },
  },
  plugins: [],
};
