import {
  SkillsContainer,
  SkillsHeader,
  SkillsBody,
  SkillIcon,
} from "./Skills.styled";
import { GiSkills } from "react-icons/gi";
import { FaReact, FaNodeJs, FaPhp, FaGlobe } from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiDotnet,
  SiMongodb,
  SiIonic,
  SiQuasar,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: ".NET", icon: <SiDotnet />, color: "#512BD4" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "WebSockets", icon: <FaGlobe />, color: "#3b82f6" },
  { name: "Ionic", icon: <SiIonic />, color: "#3880FF" },
  { name: "Quasar", icon: <SiQuasar />, color: "#1976D2" },
];

export function Skills() {
  return (
    <SkillsContainer>
      <SkillsHeader>
        <div className="Text">
          Habilidades <GiSkills className="IconoArrow" />
        </div>
      </SkillsHeader>
      <SkillsBody>
        {skills.map((skill, index) => (
          <SkillIcon key={index} color={skill.color}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </SkillIcon>
        ))}
      </SkillsBody>
    </SkillsContainer>
  );
}
