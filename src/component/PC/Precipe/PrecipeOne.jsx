import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import { IoSearchOutline } from "react-icons/io5";
import { FaAlignLeft, FaChildReaching } from "react-icons/fa6";
import PrecipeCard from "./PrecipeCard";
import { BsHighlighter } from "react-icons/bs";

export default function PrecipOne() {
  return (
    <>
      <Header />
      <Container>
        <div className="menu-box">
          <div className="recipe-write">
            <BsHighlighter className="lighter-icon" />
            레시피 쓰기
          </div>
          <div className="menu-bar">
            <div className="search-bar">
              <input type="text" placeholder="검색해보세요" />
              <IoSearchOutline className="search-icon" />
            </div>
            <div className="menu-list">
              <h1 className="title">맛남의 레시피 종류</h1>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">국 / 탕 / 찌개</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">밥 / 죽 / 떡</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">조림 / 볶음</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">면 / 만두</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">김치 / 젓갈 / 장</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">양념 / 소스</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">찜</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">차 / 음료 / 술</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">디저트 / 간식</div>
              </div>
              <div className="menu">
                <input type="checkbox" />
                <div className="menu-title">기타</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-box">
          <h1 className="main-title">맛남의 레시피</h1>
          <div className="sub-menu">
            <div className="icon-box icon-one">
              <div className="icon">
                <FaAlignLeft />
              </div>
              <div className="icon-name">전체 보기</div>
            </div>
            <div className="icon-box icon-two">
              <div className="icon">
                <FaChildReaching />
              </div>
              <div className="icon-name">추천 많은순</div>
            </div>
          </div>
          <div className="tag-box">
            <div className="tag">국 / 탕 / 찌개</div>
          </div>
          <div className="main-cardbox">
            <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard /> <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard /> <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard /> <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard />
            <PrecipeCard />
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: var(--hover-gray);
  display: flex;
  width: 100%;
  padding-top: 80px;

  .menu-box {
    padding: 50px;
    width: 20%;
  }

  .lighter-icon {
    margin-right: 5px;
  }

  .recipe-write {
    width: 240px;
    height: 40px;
    margin-bottom: 50px;
    position: sticky;
    top: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
    border: 1px solid var(--hover-gray);
  }

  .recipe-write:hover {
    background-color: var(--hover-gray);
  }

  .menu-bar {
    width: 200px;
    height: 500px;
    border: 1px solid var(--dark-gray);
    position: sticky;
    top: 250px;
    border-radius: 10px;
    padding: 20px;
    overflow-x: hidden;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
  }

  .menu-bar::-webkit-scrollbar {
    width: 10px;
  }

  .menu-bar::-webkit-scrollbar-thumb {
    background: darkgray;
    border-radius: 10px;
  }

  .menu-bar::-webkit-scrollbar-track {
    background: var(--hover-gray);
    border-radius: 10px;
  }

  .search-bar {
    display: flex;
    position: relative;
    background-color: #fff;
    width: 170px;
    height: 20px;
    padding: 10px;
    border: 1px solid var(--dark-gray);
    border-radius: 10px;
    outline: none;
    transition: all 0.4s ease 0s;
    margin-bottom: 10px;
  }

  .search-bar input {
    width: 150px;
    height: 20px;
    background-color: #fff;
    outline: none;
  }

  .search-icon {
    position: absolute;
    font-size: 1.5rem;
    top: 10px;
    left: 160px;
    cursor: pointer;
  }

  .title {
    text-align: center;
    font-weight: 700;
    padding: 10px 0px;
    background-color: var(--hover-gray);
  }

  .menu {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  .menu input {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid var(--dark-gray);
    border-radius: 4px;
    cursor: pointer;
  }

  .menu input:checked {
    background-color: var(--sub-color);
  }

  .menu-title {
    font-weight: 700;
    margin-left: 7px;
  }

  .main-title {
    font-size: 2.5rem;
    text-align: center;
    padding: 30px 0px;
    border-bottom: 1px solid var(--dark-gray);
  }

  .main-box {
    width: 80%;
  }

  .sub-menu {
    display: flex;
    margin-top: 10px;
  }

  .icon-box {
    margin: 10px 20px 0px 0px;
    cursor: pointer;
    color: gray;
  }

  .icon-one {
    color: black;
    padding: 0px 0px 10px 0px;
    border-bottom: 1px solid black;
  }

  .icon {
    text-align: center;
    font-size: 1.7rem;
    margin-bottom: 7px;
  }

  .tag-box {
    font-weight: 700;
    display: flex;
    margin-top: 20px;
  }

  .tag {
    border-radius: 10px;
    padding: 12px;
    background-color: var(--sub-color);
    display: flex;
    justify-content: center;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.08), 4px 12px 36px rgba(0, 0, 0, 0.09);
  }

  .main-cardbox {
    display: flex;
    gap: 20px 2%;
    flex-wrap: wrap;
    margin-top: 70px;
  }
`;
