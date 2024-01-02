import React from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function MRecipeCard() {
  return (
    <Container>
      <div className="image-box"></div>
      <div className="main-box">
        <div className="main-tag">국/탕/찌개</div>
        <div className="main-name">된장찌개</div>
        <div className="main-write">정인성</div>
      </div>
      <div className="good-icon">
        <FaRegHeart className="icon" /> 16
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
  height: 100px;
  padding: 10px;
  position: relative;
  .image-box {
    border: 1px solid var(--hover-gray);
    border-radius: 10px;
    width: 100px;
  }

  .main-box {
  }

  .main-tag {
    font-weight: 700;
    color: #5c5cd1;
    margin: 0px 0px 0px 10px;
  }

  .main-name {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 15px 0px 20px 10px;
  }

  .main-write {
    margin-left: 10px;
    font-weight: 700;
  }

  .good-icon {
    position: absolute;
    right: 0;
    margin-right: 10px;
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  .icon {
    margin-bottom: 5px;
  }
`;
