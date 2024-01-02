import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { FaBookReader, FaPizzaSlice, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function M_Header() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const Token = localStorage.getItem("accessToken");
    if (Token) setToken(Token);
  }, [token]);

  return (
    <Container>
      <div className="menu-bar">
        <Link to="/Recipe">
          <div className="menu-content">
            <div>
              <FaPizzaSlice className="menu-icon" />
            </div>
            <div>레시피광장</div>
          </div>
        </Link>

        <div className="menu-content">
          <div>
            <FaBookReader className="menu-icon" />
          </div>
          <div>쿡클래스</div>
        </div>
        <Link to="/">
          <div className="menu-content">
            <div>
              <IoHomeSharp className="menu-icon" />
            </div>
            <div>홈화면</div>
          </div>
        </Link>
        <div className="menu-content">
          <div>
            <FaShoppingCart className="menu-icon" />
          </div>
          <div>쿡쇼핑</div>
        </div>
        <Link to="/Login">
          <div className="menu-content">
            <div>
              <FaUser className="menu-icon" />
            </div>

            <div>로그인</div>
          </div>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  background-color: #fff;
  font-weight: 700;
  z-index: 1;

  .menu-bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .menu-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-icon {
    font-size: 1.2rem;
    padding: 5px;
  }
`;
