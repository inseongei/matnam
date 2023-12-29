import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../../asset/Logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function P_Header() {
  // 로컬 저장소 - 토큰 관리
  const [token, setToken] = useState(null);
  // 헤더 토글 - 메뉴 관리
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const Token = localStorage.getItem("accessToken");
    if (Token) setToken(Token);
  }, [token]);

  return (
    <Container toggle={toggle.toString()}>
      <nav className="wrapper">
        <img src={Logo} alt="로고" className="Logo-icon" />
        <ul className="header-menu-box">
          <li className="header-menu">레시피광장</li>
          <li className="header-menu">쿡클래스</li>
          <li className="header-menu">쿡쇼핑</li>
        </ul>
        {token ? (
          <div
            className="Login-info login-btn"
            onClick={() => setToggle(!toggle)}
          >
            <GiHamburgerMenu className="toggle-btn" />
            닉네임
          </div>
        ) : (
          <Link to="/Login">
            <button className="login-btn">로그인</button>
          </Link>
        )}
      </nav>
      <div className="header-sub-menu">
        <div className="submenu-content">마이페이지</div>
        <div className="submenu-content">로그아웃</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--white-color);
  border-bottom: 1px solid var(--hover-gray);
  position: fixed;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0px 40px;
  }

  .Logo-icon {
    height: 50px;
  }

  .header-menu-box {
    display: flex;
  }

  .header-menu {
    padding: 15px;
    margin-right: 10px;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
  }

  .header-menu:hover {
    background-color: var(--hover-gray);
  }

  .login-btn {
    border: none;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid var(--hover-gray);
    background-color: var(--white-color);
  }

  .login-btn:hover {
    background-color: var(--hover-gray);
  }

  .Login-info {
    display: flex;
    align-items: center;
    background-color: var(--white-color);
    border: 1px solid var(--hover-gray);
  }

  .Login-info:hover {
    background-color: var(--hover-gray);
  }

  .toggle-btn {
    font-size: 1.3rem;
    margin-right: 10px;
  }

  .header-sub-menu {
    border: 1px solid rgb(212, 199, 199);
    position: absolute;
    right: 20px;
    border-radius: 10px;
    width: 140px;
    height: 100px;
    z-index: 1;
    background-color: #fff;
    opacity: 1;
    visibility: ${({ toggle }) => (toggle === "true" ? "visible" : "hidden")};
  }

  .submenu-content {
    width: 100%;
    height: 50%;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .submenu-content:hover {
    background-color: var(--hover-gray);
  }
`;
