import styled from "styled-components";

export const MyHabilitiesContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const MyHabilitiesHeader = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  background-color: ${({ theme }) => theme.CardData};

  .category {
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 10px;

    .Title {
      font-size: 1.2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
    }

    .icons {
      display: flex;
      height: 40px;
      gap: 15px;
      justify-content: center;

      svg {
        transition: transform 0.2s ease, opacity 0.2s ease;
        cursor: pointer;
      }

      svg:hover {
        transform: scale(1.2);
        opacity: 0.9;
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }

    @media screen and (max-width: 480px) {
      width: 100%;
      height: 100px;
      justify-content: center;
    }
  }
`;
