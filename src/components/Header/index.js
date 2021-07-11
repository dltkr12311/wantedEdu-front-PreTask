import React, { useState, useRef, useEffect } from "react";
import { IoIosSearch, IoIosNotificationsOutline, IoIosMenu } from "react-icons/io";

import {
  HeaderWrap,
  Logo,
  GnbWrap,
  SearchLi,
  StyledIcons,
  ProfileBox,
  HomeLi,
  MobileMenu,
} from "./styles";
import NavView from "./Nav/NavView";
const Header = () => {
  const el = useRef();
  const [isHover, setIstHover] = useState(false);

  const onMouseHover = () => {
    setIstHover(!isHover);
  };
  const handleCloseHover = (e) => {
    if (isHover && (!el.current || !el.current.contains(e.target))) setIstHover(false);
  };

  useEffect(() => {
    window.addEventListener("mouseenter", handleCloseHover);
    return () => {
      window.removeEventListener("mouseleave", handleCloseHover);
    };
  }, []);

  return (
    <HeaderWrap>
      <nav>
        <Logo>WANTED</Logo>
        <GnbWrap>
          <HomeLi>홈</HomeLi>
          <SearchLi onMouseEnter={onMouseHover} onMouseLeave={onMouseHover}>
            탐색
            {isHover && <NavView ref={el} handleCloseHover={handleCloseHover} />}
          </SearchLi>
          <li>커리어 성장</li>
          <li>직군별 연봉</li>
          <li>이력서</li>
          <li>매치업</li>
          <li>프리랜서</li>
        </GnbWrap>
        <aside>
          <StyledIcons>
            <li>
              <IoIosSearch size={25} />
            </li>
            <li>
              <IoIosNotificationsOutline size={25} />
            </li>
            <li>
              <MobileMenu />
            </li>
            <ProfileBox>
              <div>
                <img src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg"></img>
              </div>
            </ProfileBox>
            <li>기업서비스</li>
          </StyledIcons>
        </aside>
      </nav>
    </HeaderWrap>
  );
};

export default Header;
