import styled from "styled-components";

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerLoader = styled.div`
  border: 7px solid #f3f3f3;
  border-radius: 50%;
  border-top-color: black;
  animation: rotate 0.6s linear infinite;
  width: 70px;
  height: 70px;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
