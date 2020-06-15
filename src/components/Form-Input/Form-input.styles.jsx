import styled, { css } from "styled-components";

const focusInput = css`
  font-size: 12px;
  top: -20px;
  color: $main-color;
`;

const inputElementStyle = css`
  font-family: iran;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 5px;
  font-size: 16px;
  border: none;
  background-color: none;
  background-color: transparent;
  border-bottom: ${({ finalValid }) =>
    finalValid ? "1px solid gray" : "1.5px solid rgb(238, 43, 43)"};
  margin-bottom: 30px;
  direction: rtl;
  &:focus {
    outline: none;
  }

  &:focus ~ .form-element-label {
    ${focusInput}
  }
`;

export const InputElement = styled.input`
  ${inputElementStyle}

  &[type="password"] {
    letter-spacing: 5px;
  }
`;

export const LabelElement = styled.label`
  pointer-events: none;
  font-family: iran;
  transition: all 0.3s;
  position: absolute;
  font-size: 16px;
  display: block;
  right: 5px;
  top: 5px;
  color: gray;
  ${({ value }) => (value.length ? focusInput : null)}
`;

export const SelectElement = styled.select`
  ${inputElementStyle}
  margin-top: 50px;
  direction: rtl;
`;

export const TextareaElement = styled.textarea`
  ${inputElementStyle}
  height: 150px;
  direction: rtl;
  resize: none;
  margin-bottom: 50px;
`;
