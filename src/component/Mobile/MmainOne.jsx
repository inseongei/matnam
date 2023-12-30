import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";
import logo from "../../asset/Logo.png";
import TypeIt from "typeit-react";
import ScrollOut from "scroll-out";

export default function Mmain() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <>
      <Header />
      <Container>
        <div className="Header-bar">
          <img src={logo} alt="로고" className="logo-image" />
        </div>
        <div className="main-title">
          <div>
            <TypeIt
              options={{
                strings: [
                  "우리만의",
                  "맛을 전하는 공간",
                  "요리의 마법을 나눠보세요 .",
                ],
                speed: 50,
                waitUntilVisible: true,
              }}
            />
          </div>
        </div>
        <div className="first-box">
          <div className="first-title">
            <div className="first-topic">레시피 광장</div>
            <div className="first-info">맛의 즐거움을 더하다</div>
          </div>
          <div className="boxStyle" data-scroll>
            보기편한 화면
          </div>
          <div className="boxStyle" data-scroll>
            편리한 음식 검색
          </div>
          <div className="boxStyle" data-scroll>
            카테고리별 음식
          </div>
          <div className="boxStyle" data-scroll>
            간단한 레시피 등록
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;

  .Header-bar {
    height: 50px;
  }

  .logo-image {
    height: 100%;
    padding: 10px;
  }

  .main-title {
    padding: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.5;
    background-image: linear-gradient(135deg, #fde5d2 0%, #f0feea 100%);
    margin-top: 20px;
    height: 20vh;
  }

  .first-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .first-info {
    font-weight: 700;
  }

  .first-topic {
    font-weight: 700;
    font-size: 1.4rem;
    color: var(--main-color);
  }

  .first-box {
    padding: 20px;
  }

  .boxStyle {
    background: #fff;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
    border-radius: 10px;
    padding: 26px 0 28px;
    margin: 20px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
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
