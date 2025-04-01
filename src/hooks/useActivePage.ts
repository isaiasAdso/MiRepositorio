import { useContext } from "react";
import { ActivePageContext } from "../context/ActiveContext";

export function useActivePage() {
  return useContext(ActivePageContext);
}
