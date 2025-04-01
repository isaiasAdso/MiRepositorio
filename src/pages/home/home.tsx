import {
  Container,
  ColumnasOne,
  Columnas2,
  HeaderColumn1,
  ContenedorImg,
  CardImg,
  ContenedorInfoPersonal,
  ContenedornName,
  ContenedorAcerdade,
  MainContentColum1,
  Secion1Column1,
  Secion2Column1,
  HeaderColumn2,
  MainContentColum2

} from "./home.styled.ts";
import {Timeline} from "../../components/Home/column2/Timeline/Timeline.tsx";
import 
  TimeData
 from "../../components/Home/column2/Timeline/TimeData.ts";
import img from "../../assets/143145947.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ContactMe } from "../../components/Home/Column1/ContactMe/ContactMe.tsx";
import Education from "../../components/Home/Column1/Education.ts/Education.tsx";
import { MyCv } from "../../components/Home/Column1/MyCv/MyCv.tsx";
import { Projects } from "../../components/Home/column2/Projects/Projects.tsx";
import { Skills} from "../../components/Home/column2/Skills/Skills.tsx";
import { HomeLogic} from "./home.logic.ts";


export default function Home() {

  const { UrlProjects } = HomeLogic();
  return (
    <Container>
      <ColumnasOne>
        <HeaderColumn1>
          <ContenedorImg>
            <CardImg style={{ backgroundImage: `url(${img})` }}></CardImg>
          </ContenedorImg>
          <ContenedorInfoPersonal>
            <ContenedornName>
              <div className="Name">Isaias Caballero </div>

              <div className="Titulo"> Desarrollador Full Stack</div>
            </ContenedornName>
            <ContenedorAcerdade  onClick={UrlProjects}>
              <div className="AcercaDe">Acerca de mi</div>
              <div className="InformacionDemi">
                Soy un desarrollador apasionado por la tecnología y la
                programación. Me encanta aprender y enfrentar nuevos desafíos.
                Siempre estoy buscando mejorar mis habilidades y contribuir a
                proyectos interesantes.
              </div>

              <FaArrowUpRightFromSquare className="IconoArrow" />
            </ContenedorAcerdade>
          </ContenedorInfoPersonal>
        </HeaderColumn1>
        <MainContentColum1>
          <Secion1Column1>
            <Education />
          </Secion1Column1>
          <Secion2Column1>
            <ContactMe />
            <MyCv />
          </Secion2Column1>
        </MainContentColum1>
      </ColumnasOne>

      <Columnas2>
        <HeaderColumn2>
          <Timeline experiences={TimeData} />
        </HeaderColumn2>
        <MainContentColum2>
        <Projects />
        <Skills />
        </MainContentColum2>
      </Columnas2>
    </Container>
  );
}
