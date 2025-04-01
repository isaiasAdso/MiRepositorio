import { useThemeContext } from "../../hooks/UseThemeContext";
import { MaterialUISwitch } from "./SwitchToogle.styled"; // Importamos el switch estilizado

const SwitchToogle = () => {
  const { toggleTheme, themeName } = useThemeContext();

  return (
    <div style={{
      position: "absolute",
      top: 20,
      right: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <MaterialUISwitch onChange={toggleTheme} checked={themeName} />
    </div>
  );
};

export default SwitchToogle;
