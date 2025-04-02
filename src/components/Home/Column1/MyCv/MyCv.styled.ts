import styled from "styled-components";

export const MyCvContainer = styled.div`
  width: 100%;
  height: 28%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 100ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.CardHover}; /* Asegúrate de tener esta variable en el theme */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.0);
  }

  @media screen and (max-width: 480px) {
    height: 80px;
   
  }
`;
export const MyCvHeader = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: end;

  .IconDownload {
    font-size: 20px;
    color: #3b82f6;
  }
`;

export const MyCvContent = styled.div`
  width: 90%;
  height: 58%;
  display: flex;
  align-items: center; /* Centra verticalmente */

  .Text1 {
    color: ${({ theme }) => theme.color};
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center; /* Asegura que el texto esté alineado */
    gap: 5px; /* Espacio entre las palabras */
  }

  .Text2 {
    color: #3b82f6;
    font-weight: bold;
  }
`;
