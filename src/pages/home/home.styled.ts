import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) =>
    theme.CardTranparente}; /* Color oscuro con transparencia */
  color: ${({ theme }) => theme.color};
  width: 80%;
  height: 90%;

  border-radius: 20px;


  @media screen and (max-width: 1024px) {
    height: 500px;
    padding: 15px;
  }

  @media screen and (max-width: 768px) {
    height: 700px;
    padding: 10px;
    flex-direction: column;
    overflow-y: hidden;
  }

  @media screen and (max-width: 480px) {
    height: 600px;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px;
    border-radius: 10px;
  }
`;

export const ColumnasOne = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;

  gap: 10px;

  @media screen and (max-width: 768px) {
    height: auto;
    flex-wrap: wrap; /* Permite que los elementos se ajusten */
    justify-content: flex-start;
  }
  @media screen and (max-width: 480px) {
    height: auto; /* Permite que el tamaño dependa del contenido */
    min-height: auto;
    flex-wrap: wrap; /* Permite que los elementos se ajusten */
    justify-content: flex-start;
  }
`;

export const HeaderColumn1 = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ContenedorImg = styled.div`
  width: 49%;
  height: 100%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    height: 290px;
  }
`;
export const CardImg = styled.div`
  width: 80%;
  height: 80%;
  background-size: cover; /* Asegura que cubra todo */

  @media screen and (max-width: 480px) {
    height: 50%;
    background-size: cover; /* Asegura que cubra todo */
  }
`;

export const ContenedorInfoPersonal = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ContenedornName = styled.div`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Name {
    color: ${({ theme }) => theme.color};
    font-size: 25px;
    font-weight: 600;
    width: 80%;

    display: flex;
    align-items: center;
  }
  .Titulo {
    color: ${({ theme }) => theme.color};
    font-size: 12px;
    width: 80%;
    display: flex;
    align-items: center;
  }
`;

export const ContenedorAcerdade = styled.div`
  width: 100%;
  height: 65%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: 100ms ease-out;
  &:hover {
    background-color: ${({ theme }) =>
      theme.CardHover}; /* Asegúrate de tener esta variable en el theme */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  .AcercaDe {
    color: ${({ theme }) => theme.color};
    font-size: 20px;
    font-weight: 600;
    width: 80%;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .InformacionDemi {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limita a 3 líneas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    width: 80%;
    margin-top: 10px;
    align-items: center;
  }
  .IconoArrow {
    color: #3b82f6;
    position: absolute;
    right: 20px;
    top: 20px;
  }

  @media screen and (max-width: 480px) {
    .AcercaDe {
      font-size: 18px;
    }
    .InformacionDemi {
      font-size: 14px;
      -webkit-line-clamp: 3; /* Limita a 2 líneas */
    }
    .IconoArrow {
      right: 10px;
      top: 10px;
      right: 10px;
    }
  }
`;

export const MainContentColum1 = styled.div`
  flex: 1;
  display: flex;
  gap: 10px;

  @media screen and (max-width: 480px) {
    overflow-y: hidden;
    flex-direction: column;
  }
`;
export const Secion1Column1 = styled.div`
  flex: 1;
  overflow-y: hidden;
  @media screen and (max-width: 480px) {
    height: auto;
  }

`;
export const Secion2Column1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// COLUMNA 2
export const Columnas2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;

export const HeaderColumn2 = styled.div`
  height: 60%;
  width: 100%;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  
  }
`;
export const MainContentColum2 = styled.section`
  flex: 1;
  display: flex;
  gap: 10px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;
