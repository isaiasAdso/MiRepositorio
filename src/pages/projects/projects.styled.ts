import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
  padding: 20px;
  scrollbar-width: none;
  color: ${({ theme }) => theme.color};

  width: 100%;
  height: 90%;
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
        height: 80%;
  }


`;

export const CardProject = styled.div`
  width: 80%;
  height: 290px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #252d47;
  border-radius: 20px;
  gap: 15px;

  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    flex-direction: column;
  }
`;

export const HeaderCard = styled.div`
  width: 25%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    height: auto;
    padding: 10px;
  }

  .ContenedorImg {
    width: 95%;
    height: 100%;
    position: relative;

    @media screen and (max-width: 480px) {
      height: 150px;
      width: 150px;
    }
    @media screen and (max-width: 768px) {
      height: 200px;
      width: 200px;
    }

    .Image {
      width: 100%;
      height: 100%;
      background-size: cover;
      border-radius: 8px;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s ease-in-out;
    }

    &:hover .Image {
      transform: scale(1.05);
      box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
    }
  }
`;

export const MainCard = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: auto;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    height: auto;
    padding: 10px;
  }

  .PadreDescripcionCard {
    width: 90%;
    height: 40%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .Title {
    font-size: 28px;
    font-weight: 600;
    color: #fff;
  }

  .Description {
    font-size: 12px;
    font-weight: 300;
    color: #d3d3d3;

    font-size: 14px;
  }
`;
export const WorkspaceContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;

  gap: 10px;
  .Tecnologias {
    color: #fff;
  }
  .Lenguajes {
    display: flex;
    gap: 15px;
    font-size: 30px;

    .IconoTecnologias {
      transition: transform 0.3s ease;
    }

    .IconoTecnologias:hover {
      transform: scale(1.2);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 20%;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }

  button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  .code {
    background: ${({ theme }) => theme.BotonRun};
    color: ${({ theme }) => theme.color};
  }

  .run {
    background: ${({ theme }) => theme.BotonRun};
    color: ${({ theme }) => theme.color};
  }

  .code:hover,
  .run:hover {
    transform: scale(1.1);
  }
`;
