import React, { useEffect } from "react";
import styled from "styled-components";
import chatone from "../../../asset/chatone.png";
import chattwo from "../../../asset/chattwo.png";
import chatthree from "../../../asset/chatthree.png";
import chatfour from "../../../asset/chatfour.png";
import TypeIt from "typeit-react";
import ScrollOut from "scroll-out";

export default function PmainThree() {
  useEffect(() => {
    ScrollOut();
  }, []);
  return (
    <Container>
      <div className="title-box">
        <h1 className="title" data-scroll>
          쿡 클래스
        </h1>
        <div className="icon-box">
          <div className="chat">
            <img src={chatone} alt="채팅" className="chat-icon" />
            <TypeIt
              options={{
                strings: ["거리에 따라 선택해서 볼수 있는 게시글"],
                speed: 70,
                waitUntilVisible: true,
              }}
            />
          </div>
          <div className="chat-two">
            <img src={chattwo} alt="채팅" className="chat-icon" />
            <TypeIt
              options={{
                strings: ["함께하는 즐거움 쿡 클래스"],
                speed: 70,
                waitUntilVisible: true,
              }}
            />
          </div>
          <div className="chat">
            <img src={chatthree} alt="채팅" className="chat-icon" />
            <TypeIt
              options={{
                strings: ["요리에 즐거움을 넣어보세요"],
                speed: 70,
                waitUntilVisible: true,
              }}
            />
          </div>
          <div className="chat-two">
            <img src={chatfour} alt="채팅" className="chat-icon" />
            <TypeIt
              options={{
                strings: ["지금 바로 쿡 클래스"],
                speed: 70,
                waitUntilVisible: true,
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 50vh;
  background-color: var(--hover-gray);

  img {
    width: 100%;
    height: 100%;
  }

  .title-box {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    padding: 50px;
  }

  .chat-icon {
    width: 40px;
    height: 40px;
    margin: 0 20px;
  }

  .icon-box {
    width: 60%;
    height: 80%;
    font-size: 1.3rem;
  }

  .chat {
    padding: 10px;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 20px;
  }

  .chat-two {
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 20px;
    font-weight: 700;
    flex-direction: row-reverse;
  }

  .info {
    font-weight: 700;
    width: 70%;
    font-size: 1.2rem;
  }

  .title {
    font-weight: 700;
    color: var(--main-color);
    width: 30%;
    text-align: center;
    font-size: 2rem;
  }

  .phone-box {
    width: 50%;
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
