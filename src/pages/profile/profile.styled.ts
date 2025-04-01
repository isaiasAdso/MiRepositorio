import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: ${({ theme }) =>
    theme.CardTranparente}; /* Color oscuro con transparencia */
  color: ${({ theme }) => theme.color};
  width: 80%;
  height: 600px;
  max-height: 600px;
  border-radius: 20px;
  align-items: center;

  
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
    height: 80%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px;
    border-radius: 10px;
  }
`;
export const Column1 = styled.div`
  width: 20%;
  height: 100%;


  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    order: 2;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    order: 2;
  }
  
`;

export const Column2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px; 

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    order: 1;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    order: 1;
  }
  
  
`;

export const Column3 = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px; 

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    order: 3;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    order: 3;
  }
  

`;

