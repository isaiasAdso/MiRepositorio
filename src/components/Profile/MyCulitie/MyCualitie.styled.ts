import styled from "styled-components";

interface QualityTagProps {
  color?: string;
  rotate?: string;
  top?: string;
  left?: string;
}

export const MyCualitieContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.CardData};
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;



  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color};
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  margin-bottom: 20px;
`;

export const QualitiesWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

export const QualityTag = styled.span<QualityTagProps>`
  background-color: ${(props) => props.color || "#555"};
  color: white;
  font-size: 14px;
  font-weight: bold;
  height: 30px;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  transform: rotate(${(props) => props.rotate || "0deg"});
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  transform-origin: center;
`;
