import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function PrecipeCard() {
  return (
    <Container>
      <div className="first-box">
        <div className="first-img"></div>
        <div className="first-icon-box">
          <FaRegHeart className="good-icon" />
          12
        </div>
      </div>
      <div className="second-box">요리이름</div>
      <div className="third-box">
        <div className="third-writer">정인성</div>
        <div className="third-tag-box">
          <div className="third-tag">국 / 탕 / 찌개</div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 250px;
  height: 230px;
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
  padding: 20px;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    transition: all 1s ease 0s;
  }

  .first-box {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .first-img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 1px solid var(--dark-gray);
  }

  .good-icon {
    font-size: 1.3rem;
    margin-right: 5px;
  }

  .first-icon-box {
    display: flex;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .second-box {
    padding: 15px 0px;
    font-weight: 700;
  }

  .third-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0px;
  }

  .third-tag {
    border-radius: 10px;
    padding: 12px;
    background-color: var(--sub-color);
    display: flex;
    justify-content: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
    font-weight: 700;
  }

  .third-writer {
    border-radius: 10px;
    padding: 12px;
    background-color: var(--dark-gray);
    display: flex;
    justify-content: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
    font-weight: 700;
  }
`;
