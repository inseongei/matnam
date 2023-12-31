import React from "react";
import Header from "../../component/Header";
import styled from "styled-components";
import { FaX } from "react-icons/fa6";
import Logo from "../../asset/Logo.png";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Mlogin() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Container>
        <div className="HeaderBar">
          <FaX
            className="OutIcon"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div className="LoginMainBox">
          <div className="imageBox">
            <img src={Logo} alt="로고" />
          </div>
          <div className="inputBox">
            <input type="text" className="inputStyle" placeholder="아이디" />
            <input
              type="password"
              className="inputStyle"
              placeholder="비밀번호"
            />
            <button className="Login Btn">로그인</button>
            <button className="kakaoLogin Btn">
              <RiKakaoTalkFill className="kakao" />
              카카오 로그인
            </button>
            <Link to="/SignUP">
              <div className="signUpInfo"> 맛남의 공간 회원가입</div>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  .HeaderBar {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .OutIcon {
    font-size: 1.2rem;
    margin-left: 15px;
  }

  .LoginMainBox {
    height: 100%;
  }

  .imageBox {
    display: flex;
    justify-content: center;
    padding: 40px;
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .inputStyle {
    width: 300px;
    height: 20px;
    padding: 10px;
    border: 1px solid var(--dark-gray);
    border-radius: 10px;
    outline: none;
    transition: all 0.4s ease 0s;
    margin-bottom: 10px;
  }

  .Btn {
    padding: 15px;
    border: none;
    border-radius: 10px;
    width: 322px;
    margin: 10px;
    color: black;
  }
  .Login {
    background-color: var(--sub-color);
  }

  .kakaoLogin {
    background-color: #fee500;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .kakao {
    width: 30px;
  }

  .signUpInfo {
    margin: 15px;
    font-weight: 700;
    color: var(--main-color);
  }
`;
