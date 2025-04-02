import { ThemeType } from "../../../../types/theme";

export const getStyles = (
  theme: ThemeType
): { Background: React.CSSProperties } => ({
  Background: {


    zIndex: -1,
    backgroundColor: theme.backgroundColor,
  },
});
