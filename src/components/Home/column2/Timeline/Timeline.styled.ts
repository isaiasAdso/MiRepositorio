import styled from "styled-components";

// Contenedor principal de la línea del tiempo
export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  position: relative;

  @media screen and (max-width: 480px) {
    height: auto;
  }
`;
export const HeaderTimeline = styled.div`
height: 50px;
width: 100%;

display: flex;
align-items: center;
justify-content: center;
.Experience{
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;

    font-size: 20px;
    font-weight: 600;


}


`;
// Línea horizontal
export const TimelineLine = styled.div`
  position: relative;
  height: 4px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color};
  width: 100%;

  @media screen and (max-width: 480px) {
    height: 0;
    width: 0;
  }

`;

// Contenedor para los elementos de la línea del tiempo
export const TimelineItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Contenedor de cada elemento de la línea del tiempo
export const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 10px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    width: 100%;
    align-items: flex-start;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (max-width: 480px) {
      padding: 05px;
      margin-bottom: 10px;
  }
  }
`;

// Círculo que conecta con la línea horizontal
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #4a89dc;
  border: 4px solid ${({ theme }) => theme.color};
  border-radius: 50%;
  z-index: 1;
  margin-top: 5px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    margin-bottom: 10px;

  }
  @media screen and (max-width: 480px) {
    width: 0;
    height: 0;
    border: none;
  }
`;

// Contenido de cada elemento
export const ItemContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
  width: 98%;
  padding: 20px;
  }
`;

// Estilos para el período de tiempo
export const Period = styled.span`
    font-size: 12px;
  color: ${({ theme }) => theme.secondaryText};
  margin-bottom: 5px;
  display: block;
`;

// Estilos para el nombre de la empresa
export const Company = styled.h3`
  margin: 5px 0;
  color: ${({ theme }) => theme.CompanyText};
`;

// Estilos para el cargo
export const Position = styled.h4`
  margin: 5px 0;
  color: #4a89dc;
  font-weight: 500;
`;

// Estilos para la descripción
export const Description = styled.p`
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.DescripcionCompanyText};
`;
