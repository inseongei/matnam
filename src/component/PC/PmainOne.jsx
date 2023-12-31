import React from "react";
import Header from "../Header";
import styled from "styled-components";
import TypeIt from "typeit-react";
import { CiDesktopMouse2 } from "react-icons/ci";
import backimage from "../../asset/backimage.jpg";
import { FaAngleDown } from "react-icons/fa";

export default function PmainOne() {
  return (
    <>
      <Header />
      <Container>
        <div className="mainBox">
          <div className="textBox">
            <TypeIt
              options={{
                strings: [
                  "우리만의",
                  "맛을 전하는 공간",
                  "요리의 마법을 나눠보세요.",
                ],
                speed: 50,
                waitUntilVisible: true,
              }}
            />
          </div>
          <div className="icon-box">
            <CiDesktopMouse2 className="mouse-icon" />
            <div>scroll</div>
            <div>
              <FaAngleDown className="down-icon" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 70vh;
  padding-top: 80px;

  .mainBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${backimage});
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
  }

  .mouse-icon {
    font-size: 3rem;
  }

  .down-icon {
    font-size: 1.5rem;
  }

  .icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    position: absolute;
    bottom: 0;
  }

  .textBox {
    font-size: 4rem;
    font-weight: 500;
    letter-spacing: 3px;
    line-height: 1.5;
    color: var(--white-color);
    margin-bottom: 50px;
  }

  .icon-logo {
    width: 150px;
    height: 150px;
    cursor: pointer;
  }
`;
