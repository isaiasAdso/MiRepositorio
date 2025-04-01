import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
  
`;

export const ProfileHeader = styled.div`
  width: 100%;
height: 40%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  overflow: hidden; 

  img {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;

export const ProfileContent = styled.div`
  width: 90%;
  height: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    height: auto;
  }
`;

export const ProfileTitle = styled.div`
  font-size: 28px;
  height: auto;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.color};
  padding-bottom: 10px;
  border-bottom: 2px solid ${({ theme }) => theme.color};
`;
export const ProfileDescription = styled.div`
  font-size: 18px;
  line-height: 1.6;
  text-align: justify;
  color: ${({ theme }) => theme.color};
  min-height: 300px;
  height: 300px;
  overflow-y: auto;
  padding-right: 10px;

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.CardData};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.cardGitTransparente};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.primary};
  }

  /* 🔹 Estilos para resaltar palabras clave */
  strong {
    color: ${({ theme }) => theme.primary}; /* Usa el color primario del tema */
    font-weight: bold;
  }

  .tech {
    color:rgb(255, 217, 0); /* Naranja para lenguajes de programación */
    font-weight: bold;
  }

  .important {
    color:rgb(175, 76, 76); /* Verde para conceptos clave */
    font-weight: bold;
  }
`;


