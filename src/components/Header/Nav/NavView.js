import React, { useState } from "react";
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
  const [opacity, setOpacity] = useState(1);
  return (
    <>
      <NavWrap onMouseEnter={handleCloseHover} />
      <NavDetail opa={opacity} onMouseLeave={() => setOpacity(1)} />
    </>
  );
};

export default NavView;
