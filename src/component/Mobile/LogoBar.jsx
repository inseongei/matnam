import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../asset/Logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LogoBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <Container toggle={toggle.toString()}>
      <div className="header-bar">
        <Link to="/">
          <img src={Logo} alt="로고" className="logo-image" />
        </Link>
        {toggle ? (
          <FaAngleDoubleUp
            className="up-icon"
            onClick={() => setToggle(false)}
          />
        ) : (
          <IoSearchOutline
            className="search-icon"
            onClick={() => setToggle(true)}
          />
        )}
      </div>

      <div className="search-bar">
        <input type="text" placeholder="레시피를 검색해보세요" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  .header-bar {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
  }

  .search-bar {
    margin-bottom: 15px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    display: ${({ toggle }) => (toggle === "true" ? "flex" : "none")};
  }

  .search-bar input {
    border: 1px solid var(--dark-gray);
    width: 80%;
    height: 100%;
    padding-left: 10px;
    border-radius: 10px;
    outline: none;
  }

  .search-bar input:focus {
    border: 1px solid var(--dark-gray);
  }

  .logo-image {
    height: 100%;
  }

  .search-icon {
    font-size: 1.7rem;
    margin-right: 10px;
  }

  .up-icon {
    font-size: 1.7rem;
    margin-right: 10px;
  }
`;
