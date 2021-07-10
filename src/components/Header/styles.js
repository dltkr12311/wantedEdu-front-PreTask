import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const GnbWrap = styled.ul`
  display: flex;
  height: 100%;
  & li {
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    line-height: 50px;
    padding: 0 1.5rem;
  }
  & > li:hover {
    border-bottom: 2px solid #dddddd;
  }
`;

export const StyledIcons = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  & > li {
    margin-left: 1rem;
    cursor: pointer;
  }
  & > li:first-child {
    margin-left: 0;
  }
  & > li:last-child {
    position: relative;
    border: 1px solid #d7d7d7;
    color: #333;
    padding: 0.5rem 0.8rem;
    border-radius: 20px;
    margin-left: 2.5rem;
    font-size: 0.9rem;
  }
  & > li:last-child::before {
    position: absolute;
    display: block;
    content: "";
    background-color: #aaa;
    left: -25%;
    top: 50%;
    transform: translate(25%);
    transform: translateY(-50%);
    width: 1px;
    height: 80%;
  }
`;
export const ProfileBox = styled.li`
  border-radius: 50%;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;

  & div {
    width: 25px;
    height: 25px;
  }
  & div > img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
`;

export const StyledLi = styled.li`
  border-bottom: 2px solid #258bf7;
`;
