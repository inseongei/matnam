import React from "react";
import styled from "styled-components";
import Logo from "../asset/Logo.png";

export default function Loading() {
  return (
    <LoadingBox>
      <div className="imageBox">
        <img src={Logo} alt="로고" />
        <div className="title">
          <div>Loading...</div>
        </div>
      </div>
    </LoadingBox>
  );
}

const LoadingBox = styled.div`
  background-color: var(--point-color);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .imageBox {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-top: 10px;
    font-size: 1.2rem;
    font-weight: 700;
    display: flex;
  }
`;
