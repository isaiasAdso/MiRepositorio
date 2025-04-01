import styled from "styled-components";

export const ContactMeContainer = styled.section`
  width: auto;
  height: 70%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  cursor: pointer;
  transition: 100ms ease-out;
  
  &:hover {
    background-color: ${({ theme }) => theme.CardHover}; /* Asegúrate de tener esta variable en el theme */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

`;
export const ContactMeHeader = styled.div`
  width: 90%;
  margin-top: 10px;
  height: 20%;
  color: ${({ theme }) => theme.color};

  display: flex;
  align-items: center;
  justify-content: space-between;

  .Titulo {
    font-size: 20px;
    font-weight: 600;
  }
  .Icon {
  }
  .IconoArrow {
    font-size: 20px;
    color: #3b82f6;
  }
`;

export const ContactMeBody = styled.div`
  width: 90%;
  height: 60%;
  color: ${({ theme }) => theme.color};

  display: flex;

  .Text {
    font-size: 16px;
    font-weight: 600;
    flex: 1;

    display: flex;
    align-items: end;
    justify-content: end;
  }
`;
