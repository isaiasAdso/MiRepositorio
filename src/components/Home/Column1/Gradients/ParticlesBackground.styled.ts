import { ThemeType } from "../../../../types/theme";

export const getStyles = (
  theme: ThemeType
): { Background: React.CSSProperties } => ({
  Background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -1,
    backgroundColor: theme.backgroundColor,
  },
});
