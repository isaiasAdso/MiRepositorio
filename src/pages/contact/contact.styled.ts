import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
    height: 900px;
    padding: 10px;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    height: 80%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 5px;
    border-radius: 10px;
    background-color: transparent;
  }
`;

export const HeaderContact = styled.div`
  width: 70%;
  height: 400px;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContentContact = styled.div`
  width: 70%;
  height: 150px;
  display: flex;
  gap: 10px;

  .LinksSociales {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .Email {
      width: 100%;
      height: 50%;
      border-radius: 20px;

      background-color: ${({ theme }) => theme.CardData};
      cursor: pointer;
      transition: 100ms ease-out;
      &:hover {
        background-color: ${({ theme }) =>
          theme.CardHover}; /* Asegúrate de tener esta variable en el theme */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
      }
    }
    .Linkedln {
      width: 100%;
      height: 50%;
      border-radius: 20px;

      background-color: ${({ theme }) => theme.CardData};
      cursor: pointer;
      transition: 100ms ease-out;
      &:hover {
        background-color: ${({ theme }) =>
          theme.CardHover}; /* Asegúrate de tener esta variable en el theme */
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.02);
      }
    }
  }

  .GitHub {
    width: 20%;
    height: 100%;
    border-radius: 20px;

    background-color: ${({ theme }) => theme.FondoGit};

    cursor: pointer;
    transition: 100ms ease-out;
    &:hover {
      background-color: #fff; /* Asegúrate de tener esta variable en el theme */
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
      transform: scale(1.02);
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    .LinksSociales {
      width: 60%;
    }

    .GitHub {
      width: 40%;
    }
  }
`;

export const FootertContact = styled.div`
  width: 70%;
  height: 60px;
  border-radius: 20px;
  display: flex;
  gap: 10px;

  .instagram {
    width: 33%;
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
  }

  .whatsapp {
    width: 33%;
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
  }
  .TikTok {
    width: 33%;
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
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${({ color }) => color};
  font-size: 2rem;
  width: 100%;
  height: 100%;

  .TextIcon {
    font-size: 16px;
  }

  .TextIcon2 {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    .TextIcon {
      display: none;
    }

    .TextIcon2 {
      font-size: 15px;
    }
  }
`;
