/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-login": "url(../src/imgs/bg-login.png)",
        "bg-register": "url(../src/imgs/bg-register.jpg)",
        "bg-dashboard": "url(../src/imgs/bg-dashboard.jpg)",
        "bg-deku-avatar": "url(../src/imgs/deku-avatar.jpg)",
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
        "450px": "450px",
      },
    },
  },
  plugins: [],
};
