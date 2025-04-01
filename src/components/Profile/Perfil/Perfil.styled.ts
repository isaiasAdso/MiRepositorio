import styled from "styled-components";

export const PerfilContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
    flex-direction: row;
  }
  
`;

export const Fotoprofile = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.color};

  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    display: none;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
    height: 300px;
    display: none;

    /* img{
      width: 50%;
      height: 50%;
    } */
  }
  
  
`;

export const LenguajesContainer = styled.div`
  width: 100%;
  height: 58%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .HeaderLenguajes {
    width: 90%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.color};
    font-size: 20px;
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.color};
    padding-bottom: 5px;
  }

  .ContainerLeng {
    width: 95%;
    height: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 5px;
    align-items: center;
  }

  .lenguaje {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    font-size: 14px;
    min-width: 70px;
    height: 50px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.CardHover};
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    &:hover::after {
      content: attr(data-name);
      position: absolute;
      bottom: -30px;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 12px;
      white-space: nowrap;
    }
  }
`;
