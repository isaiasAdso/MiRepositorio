import {
  MyCualitieContainer,
  Title,
  Subtitle,
  QualitiesWrapper,
  QualityTag,
} from "./MyCualitie.styled";

export function MyCualitie() {
  return (
    <MyCualitieContainer>
      <Title>✨ Mi Personalidad</Title>
      <Subtitle>Conóceme como persona</Subtitle>

      <QualitiesWrapper>
        <QualityTag color="#E63946" rotate="-10deg" top="5%" left="1%">
          🧩 Resolutivo
        </QualityTag>
        <QualityTag color="#F4A261" rotate="15deg" top="5%" left="51%">
          🎨 Creativo
        </QualityTag>
        <QualityTag color="#2A9D8F" rotate="-10deg" top="25%" left="1%">
          🤝 Trabajo en Equipo
        </QualityTag>
        <QualityTag color="#264653" rotate="12deg" top="25%" left="51%">
          ⚡ Eficacia
        </QualityTag>
        <QualityTag color="#8E44AD" rotate="-12deg" top="46%" left="1%">
          😊 Amigable y Social
        </QualityTag>
        <QualityTag color="#44ad70" rotate="12deg" top="46%" left="51%">
          📚 Autodidacta
        </QualityTag>
      </QualitiesWrapper>
    </MyCualitieContainer>
  );
}
