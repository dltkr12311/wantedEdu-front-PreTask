import styled from "styled-components";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

export const HeaderWrap = styled.div`
  width: 70%;
  margin: 0 auto;
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const GnbWrap = styled.ul`
  width: 60%;
  display: flex;
  justify-content: space-evenly;
  white-space: nowrap;
  & li {
    font-weight: bold;
    cursor: pointer;

    font-size: 0.9rem;
    line-height: 50px;
  }
  & > li:nth-child(1) {
    padding-left: 1rem;
  }
  & > li:hover {
    border-bottom: 2px solid #dddddd;
  }
  @media ${(props) => props.theme.mobile} {
    justify-content: flex-start;
    & > li {
      display: none;
      padding: 0;
      margin-right: 2rem;
    }
    & > li:nth-child(1) {
      display: block;
      padding-left: 1rem;
    }
    & > li:nth-child(2) {
      display: block;
    }
    & > li:nth-child(3) {
      display: block;
      margin-right: 0;
    }
  }
`;

export const HomeLi = styled.li`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: block;
  }
`;

export const SearchLi = styled.li`
  border-bottom: 2px solid #258bf7;
`;

export const StyledIcons = styled.ul`
  display: flex;
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
    white-space: nowrap;
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

  @media ${(props) => props.theme.mobile} {
    & > li:last-child {
      display: none;
    }
  }
`;

export const NotiLi = styled.li`
  position: relative;
  &::after {
    position: absolute;
    display: block;
    content: "N";
    left: 50%;
    right: 0;
    top: -50%;
    bottom: 0;
    width: 15px;
    height: 15px;
    transform: translate(20%, 50%);
    background-color: #3c6af5;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    font-size: 0.5rem;
    font-weight: bold;
    line-height: 16px;
  }
`;

export const NotiIcon = styled(IoIosNotificationsOutline)``;

export const ProfileBox = styled.li`
  border-radius: 50%;
  border: 1px solid #d7d7d7;
  box-sizing: border-box;
  position: relative;
  &::after {
    position: absolute;
    display: block;
    content: "N";
    left: 50%;
    right: 0;
    top: -50%;
    bottom: 0;
    width: 15px;
    height: 15px;
    transform: translate(20%, 30%);
    background-color: #3c6af5;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    font-size: 0.5rem;
    font-weight: bold;
    line-height: 16px;
  }
  & div {
    width: 25px;
    height: 25px;
  }
  & div > img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const MobileMenuLi = styled.li`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: block;
    width: 30px;
    height: 30px;
    padding-right: 1rem;
  }
`;

export const MobileMenu = styled(BiMenuAltRight)`
  @media ${(props) => props.theme.mobile} {
    display: block;
    width: 30px;
    height: 30px;
  }
`;
