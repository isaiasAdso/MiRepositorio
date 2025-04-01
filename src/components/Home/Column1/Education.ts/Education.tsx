import { FaGraduationCap } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import {
  EducationContainer,
  EducationHeader,
  EducationTitle,
  EducationList,
  EducationItem,
  EducationSchool,
  EducationPeriod,
  EducationDegree,
  EducationGrade,
  HeaderIcon,
} from "./Education.styled"

const Education = () => {
  const educationData = [
    {
      school: "Sena",
      period: "Abril 2022 - Jul 2024",
      degree: "Analisis y desarrollo de Software",
      grade: "Certificado ",
    },
    {
        school: "CUN",
        period: "Abril 2024",
        degree: "Ingenieria de Sistemas",
        grade: "En curso", 
      },

  ]

  return (
    <EducationContainer>
      <EducationHeader>
        <EducationTitle>My Education</EducationTitle>
        <HeaderIcon>
          <FaGraduationCap />
        </HeaderIcon>
      </EducationHeader>

      <EducationList>
        {educationData.map((item, index) => (
          <EducationItem key={index}>
            <IoIosArrowForward className="arrow-icon" />
            <div className="education-content">
              <EducationSchool>{item.school}</EducationSchool>
              <EducationPeriod>{item.period}</EducationPeriod>
              {item.degree && <EducationDegree>{item.degree}</EducationDegree>}
              {item.grade && <EducationGrade>{item.grade}</EducationGrade>}
            </div>
          </EducationItem>
        ))}
      </EducationList>
    </EducationContainer>
  )
}

export default Education

