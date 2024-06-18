/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    boxShadow: {
      "custom-light": "0px 2px 30px 0px #1D34330F",
    },
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        jaini: ["Jaini", "sans-serif"],
      },
      colors: {
        primary: "#131111",
        secondary: "#292929",
        black: "#000000",
        buttonbg: "#DBDBDB",
        button: "#1B1F27",
        footer: "#666666",
        social: "#CDCDCD",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
