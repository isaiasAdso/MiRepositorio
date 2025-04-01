// ActivePageContext.tsx
import { createContext } from "react";

interface ActiveContextType {
  activePage: string;
  setActivePage: (page: string) => void;
}

const defaultValue: ActiveContextType = {
  activePage: "home",
  setActivePage: () => {}, // Función vacía para evitar errores
};

export const ActivePageContext = createContext<ActiveContextType>(defaultValue);
