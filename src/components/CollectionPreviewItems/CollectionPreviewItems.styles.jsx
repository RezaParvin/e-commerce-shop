import styled, { css } from "styled-components";

export const CollectionPreviewContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`;

export const CollectionItemsView = styled.div`
  width: 1100px;
  overflow: hidden;
`;

export const CollectionItemsContainer = styled.div`
  width: 9000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 275px);
  transition: all 0.9s ease-in-out;
  margin-right: ${({ position }) => position + "px"};
`;

const PageControllerStyle = css`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextCollectionContainer = styled.div`
  ${PageControllerStyle}
`;
export const PrevCollectionContainer = styled.div`
  ${PageControllerStyle}
`;
export const PageControllerBtn = styled.button`
  display: block;
  background-color: transparent;
  outline: none;
  border: none;
  font-size: 50px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    color: gray;
  }
`;

export const DotPageControllerContainer = styled.section`
  width: 1200px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DotPageController = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid black;
  transition: all 0.4s ease-out;
  background-color: ${({ active }) => (active ? "black" : "white")};
  margin-left: 5px;
  cursor: pointer;
`;
