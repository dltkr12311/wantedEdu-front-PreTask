import React from "react";
import styled from "styled-components";

import NavDetail from "./NavDetail";

export const NavWrap = styled.div`
  position: fixed;
  top: 52px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const NavView = ({ handleCloseHover }) => {
  return (
    <>
      <NavWrap onMouseEnter={handleCloseHover} />
      <NavDetail />
    </>
  );
};

export default NavView;
