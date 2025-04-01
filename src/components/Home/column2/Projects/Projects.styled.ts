import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 48%;
  height: 100%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
 

  cursor: pointer;
  transition: 100ms ease-out;


  &:hover {
    background-color: ${({ theme }) =>
      theme.CardHover}; /* Asegúrate de tener esta variable en el theme */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }


  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;
export const ProjectsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;

  .Text {
    width: 90%;
    margin-top: 15px;
    color: ${({ theme }) => theme.color};
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: space-between;
  }

  .IconoArrow {
    color: #3b82f6;
    font-size: 20px;
  }
`;

export const ProjectsContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .ContentProjects {
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow-y: auto; /* Habilita el scroll vertical */
    scrollbar-width: none;

    .ProjectCard {
      flex: none;
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      background-color: #252d47;
      z-index: 2;

      &:hover {
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
        z-index: 2;

        .Icono{
          color: #3b82f6;
        }
      }

      .ProjectName {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
      }
    }
  }
`;
