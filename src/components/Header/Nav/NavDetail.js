import React from "react";
import styled from "styled-components";

import NavDetailList from "./NavDetailList";
import NavDetailMore from "./NavDetailMore";

const NavContentWrap = styled.div`
  position: absolute;
  top: 52px;
  left: 0;
  right: 0;
  bottom: 30%;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  opacity: ${(props) => props.opacity};
`;

const NavCategory = styled.div`
  width: 70%;
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  & > div {
    text-align: left;
    padding: 0 2rem 0 0;
    width: 16.66%;
  }
  & > div:last-child {
    padding: 0;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const NavDetail = ({ opa }) => {
  return (
    <NavContentWrap opacity={opa}>
      <NavCategory>
        <NavDetailList />
        <NavDetailMore />
      </NavCategory>
    </NavContentWrap>
  );
};

export default NavDetail;
