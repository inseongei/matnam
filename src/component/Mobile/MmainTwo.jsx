import React, { useEffect } from "react";
import styled from "styled-components";
import { FcInTransit } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import ScrollOut from "scroll-out";

export default function MmainTwo() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <Container>
      <div className="title-box">
        <div className="title">쿡</div>
        <div className="sub-title">클래스 & 쇼핑</div>
      </div>
      <div className="info-box">
        <h1 className="info-title">
          가까운 지역사람들과 함께 하는 <b className="bold">쿡</b> 클래스
        </h1>
        <h2 className="info-title">
          당신의 주방을 더 특별하게 <b className="bold">쿡</b> 쇼핑
        </h2>
        <div className="namo-box">
          <div className="namo" data-scroll>
            <FcInTransit className="icon" />
            중고거래
          </div>
          <div className="namo" data-scroll>
            <FcAssistant className="icon" />
            1:1채팅
          </div>
        </div>
        <div className="namo-box">
          <div className="namo" data-scroll>
            <FcLikePlaceholder className="icon" />
            무료나눔
          </div>
          <div className="namo" data-scroll>
            <FcProcess className="icon" />
            교환신청
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: var(--hover-gray);

  .title-box {
    padding: 20px;
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 2rem;
    color: var(--main-color);
    font-weight: 700;
    margin-right: 10px;
  }

  .sub-title {
    font-weight: 700;
  }

  .info-title {
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 7px;
  }

  .bold {
    color: var(--main-color);
    font-size: 2rem;
  }

  .namo-box {
    display: flex;
  }

  .namo {
    width: 300px;
    height: 150px;
    background: #fff;
    border-radius: 10px;
    margin: 20px;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 700;
    border: 1px solid var(--dark-gray);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon {
    font-size: 3rem;
    margin: 20px;
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
