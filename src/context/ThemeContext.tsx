import { createContext } from "react";
import { darkTheme } from "../styles/theme";

export const ThemeContext = createContext({
  theme: darkTheme,
  themeName: true,
  toggleTheme: () => {},
});
