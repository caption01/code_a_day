import React, { createContext } from "react";

const themeApp = {
  light: {
    color: "#00D0E5",
    fontSizeBase: "20px"
  },
  dark: {
    color: "#D100E5",
    fontSizeBase: "20px"
  }
};

export const ThemeContext = createContext({
  fontSizeBase: "20px",
  color: "#00D0E5"
});

export const themeSelector = themeKey => {
  switch (themeKey) {
    case "light":
      return themeApp.light;

    case "dark":
      return themeApp.dark;

    default:
      return themeApp.light;
  }
};

const ThemeProvider = ({ children, themeApp }) => {
  const { fontSizeBase, color } = themeApp;

  return (
    <ThemeContext.Provider value={{ fontSizeBase, color }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
