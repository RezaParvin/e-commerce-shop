import styled, { css } from "styled-components";

const signInWithGoogleStyle = css`
  background-color: #4285f4;
  border-color: white;
  width:${({ width }) => width.toString()};
  &:hover {
    color: #357ae8;
    background-color: white;
    border: none;
  }
`;

const inCollectionStyle = css`
  background-color: rgb(240, 240, 240);
  color: rgb(0, 0, 0);
  border: 1px solid #000;
  font-size: 15px;
  width:${({ width }) => width.toString()};
  &:hover {
    background-color: black;
    color: white;
  }
`;

const getStyleByProps = ({ signInWithGoogle, inCollection, width }) => {
  if (inCollection) {
    return inCollectionStyle;
  }
  if (signInWithGoogle) {
    return signInWithGoogleStyle;
  }
};

export const ButtonContainer = styled.button`
  display: inline-block;
  border: 1px solid rgb(0, 0, 0);
  outline: none;
  background-color: rgb(37, 37, 37);
  height: 45px;
  font-size: 17px;
  width:${({ width }) => width.toString()};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s ease-out;
  cursor: pointer;
  font-family: iran;
  &:hover {
    background-color: white;
    border-color: black;
    color: black;
  }
 

  ${getStyleByProps}
`;
