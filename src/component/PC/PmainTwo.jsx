import React, { useEffect } from "react";
import styled from "styled-components";
import ScrollOut from "scroll-out";

export default function PMainTwo() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <Container>
      <div className="title-box">
        <h1 className="two-title" data-scroll>
          레시피 광장
        </h1>
        <p className="two-info" data-scroll>
          나만 알고 있는 맛있는 레시피를 공유함으로써 맛의 즐거움을 더하다.
        </p>
      </div>
      <div className="info-box">
        <div className="second-box">
          <div className="info" data-scroll>
            <div className="good-color">직관적인 UI</div>
            <div>복잡한 조작</div>
            <div className="good-color">베스트 메뉴</div>
            <div>어려운 사용</div>
          </div>
          <div className="info" data-scroll>
            <div>불필요한 정보</div>
            <div className="good-color">간단한 등록</div>
            <div>혼잡한 메뉴</div>
            <div className="good-color">태그별 음식</div>
          </div>
          <div className="info" data-scroll>
            <div className="good-color">편리한 검색</div>
            <div>찾기힘든 음식</div>
            <div className="good-color">사용자 추천</div>
            <div>어려운 레시피</div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 60vh;

  .two-title {
    font-weight: 700;
    color: var(--main-color);
    width: 30%;
    text-align: center;
    font-size: 2rem;
  }

  .two-info {
    font-weight: 700;
    width: 70%;
    font-size: 1.2rem;
    margin-left: 20px;
  }

  .title-box {
    width: 80%;
    margin: 0 auto;
    display: flex;
    padding: 50px;
  }

  .info-box {
    display: flex;
    width: 80%;
    padding: 50px;
    margin: 0 auto;
  }

  .second-box {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }

  .info {
    display: flex;
    color: var(--dark-gray);
    font-size: 2rem;
    line-height: 2;
    font-weight: 700;
  }

  .info div {
    margin: 0 20px;
  }

  .good-color {
    color: var(--main-color);
  }

  [data-scroll] {
    opacity: 0;
    will-change: transform, scale, opacity;
    transform: translateY(6rem) scale(0.93);
    transition: all 1.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  [data-scroll="in"] {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  [data-scroll="out"] {
    opacity: 0;
  }
`;
