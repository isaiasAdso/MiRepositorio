import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

export const SkillsHeader = styled.div`
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
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;

    .IconoArrow {
      font-size: 20px;
      color: #3b82f6;
    }
  }
`;
export const SkillsBody = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columnas de tamaño igual */
  gap: 15px;

  min-height: 150px;
  overflow: visible;
  z-index: 10;
  width: 95%;
  height: 79%;
`;


export const SkillIcon = styled.div`
  font-size: 30px;
  color: ${({ color }) => color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  .skill-name {
    font-size: 10px;
    margin-top: 5px;
    color: ${({ theme }) => theme.color};
    font-weight: 200;
  }
`;
