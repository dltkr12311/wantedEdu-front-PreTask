import React from "react";
import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";

import { salesLists, mediaLists, HRLists, makeGameLists, financeLists } from "utils/data";

const NaviCategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
  & h1 {
    font-size: 1.3rem;
  }
`;

const NavCategoryDetailLeft = styled.ul`
  & li {
    padding: 0;
    line-height: 35px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #a0a0a0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const NavCategoryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const NavDetailList = () => {
  return (
    <>
      {/* 1 */}
      <div>
        <NaviCategoryTitle>
          <h1>영업</h1>
          <IoIosArrowForward />
        </NaviCategoryTitle>
        <NavCategoryDetailLeft>
          {salesLists.map((sale, idx) => (
            <li key={idx}>{sale}</li>
          ))}
          <NavCategoryContent>
            <li>더보기</li>
            <IoIosArrowForward />
          </NavCategoryContent>
        </NavCategoryDetailLeft>
      </div>
      {/* 2 */}
      <div>
        <NaviCategoryTitle>
          <h1>미디어</h1>
          <IoIosArrowForward />
        </NaviCategoryTitle>
        <NavCategoryDetailLeft>
          {mediaLists.map((media, idx) => (
            <li key={idx}>{media}</li>
          ))}
          <NavCategoryContent>
            <li>더보기</li>
            <IoIosArrowForward />
          </NavCategoryContent>
        </NavCategoryDetailLeft>
      </div>
      {/* 3 */}
      <div>
        <NaviCategoryTitle>
          <h1>인사</h1>
          <IoIosArrowForward />
        </NaviCategoryTitle>
        <NavCategoryDetailLeft>
          {HRLists.map((hr, idx) => (
            <li key={idx}>{hr}</li>
          ))}
          <NavCategoryContent>
            <li>더보기</li>
            <IoIosArrowForward />
          </NavCategoryContent>
        </NavCategoryDetailLeft>
      </div>
      {/* 4*/}
      <div>
        <NaviCategoryTitle>
          <h1>게임제작</h1>
          <IoIosArrowForward />
        </NaviCategoryTitle>
        <NavCategoryDetailLeft>
          {makeGameLists.map((game, idx) => (
            <li key={idx}>{game}</li>
          ))}
          <NavCategoryContent>
            <li>더보기</li>
            <IoIosArrowForward />
          </NavCategoryContent>
        </NavCategoryDetailLeft>
      </div>
      {/* 5*/}
      <div>
        <NaviCategoryTitle>
          <h1>금융</h1>
          <IoIosArrowForward />
        </NaviCategoryTitle>
        <NavCategoryDetailLeft>
          {financeLists.map((fi, idx) => (
            <li key={idx}>{fi}</li>
          ))}
          <NavCategoryContent>
            <li>더보기</li>
            <IoIosArrowForward />
          </NavCategoryContent>
        </NavCategoryDetailLeft>
      </div>
    </>
  );
};

export default NavDetailList;
