import styled from "styled-components";

export const PageWrapperStyled = styled.div`
  width: 100vw;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;


  @media screen and (max-width: 480px) {
    height: 600px;
    width: 95vw;
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 10px;
  }
`;
