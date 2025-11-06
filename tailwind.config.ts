import { heroui } from "@heroui/react"; // or if plugin separately maybe from @heroui/theme/plugin

export default {
  darkMode: "class", // so theme switching uses class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // any additional tailwind customizations
    },
  },
  plugins: [
    heroui({
      // plugin options
      prefix: "heroui",          // default prefix
      addCommonColors: false,    // enable if you want tailwind default colors replaced
      defaultTheme: "light",
      defaultExtendTheme: "dark",
      themes: {
        light: {
          colors: {
            primary: {
              50: "#EAEFFF",
              100: "#D2DFFF",
              200: "#ADBFFB",
              300: "#829EFF",
              400: "#597BFF",
              500: "#3454FF",
              600: "#2A43E6",
              700: "#1D2DB4",
              800: "#0F197B",
              900: "#040533",
            },
            // define secondary, success, warning, danger etc.
            background: "#FFFFFF",
            foreground: "#111111",
          },
          layout: {
            radius: {
              small: "0.25rem",
              medium: "0.5rem",
              large: "0.75rem",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
        dark: {
          colors: {
            primary: {
              50: "#EDEBFF",
              100: "#CFC9FF",
              200: "#A9A4FF",
              300: "#7F7AFF",
              400: "#5B58FF",
              500: "#3A3BFF",
              600: "#2C2DCC",
              700: "#1C1D99",
              800: "#0D0D66",
              900: "#060633",
            },
            // other semantic colors
            background: "#111111",
            foreground: "#EAEAEA",
          },
          layout: {
            radius: {
              small: "0.25rem",
              medium: "0.5rem",
              large: "0.75rem",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
