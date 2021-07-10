import React from "react";
import styled from "styled-components";

import Navigation from "./Navgation";

export const NavigationContainerWrap = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavigationContainer = ({ handleCloseHover }) => {
  return (
    <>
      <NavigationContainerWrap onMouseEnter={handleCloseHover} />
      <Navigation></Navigation>
    </>
  );
};

export default NavigationContainer;
