import type React from "react"
import {
  TimelineContainer,
  TimelineLine,
  TimelineItemsContainer,
  ItemContainer,
  Circle,
  ItemContent,
  Period,
  Company,
  Position,
  Description,
  HeaderTimeline
} from "./Timeline.styled"
import type { WorkExperience } from "../../../../types/workExperience"

// Componente para cada elemento de la línea del tiempo
const TimelineItem: React.FC<{ experience: WorkExperience }> = ({ experience }) => {
  return (
    <ItemContainer>
      <Circle />
      <ItemContent>
        <Period>
          {experience.startDate} - {experience.endDate || "Presente"}
        </Period>
        <Company>{experience.company}</Company>
        <Position>{experience.position}</Position>
        <Description>{experience.description}</Description>
      </ItemContent>
    </ItemContainer>
  )
}

// Componente principal de la línea del tiempo
interface TimelineProps {
  experiences: WorkExperience[]
}

export const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <TimelineContainer>
      <HeaderTimeline>
        <div className="Experience">Experiencia </div>
      </HeaderTimeline>
      <TimelineLine />
      <TimelineItemsContainer>
        {experiences.map((experience, index) => (
          <TimelineItem key={index} experience={experience} />
        ))}
      </TimelineItemsContainer>
    </TimelineContainer>
  )
}
