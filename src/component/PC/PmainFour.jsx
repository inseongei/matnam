import React, { useEffect } from "react";
import styled from "styled-components";
import { FcInTransit } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import ScrollOut from "scroll-out";

export default function PmainFour() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <Container>
      <div className="title-box" data-scroll>
        쿡 쇼핑
      </div>
      <div className="four-box">
        <div className="firstBox">
          <div className="deal" data-scroll>
            <div>
              <FcInTransit className="icon" />
            </div>
            <div className="title">중고거래</div>
            <div className="info">
              쓰지 않는 물건들을 판매하고 싸게 구매해보세요 !
            </div>
          </div>
          <div className="change" data-scroll>
            <div>
              <FcProcess className="icon" />
            </div>
            <div className="title">교환신청</div>
            <div className="info">
              내가 필요없는 물건 , 내가 필요한 물건을 서로서로 교환해보세요.
            </div>
          </div>
        </div>
        <div className="SecondBox">
          <div className="free" data-scroll>
            <div>
              <FcLikePlaceholder className="icon" />
            </div>
            <div className="title">무료나눔</div>
            <div className="info">
              함께 나누는 기쁨! 나눔의 의미를 배워보세요 !
            </div>
          </div>
          <div className="chat" data-scroll>
            <div>
              <FcAssistant className="icon" />
            </div>
            <div className="title">1:1채팅</div>
            <div className="info">
              다양한 서비스는 더 나은 소통으로 시작됩니다. 1:1 채팅으로 편리하게
              거래하세요!
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 60px;
  height: 60vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 50px;

  .title-box {
    font-weight: 700;
    color: var(--main-color);
    width: 30%;
    text-align: center;
    font-size: 2rem;
  }

  .firstBox {
    display: flex;
  }

  .SecondBox {
    display: flex;
  }

  .four-box {
    padding: 50px;
    margin: 0 auto;
  }

  .deal {
    width: 350px;
    background-color: var(--hover-gray);
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
  }

  .change {
    width: 350px;
    background-color: var(--hover-gray);
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
  }

  .chat {
    width: 350px;
    background-color: var(--hover-gray);
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
  }

  .free {
    width: 350px;
    background-color: var(--hover-gray);
    padding: 30px;
    border-radius: 10px;
    margin: 10px;
  }

  .icon {
    font-size: 6rem;
  }

  .title {
    font-size: 2rem;
    color: var(--main-color);
    font-weight: 700;
    margin: 10px;
  }

  .info {
    line-height: 1.5;
    font-weight: 700;
    margin: 10px;
  }

  [data-scroll] {
    opacity: 0;
    will-change: transform, scale, opacity;
    transform: translateY(2rem) scale(0.93);
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
