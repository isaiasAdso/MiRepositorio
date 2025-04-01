import type { ThemeType } from "../types/theme";

export const lightTheme: ThemeType = {
  backgroundColor: "#ffffff",
  gradientColors: [
    "rgba(200, 200, 255, 0.4)",
    "rgba(180, 180, 255, 0.2)",
    "rgba(255, 255, 255, 0)",
    // Primer gradiente (sombras suaves en fondo claro)
    "rgba(255, 255, 255, 0.4)",
    "rgba(255, 255, 255, 0.1)",
    "rgba(255, 255, 255, 0)",

    // Segundo gradiente (tono azulado claro)
    "rgba(200, 200, 255, 0.3)",
    "rgba(180, 190, 250, 0.1)",
    "rgba(255, 255, 255, 0)",

    // Tercer gradiente (tonos lilas claros)
    "rgba(190, 160, 220, 0.2)",
    "rgba(220, 200, 240, 0.05)",
    "rgba(255, 255, 255, 0)",

    // Efecto iluminación que sigue al mouse
    "rgba(14, 120, 174, 0.3)",
    "rgba(200, 220, 255, 0.2)",
    "rgba(11, 71, 176, 0)",
  ],
  // Color del mouse Pointer
  gradientMouseColor: ["rgba(255, 255, 255, 0)", "rgba(14, 120, 174, 0.3)"],
  color: "#000000",
  CardTranparente: "rgba(255, 255, 255, 0.8)",
  BackgroundNavbar: "#252d47", // Color de fondo del Navbar
  ActiveButtonNav: "#ffffff", // Color del botón activo en el Navbar
  CardData: "rgba(214, 214, 255, 0.8)",
  CardHover: "rgba(255, 255, 255, 0.8)",
  SecundaryText: "#666",
  CompanyText: "#333",
  DescripcionCompanyText: "#555",
  BotonRun: "rgb(255, 255, 255)",
  FondoGit: "rgba(183, 180, 180, 0.8)",
  cardGitTransparente: "rgba(214, 214, 255, 0.8)",
};

export const darkTheme: ThemeType = {
  backgroundColor: "#0a0a0a",
  gradientColors: [
    "rgba(0, 0, 0, 0.4)", // 0
    "rgba(13, 23, 49, 0.1)", // 1
    "rgba(0, 0, 0, 0)", // 2
    // Primer gradiente (sombras suaves)
    "rgba(0, 0, 0, 0.4)", // 3
    "rgba(0, 0, 0, 0.1)", // 4
    "rgba(0, 0, 0, 0)", // 5
    // Segundo gradiente (tono azulado)
    "rgba(65, 65, 65, 0.3)", // 6
    "rgba(13, 23, 49, 0.1)", // 7
    "rgba(0, 0, 0, 0)", // 8
    // Tercer gradiente (tonos púrpuras)
    "rgba(51, 9, 77, 0.2)", // 9
    "rgba(32, 3, 45, 0.05)", // 10
    "rgba(0, 0, 0, 0)", // 11
    // Efecto iluminacion que sigue al mouse
    "rgba(255, 255, 255, 0.15)", // 12
    "rgba(150, 150, 255, 0.1)", // 13
    "rgba(0, 0, 0, 0)", // 14
  ],
  gradientMouseColor: ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0)"],
  color: "#ffffff",
  CardTranparente: "rgba(27, 28, 33, 0.8)",
  BackgroundNavbar: "rgba(27, 28, 33, 0.8)",
  ActiveButtonNav: "transparent", // Color del botón activo en el Navbar
  CardData: "rgba(49, 46, 47, 1.0)",
  CardHover: "rgba(27, 28, 33, 0.8)",
  SecundaryText: "#fff",
  CompanyText: "#fff",
  DescripcionCompanyText: "#fff",
  BotonRun: "rgb(0, 66, 234)",
  FondoGit: "rgba(183, 180, 180, 0.8)",
  cardGitTransparente: "rgba(27, 28, 33, 0.8)",
};
