import { useThemeContext } from "../../hooks/UseThemeContext";
import { MaterialUISwitch } from "./SwitchToogle.styled"; // Importamos el switch estilizado

const SwitchToogle = () => {
  const { toggleTheme, themeName } = useThemeContext();

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <MaterialUISwitch onChange={toggleTheme} checked={themeName} />
    </div>
  );
};

export default SwitchToogle;
