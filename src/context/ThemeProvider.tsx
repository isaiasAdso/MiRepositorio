import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { lightTheme, darkTheme } from "../styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState(true); // true = dark, false = true

  const theme = themeName ? darkTheme : lightTheme; // Cambia el tema según el valor de themeName
  
  const toggleTheme = () => {
    setThemeName((prevTheme) => !prevTheme); // Alternar entre true y false
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
