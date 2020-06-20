import styled from "styled-components";
import { ReactComponent as ConfirmLogo } from "../../assets/images/confirm.svg";

export const SuccessOrderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const SuccessOrderTitle = styled.p`
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;

export const ConfirmLogoContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ConfirmLogoStyled = styled(ConfirmLogo)`
  width: 60px;
  height: 60px;
`;
