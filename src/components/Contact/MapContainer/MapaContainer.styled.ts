import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

  .MapContainer {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: relative;
    z-index: 1;
  }

  .City {
    position: absolute;
    bottom: 20px; /* Ajusta según necesidad */
    left: 20%;
    transform: translateX(-50%);
    background: rgba(255, 255, 255, 0.8);
    color: #000;
    padding: 8px 16px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 14px;
    z-index: 1000; /* Mayor que el mapa */
  }

`;