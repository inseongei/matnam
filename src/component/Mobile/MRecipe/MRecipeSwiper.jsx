import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

export default function MainS() {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <div className="menu-box">
            <div className="menu">
              <div className="menu-icon">🥘</div>
              <div className="menu-name">국/탕/찌개</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🍚</div>
              <div className="menu-name">밥/죽/떡</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🪹</div>
              <div className="menu-name">조림/볶음</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🍜</div>
              <div className="menu-name">면/만두</div>
            </div>
          </div>
          <div className="menu-box">
            <div className="menu">
              <div className="menu-icon">🌶️</div>
              <div className="menu-name">김치/젓갈/장</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🧉</div>
              <div className="menu-name">양념/소스</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🍤</div>
              <div className="menu-name">찜/튀김</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🥂</div>
              <div className="menu-name">차/음료/술</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="menu-box">
            <div className="menu">
              <div className="menu-icon">🍩</div>
              <div className="menu-name">디저트/간식</div>
            </div>
            <div className="menu">
              <div className="menu-icon">🍽️</div>
              <div className="menu-name">기타</div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

const Container = styled.div`
  height: 170px;
  background-color: var(--hover-gray);
  padding: 20px 0px;
  border-radius: 10px;
  .swiper {
    height: 170px;
  }

  .menu-box {
    display: flex;
    justify-content: center;
  }

  .menu {
    padding: 10px;
  }

  .menu-icon {
    font-size: 1.7rem;
    text-align: center;
  }

  .menu-name {
    margin-top: 5px;
    font-weight: 700;
  }
`;
