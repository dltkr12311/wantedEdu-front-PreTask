import React from "react";
import styled from "styled-components";

import { IoIosArrowForward } from "react-icons/io";

const NavigationWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  right: 0;
  bottom: 35%;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
`;

const NavigationCategoryWrap = styled.div`
  width: 1200px;
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
`;

const NavigationCategoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
  & h1 {
    font-size: 1.3rem;
  }
`;

const NavigationCategoryDetailLeft = styled.ul`
  & li {
    padding: 0;
    line-height: 40px;
    font-size: 0.9rem;
    font-weight: 500;
    color: #a0a0a0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const NavigationCategoryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const NavigationCategoryDetailRight = styled.div`
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

const Navigation = () => {
  return (
    <NavigationWrap>
      <NavigationCategoryWrap>
        <div>
          <NavigationCategoryTitle>
            <h1>영업</h1>
            <IoIosArrowForward />
          </NavigationCategoryTitle>

          <NavigationCategoryDetailLeft>
            <li>기업영업</li>
            <li>외부영업</li>
            <li>영업 관리자</li>
            <li>기술영업</li>
            <li>주요고객사 담당자</li>
            <li>솔루션 컨설던트</li>
            <li>해외영업</li>
            <NavigationCategoryContent>
              <li>더보기</li>
              <IoIosArrowForward />
            </NavigationCategoryContent>
          </NavigationCategoryDetailLeft>
        </div>
        {/* 2 */}
        <div>
          <NavigationCategoryTitle>
            <h1>미디어</h1>
            <IoIosArrowForward />
          </NavigationCategoryTitle>
          <NavigationCategoryDetailLeft>
            <li>콘텐츠 크리에이터</li>
            <li>PD</li>
            <li>영상 편집가</li>
            <li>에디터</li>
            <li>비디오 제작</li>
            <li>작가</li>
            <li>출판 기획자</li>
            <NavigationCategoryContent>
              <li>더보기</li>
              <IoIosArrowForward />
            </NavigationCategoryContent>
          </NavigationCategoryDetailLeft>
        </div>
        {/* 3 */}
        <div>
          <NavigationCategoryTitle>
            <h1>인사</h1>
            <IoIosArrowForward />
          </NavigationCategoryTitle>
          <NavigationCategoryDetailLeft>
            <li>인사담당</li>
            <li>리쿠르터</li>
            <li>조직문화</li>
            <li>평가•보상</li>
            <li>헤드헌터</li>
            <li>HRD</li>
            <li>HRBP</li>
            <NavigationCategoryContent>
              <li>더보기</li>
              <IoIosArrowForward />
            </NavigationCategoryContent>
          </NavigationCategoryDetailLeft>
        </div>
        {/* 4*/}
        <div>
          <NavigationCategoryTitle>
            <h1>게임제작</h1>
            <IoIosArrowForward />
          </NavigationCategoryTitle>
          <NavigationCategoryDetailLeft>
            <li>게임 기획자</li>
            <li>게임 그래픽 디자이너</li>
            <li>모바일 게임 개발자</li>
            <li>게임 클라이언트 개발자</li>
            <li>게임 아티스트</li>
            <li>유니티 개발자</li>
            <li>게임 서버 개발자</li>
            <NavigationCategoryContent>
              <li>더보기</li>
              <IoIosArrowForward />
            </NavigationCategoryContent>
          </NavigationCategoryDetailLeft>
        </div>
        {/* 5*/}
        <div>
          <NavigationCategoryTitle>
            <h1>금융</h1>
            <IoIosArrowForward />
          </NavigationCategoryTitle>
          <NavigationCategoryDetailLeft>
            <li>회계담당</li>
            <li>재무 담당자</li>
            <li>IR</li>
            <li>투자•증권</li>
            <li>재무 분석가</li>
            <li>애널리스트</li>
            <li>내부통제 담당자</li>
            <NavigationCategoryContent>
              <li>더보기</li>
              <IoIosArrowForward />
            </NavigationCategoryContent>
          </NavigationCategoryDetailLeft>
        </div>
        <div>
          <NavigationCategoryDetailRight>
            <div>
              <span>엔지니어링•설계</span>
              <IoIosArrowForward />
            </div>
            <div>
              물류•무역
              <IoIosArrowForward />
            </div>
            <div>
              제조생산
              <IoIosArrowForward />
            </div>
            <div>
              의료•제약•바이오
              <IoIosArrowForward />
            </div>
            <div>
              교육
              <IoIosArrowForward />
            </div>
            <div>
              법률•법집행기관
              <IoIosArrowForward />
            </div>
            <div>
              식•음료
              <IoIosArrowForward />
            </div>
            <div>
              건설•시설
              <IoIosArrowForward />
            </div>
            <div>
              공공•복지
              <IoIosArrowForward />
            </div>
          </NavigationCategoryDetailRight>
        </div>
      </NavigationCategoryWrap>
    </NavigationWrap>
  );
};

export default Navigation;
