import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 200;
  border: 1px solid #eee;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  left: 25%;
  width: 50%;
  top: 30%;
  transition: all 0.4s ease-out;
  animation: fade 0.4s ease-out forwards;

  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    50% {
      opacity: 0.8;
      transform: translateY(60%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
