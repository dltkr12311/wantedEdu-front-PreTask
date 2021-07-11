import React from "react";
import styled from "styled-components";

import Header from "components/Header";

const StyledBorder = styled.div`
  border-top: 1px solid #d7d7d7;
`;
const ThemePage = () => {
  return (
    <div>
      <Header />
      <StyledBorder />
    </div>
  );
};

export default ThemePage;
