import {
  ProfileContainer,
  ProfileHeader,
  ProfileContent,
  ProfileTitle,
  ProfileDescription,
} from "./HistoriaPersonal.styled";
import banner from "../../../assets/banner.png";

export function HistoriaPersonal() {
  return (
    <ProfileContainer>
      <ProfileHeader>
        <img src={banner} alt="banner" />
      </ProfileHeader>
      <ProfileContent>
        <div className="ContenedorTexto">
          <ProfileTitle>
            <div className="Titulo">Historia Personal</div>
          </ProfileTitle>
          <ProfileDescription>
            <p>
              Inicié mi carrera profesional estudiando un{" "}
              <strong className="important">
                Tecnólogo en Análisis y Desarrollo de Software
              </strong>{" "}
              en el <strong className="important">SENA de Colombia</strong>.
              Durante este tiempo, obtuve mis primeras experiencias en
              programación, trabajando con <strong className="tech">C++</strong>{" "}
              como lenguaje principal, desarrollando proyectos de lógica de
              programación para crear{" "}
              <strong className="important">aplicaciones de escritorio</strong>.
            </p>
            <p>
              Después, me especialicé en el{" "}
              <strong className="important">
                desarrollo de aplicaciones web
              </strong>{" "}
              con <strong className="tech">HTML, CSS y JavaScript</strong>.
              Comencé realizando proyectos de aprendizaje, creando{" "}
              <strong className="important">interfaces de usuario</strong> y{" "}
              <strong className="important">aplicaciones web dinámicas</strong>.
            </p>
            <p>
              Luego aprendí <strong className="tech">PHP puro</strong> y{" "}
              <strong className="tech">MySQL</strong>, creando bases de datos y
              aplicaciones web dinámicas. Con este conocimiento, comencé a
              indagar un poco sobre el{" "}
              <strong className="important">desarrollo full stack</strong>.
            </p>
            <p>
              Luego tuve la oportunidad de trabajar en una{" "}
              <strong className="important">firma de abogados privada</strong>,
              donde desarrollé varias herramientas de software, incluidos{" "}
              <strong className="important">
                sistemas de gestión de archivos
              </strong>
              , <strong className="important">generadores de contratos</strong>{" "}
              y <strong className="important">liquidaciones financieras</strong>
              .
            </p>
            <p>
              Durante mi tiempo en la firma, aprendí a{" "}
              <strong className="important">trabajar en equipo</strong>, a{" "}
              <strong className="important">comunicarme con clientes</strong>, a{" "}
              <strong className="important">resolver problemas</strong> y a
              aprender nuevas tecnologías.
            </p>
            <p>
              Aprendí a trabajar con frameworks como{" "}
              <strong className="tech">React, Node.js</strong> y{" "}
              <strong className="tech">Express</strong>, y a crear{" "}
              <strong className="important">
                interfaces de usuario responsivas y dinámicas
              </strong>
              , desarrollando{" "}
              <strong className="important">aplicaciones web y móviles</strong>.
            </p>
            <p>
              Actualmente, estoy en busca de una{" "}
              <strong className="important">oportunidad de trabajo</strong> en
              el campo de la <strong className="important">programación</strong>
              , donde pueda aplicar mis habilidades y aprender nuevas
              tecnologías.
            </p>
          </ProfileDescription>
        </div>
      </ProfileContent>
    </ProfileContainer>
  );
}
