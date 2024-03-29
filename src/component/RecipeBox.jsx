// 외부 - import
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function RecipeBox({ item }) {
  // item : RecipeNew , RecipeFeed 에서 받아오는 recipe 데이터 값
  const email = localStorage.getItem("email");
  const [heart, setHeart] = useState(false);

  // 카드박스 - 좋아요 처리
  useEffect(() => {
    setHeart(item.heart.includes(email));
  }, [item, email]);

  return (
    <Container>
      <div key={item.id}>
        <Link to={`/RecipeDetail/${item.id}`}>
          <div className="image-box">
            <LazyLoadImage
              effect="blur"
              src={item.cookStep[item.cookStep.length - 1].imageUrl}
              alt="메인사진"
              className="main-image"
              width="100%"
              height="200px"
              placeholderSrc={process.env.PUBLIC_URL + "/LogoIcon.png"}
            />
          </div>
        </Link>

        <div className="content-box">
          <div className="tag-name-box">
            <div className="tag">{item.categoryName}</div>
            <div className="see-box">
              <div>
                <FaRegEye />
              </div>
              <div className="see-count">{item.see}</div>
            </div>
          </div>
          <div className="heart-see-box">
            <div className="heart-box">
              {heart ? (
                <FaHeart className="heart-icon" />
              ) : (
                <FaRegHeart className="heart-icon" />
              )}

              <div className="heart-count">
                {item.heart.length}명이 좋아해요
              </div>
            </div>
            <div className="namebox">
              <div className="userprofile">
                <LazyLoadImage
                  src={item.writer.profile}
                  alt="프로필 사진"
                  className="user-profile"
                />
              </div>
              <div className="user-name">{item.writer.nickname}</div>
            </div>
          </div>
          <div className="recipe-title">{item.title}</div>
          <Link to={`/RecipeDetail/${item.id}`}>
            <div className="recipe-btn"> {item.title} 레시피 보러가기 </div>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  height: 400px;
  padding: 10px;
  margin-bottom: 20px;

  .image-box {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .content-box {
    height: 200px;
    font-weight: 700;
    margin-top: 10px;
  }

  .tag-name-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .namebox {
    display: flex;
    align-items: center;
  }

  .tag {
    background-color: var(--main-color);
    padding: 7px;
    border-radius: 10px;
    font-size: 0.9rem;
  }

  .userprofile {
    width: 20px;
    height: 20px;
    border: 1px solid var(--gray-400);
    border-radius: 50%;
    margin-right: 3px;
  }

  .user-profile {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .recipe-title {
    font-size: 1.4rem;
    padding: 20px 0px 0px 7px;
  }

  .heart-box {
    display: flex;
  }

  .heart-see-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }

  .heart-icon {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    color: red;
  }

  .heart-count {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 0.8rem;
  }

  .see-box {
    display: flex;
    font-weight: 700;
    color: var(--gray-700);
  }

  .see-count {
    font-size: 0.9rem;
    margin-left: 2px;
  }

  .recipe-btn {
    border-radius: 10px;
    background-color: var(--gray-300);
    padding: 15px;
    margin-top: 20px;
    text-align: center;
  }

  .main-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
