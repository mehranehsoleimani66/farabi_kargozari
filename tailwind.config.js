/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        branch:
          "url('https://irfarabi.com/back-farabixo-3x.dff02d57966f9aa0ae66.jpg')",
        verticalPic:
          "url('https://irfarabi.com/m-nexo.7dfdcc2f297ba17b676a.png')",
        horizintalPic:
          "url('https://irfarabi.com/nexo.2f9b5f28f3f51db1a5ac.png')"
      }
    },
    fontFamily: { bIranZamin: "Byekan" }
  },
  plugins: []
};
