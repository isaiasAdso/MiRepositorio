import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ProjectsContainer,
  CardProject,
  HeaderCard,
  MainCard,
  ButtonsContainer,
  WorkspaceContainer,
} from "./projects.styled";
import ChatDev from "../../assets/ChatDev.png";
import { TbBrandReactNative } from "react-icons/tb";
import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const CountdownCard = styled.div`
  background: #222;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  .countdown-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .countdown-timer {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;

export default function Projects() {
  // Define la fecha de lanzamiento del próximo proyecto
  const fechaLanzamiento = new Date("2025-04-07T00:00:00").getTime();

  const [tiempoRestante, setTiempoRestante] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const ahora = new Date().getTime();
    const diferencia = fechaLanzamiento - ahora;
    
    if (diferencia <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }
    
    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((diferencia % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempoRestante(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const proyectos = [
    {
      id: 1,
      nombre: "ChatDev",
      descripcion:
        "ChatDev es una aplicación de chat que permite a los usuarios interactuar en tiempo real.",
      imagen: ChatDev,
      tecnologias: [
        { nombre: "React Native", icono: <TbBrandReactNative style={{ color: "#61DBFB" }} /> },
        { nombre: "JavaScript", icono: <SiJavascript style={{ color: "#F7DF1E" }} /> },
        { nombre: "Node.js", icono: <FaNodeJs style={{ color: "#83CD29" }} /> },
        { nombre: "Express.js", icono: <SiExpress style={{ color: "#F7DF1E" }} /> },
        { nombre: "MongoDB", icono: <SiMongodb style={{ color: "#4DB33D" }} /> },
      ],
    },
    
  ];

  return (
    <ProjectsContainer>
      {proyectos.map((proyecto) => (
        <CardProject key={proyecto.id}>
          <HeaderCard>
            <div className="ContenedorImg">
              <img src={proyecto.imagen} alt={proyecto.nombre} className="Image" />
            </div>
          </HeaderCard>

          <MainCard>
            <div className="PadreDescripcionCard">
              <div className="Title">{proyecto.nombre}</div>
              <div className="Description">{proyecto.descripcion}</div>
            </div>

            <WorkspaceContainer>
              <div className="Tecnologias">Tecnologías:</div>
              <div className="Lenguajes">
                {proyecto.tecnologias.map((tecnologia, index) => (
                  <div key={index} title={tecnologia.nombre}>
                    {tecnologia.icono}
                  </div>
                ))}
              </div>
            </WorkspaceContainer>

            <ButtonsContainer>
              <button className="code">Code &lt;/&gt;</button>
              <button className="run">Run ▶</button>
            </ButtonsContainer>
          </MainCard>
        </CardProject>
      ))}

      <CountdownCard>
        <div className="countdown-title">Próximo lanzamiento en:</div>
        <div className="countdown-timer">
          {tiempoRestante.dias}d : {tiempoRestante.horas}h : {tiempoRestante.minutos}m : {tiempoRestante.segundos}s
        </div>
      </CountdownCard>
    </ProjectsContainer>
  );
}