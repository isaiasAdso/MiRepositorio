// ActivePageProvider.tsx
import { useState, ReactNode } from "react";
import { ActivePageContext } from "./ActiveContext";

export function ActivePageProvider({ children }: { children: ReactNode }) {
  const [activePage, setActivePage] = useState("home");

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
}
