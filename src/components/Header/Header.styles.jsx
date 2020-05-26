import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  box-sizing: border-box;
  direction: rtl;
  background-color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  position: relative;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsContainer = styled.nav`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LinkOption = styled(Link)`
  margin-left: 20px;
  font-size: 17px;
  color: rgb(129, 129, 129);
  cursor: pointer;
`;
