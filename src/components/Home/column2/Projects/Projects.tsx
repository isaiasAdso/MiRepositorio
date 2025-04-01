import {
  ProjectsContainer,
  ProjectsHeader,
  ProjectsContent,
} from "./Projects.styled";
import { GoArrowUpRight } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaLaptopCode, FaShoppingCart, FaComments } from "react-icons/fa";
import { useProjectsLogic } from "./Projects.logic";

const projects = [
  {
    id: 1,
    name: "Sistema de Gestión",
    icon: <FaLaptopCode />, // Ícono de laptop
  },
  {
    id: 2,
    name: "E-commerce",
    icon: <FaShoppingCart />, // Ícono de carrito de compras
  },
  {
    id: 3,
    name: "Chat en Tiempo Real",
    icon: <FaComments />, // Ícono de chat
  },
  
];

export function Projects() {
  const { UrlProjects, GoProject } = useProjectsLogic();

  return (
    <ProjectsContainer onClick={UrlProjects}>
      <ProjectsHeader>
        <div className="Text">
          Mis Proyectos <GoArrowUpRight className="IconoArrow" />
        </div>
      </ProjectsHeader>
      <ProjectsContent>
        <div className="ContentProjects">
          {projects.map((project) => (
            <div
              key={project.id}
              className="ProjectCard"
              onClick={(event) => {
                event.stopPropagation(); // Detiene la propagación del evento
                GoProject(project.id); // Llama a la función Hola sin redirigir
              }}
            >
              <div className="ProjectName">
                {project.icon}{" "}
                {/* Aquí se muestra el ícono único de cada proyecto */}
                {project.name}
                <div className="Icono">
                  <FaExternalLinkAlt />
                </div>
              </div>
            </div>
          ))}
        </div>
      </ProjectsContent>
    </ProjectsContainer>
  );
}
