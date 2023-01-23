/** @type {import('tailwindcss').Config} */

module.exports = {
   content: [
      "./src/pages/*.html",
      "./src/modules/*.js",
      "./src/components/*.html",
   ],
   important: true,
   darkMode: "class",
   theme: {
      screens: {
         xs: "540px",
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1536px",
      },
      fontFamily: {
         nunito: ["'Roboto', sans-serif"],
      },
      container: {
         center: true,
      },
      extend: {
         colors: {
         },
         zIndex: {
            1: "1",
            2: "2",
            3: "3",
            999: "999",
         },
      },
   },
};
