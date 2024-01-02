import React from "react";
import styled from "styled-components";
import Logo from "../../../asset/icon.png";
import MRecipeCard from "./MRecipeCard";
import { FaAngleRight, FaAngleDoubleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default function MRecipeTwo() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <Container>
      <button onClick={scrollToTop} className="Upbtn">
        <FaAngleDoubleUp />
      </button>
      <div className="title-box">
        <img src={Logo} alt="로고" className="title-logo" />
        <h1 className="title">맛남의 레시피</h1>
        <FaAngleRight />
      </div>
      <div className="card-box">
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
        <MRecipeCard />
      </div>
      <div className="Mfooter">레시피가 끝났어요 !</div>
    </Container>
  );
}

const Container = styled.div`
  .title-box {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .title-logo {
    width: 30px;
    height: 30px;
  }

  .title {
    font-weight: 700;
    font-size: 1.3rem;
    margin-left: 5px;
  }

  .card-box {
    overflow-y: auto;
  }

  .Mfooter {
    height: 100px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    background-color: var(--hover-gray);
  }

  .Upbtn {
    position: sticky;
    top: 10px;
    left: 500px;
    z-index: 1;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--dark-gray);
    margin: 10px;
  }
`;
