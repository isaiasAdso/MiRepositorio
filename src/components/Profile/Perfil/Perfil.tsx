import {
    PerfilContainer,
    Fotoprofile,
    LenguajesContainer,
  } from "./Perfil.styled";
  import foto from "../../../assets/143145947.png";
  import { FaJs, FaNodeJs, FaPhp, FaPython, FaDatabase } from "react-icons/fa"; 
  import { TbBrandTypescript } from "react-icons/tb";
  import { SiSharp, SiMongodb } from "react-icons/si";
  import { Tooltip } from "react-tooltip"; // Importar Tooltip
  
  export function Perfil() {
    return (
      <PerfilContainer>
        <Fotoprofile>
          <img src={foto} alt="Foto de perfil" />
        </Fotoprofile>
  
        <LenguajesContainer>
          <div className="HeaderLenguajes">Mis Lenguajes</div>
          <div className="ContainerLeng">
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="JavaScript">
              <FaJs color="#f7df1e" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="TypeScript">
              <TbBrandTypescript color="#3178c6" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="C#">
              <SiSharp color="#68217A" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="PHP">
              <FaPhp color="#4F5B93" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="Node.js">
              <FaNodeJs color="#8cc84b" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="Python">
              <FaPython color="#3776AB" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="SQL">
              <FaDatabase color="#f29111" size={30} />
            </div>
            <div className="lenguaje" data-tooltip-id="tooltip" data-tooltip-content="NoSQL">
              <SiMongodb color="#4DB33D" size={30} />
            </div>
          </div>
        </LenguajesContainer>
  
        {/* Tooltip Global */}
        <Tooltip id="tooltip" place="bottom" style={{ backgroundColor: "#333", color: "#fff", borderRadius: "5px" }} />
      </PerfilContainer>
    );
  }