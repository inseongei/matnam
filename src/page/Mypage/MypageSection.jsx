// 외부 - import
import React, { useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 내부 - import
import { myRecipe, mylikeRecipe } from "../../Firebase/firebaseFn";

export default function MypageSection() {
  const location = useLocation();
  const [swiper, setSwiper] = useState();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("email");
  const [menu, setMenu] = useState({
    recipe: true,
    like: false,
  });

  const { data: RecipeData } = useQuery({
    queryKey: ["myRecipe", searchValue],
    queryFn: () => myRecipe(searchValue),
  });

  const { data: LikeData } = useQuery({
    queryKey: ["myLikeRecipe", searchValue],
    queryFn: () => mylikeRecipe(searchValue),
  });

  const moveSwiper = (index, menu) => {
    swiper.slideTo(index, 1000, false);
    setMenu((prevMenu) => {
      const newMenu = { ...prevMenu };
      // 클릭된 메뉴는 true로 설정하고, 다른 모든 메뉴는 false로 설정
      Object.keys(newMenu).forEach((key) => {
        newMenu[key] = key === menu;
      });
      return newMenu;
    });
  };

  const changeSwiper = (index) => {
    if (index === 0) {
      setMenu({
        recipe: true,
        shop: false,
        like: false,
      });
    } else if (index === 1) {
      setMenu({
        recipe: false,
        like: true,
      });
    }
  };
  return (
    <>
      <Container>
        <div className="menuBar">
          <div
            className={menu.recipe ? "check-menu menu" : "menu"}
            onClick={() => moveSwiper(0, "recipe")}
          >
            <div className="icon">👨‍🍳</div>
            <div className="menu-name">레시피({RecipeData?.length})</div>
          </div>

          <div
            className={menu.like ? "check-menu menu" : "menu"}
            onClick={() => moveSwiper(1, "like")}
          >
            <div className="icon">😍</div>
            <div className="menu-name">좋아요({LikeData?.length})</div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          onSwiper={(swiper) => setSwiper(swiper)}
          onSlideChange={(swiper) => changeSwiper(swiper.activeIndex)}
        >
          <SwiperSlide className="auto">
            <div className="card-box">
              {RecipeData?.map((data) => (
                <Link to={`/RecipeDetail/${data.id}`} key={data.id}>
                  <div className="card">
                    <LazyLoadImage
                      src={data.cookStep[data.cookStep.length - 1].imageUrl}
                      alt="이미지"
                      className="recipe-image"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-box">
              {LikeData?.map((data) => (
                <Link to={`/RecipeDetail/${data.id}`} key={data.id}>
                  <div className="card">
                    <LazyLoadImage
                      src={data.cookStep[data.cookStep.length - 1].imageUrl}
                      alt="이미지"
                      className="recipe-image"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-bottom: 80px;

  .menuBar {
    border-radius: 10px;
    display: flex;
    height: 60px;
    margin: 20px;
    box-shadow: var(--box-shadow);
  }

  .menu {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-weight: 700;
    cursor: pointer;
  }

  .check-menu {
    background-color: var(--gray-200);
  }

  .icon {
    font-size: 1.2rem;
    margin-bottom: 5px;
    text-align: center;
  }

  .swiper {
    margin: 20px;
    box-shadow: var(--box-shadow);
    height: 300px;
  }

  .auto {
    overflow: auto;
  }

  .card-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }

  .card {
    width: 100%;
    height: 150px;
  }

  .recipe-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(80%);
  }
`;
