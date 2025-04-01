import { MyHabilitiesContainer, MyHabilitiesHeader } from "./MyHabilities.styled";
import { FaReact, FaVuejs, FaNodeJs, FaDocker, FaGit } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiDotnet, SiPostman, SiJest } from "react-icons/si";
import { Tooltip } from "react-tooltip"; 

export function MyHabilities() {
  return (
    <MyHabilitiesContainer>
      <MyHabilitiesHeader>
        <div className="category">
          <div className="Title">Frontend Frameworks</div>
          <div className="icons">
            <FaReact data-tooltip-id="react" data-tooltip-content="React" size={30} color="#61DAFB" />
            <SiNextdotjs data-tooltip-id="next" data-tooltip-content="Next.js" size={30} color="#000" />
            <FaVuejs data-tooltip-id="vue" data-tooltip-content="Vue.js" size={30} color="#42b883" />
          </div>
        </div>
        
        <div className="category">
          <div className="Title">Backend Frameworks</div>
          <div className="icons">
            <FaNodeJs data-tooltip-id="node" data-tooltip-content="Node.js" size={30} color="#8cc84b" />
            <SiNestjs data-tooltip-id="nestjs" data-tooltip-content="NestJS" size={30} color="#E0234E" />
            <SiDotnet data-tooltip-id="dotnet" data-tooltip-content=".NET" size={30} color="#512BD4" />
          </div>
        </div>

        <div className="category">
          <div className="Title">Herramientas</div>
          <div className="icons">
            <FaDocker data-tooltip-id="docker" data-tooltip-content="Docker" size={30} color="#2496ED" />
            <FaGit data-tooltip-id="git" data-tooltip-content="Git" size={30} color="#F05032" />
            <SiPostman data-tooltip-id="postman" data-tooltip-content="Postman" size={30} color="#FF6C37" />
            <SiJest data-tooltip-id="jest" data-tooltip-content="Jest" size={30} color="#C21325" />
          </div>
        </div>

   
      </MyHabilitiesHeader>

      {/* Tooltips con place="bottom" para que aparezcan debajo del ícono */}
      <Tooltip id="react" place="bottom" delayShow={200} />
      <Tooltip id="next" place="bottom" delayShow={200} />
      <Tooltip id="vue" place="bottom" delayShow={200} />
      <Tooltip id="node" place="bottom" delayShow={200} />
      <Tooltip id="nestjs" place="bottom" delayShow={200} />
      <Tooltip id="dotnet" place="bottom" delayShow={200} />
      <Tooltip id="docker" place="bottom" delayShow={200} />
      <Tooltip id="git" place="bottom" delayShow={200} />
      <Tooltip id="postman" place="bottom" delayShow={200} />
      <Tooltip id="jest" place="bottom" delayShow={200} />

    </MyHabilitiesContainer>
  );
}
