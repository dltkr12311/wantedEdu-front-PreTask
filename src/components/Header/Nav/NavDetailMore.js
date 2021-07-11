import React from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

import { moreData } from "utils/data";

const NavCategoryDetailRight = styled.div`
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const NavDetailMore = () => {
  return (
    <div>
      <NavCategoryDetailRight>
        {moreData.map((data, idx) => (
          <div key={idx}>
            <span>{data}</span>
            <IoIosArrowForward />
          </div>
        ))}
      </NavCategoryDetailRight>
    </div>
  );
};

export default NavDetailMore;
