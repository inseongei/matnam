import React, { useState, useRef } from "react";
import styled from "styled-components";
import Header from "../../component/Header";
import { FaChevronLeft } from "react-icons/fa";
import { Toast } from "../../sweetalert";
import { useNavigate } from "react-router-dom";

export default function MSign() {
  const nicknameRef = useRef();
  const idRef = useRef();
  const pwRef = useRef();
  const pwcheckRef = useRef();
  const navigate = useNavigate();

  // 회원가입 체크
  const checkSignUp = () => {
    if (
      2 > nicknameRef.current.value.length ||
      6 < nicknameRef.current.value.length
    ) {
      nicknameRef.current.focus();
      Toast.fire({
        icon: "error",
        title: "2~6글자 사이로 설정해주세요",
      });
    } else if (!idRef.current.value.includes("@")) {
      idRef.current.focus();
      Toast.fire({
        icon: "error",
        title: "이메일형식으로 적어주세요",
      });
    } else if (pwRef.current.value.length < 6) {
      pwRef.current.focus();
      Toast.fire({
        icon: "error",
        title: "6자 이상의 패스워드를 설정해주세요",
      });
    } else if (pwRef.current.value !== pwcheckRef.current.value) {
      pwcheckRef.current.focus();
      Toast.fire({
        icon: "error",
        title: "패스워드가 일치하지 않습니다",
      });
    } else {
      Toast.fire({
        icon: "success",
        title: "회원가입을 축하합니다.",
      });
      nicknameRef.current.value = "";
      idRef.current.value = "";
      navigate("/Login");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="HeaderBar">
          <FaChevronLeft
            className="goBack-icon"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <div>
          <h1 className="title">
            쉽고 빠르게 <b className="bold">회원가입</b>
          </h1>
        </div>

        <div className="inputBox">
          <p>닉네임</p>
          <input type="text" className="inputStyle" ref={nicknameRef} />
          <p>아이디</p>
          <input type="text" className="inputStyle" ref={idRef} />

          <p>패스워드</p>
          <input type="password" className="inputStyle" ref={pwRef} />

          <p>패스워드 확인</p>
          <input type="password" className="inputStyle" ref={pwcheckRef} />
        </div>
        <div className="btn-box">
          <button className="OKBtn" onClick={checkSignUp}>
            확인
          </button>
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

  .goBack-icon {
    margin-left: 10px;
    font-size: 1.2rem;
    width: 30px;
  }
  .title {
    padding: 20px;
    text-align: center;
    font-size: 1.5rem;
  }

  .bold {
    font-weight: 700;
    color: var(--main-color);
  }

  .inputBox {
    display: flex;
    flex-direction: column;
  }

  .inputBox p {
    padding: 10px 10px 0px 0px;
    margin-left: 30px;
  }

  .inputStyle {
    width: 300px;
    height: 10px;
    padding: 15px 10px 10px 10px;
    border: none;
    border-bottom: 1px solid var(--dark-gray);
    outline: none;
    transition: all 0.4s ease 0s;
    margin-bottom: 10px;
    margin-left: 30px;
  }

  .btn-box {
    display: flex;
    justify-content: center;
  }

  .OKBtn {
    display: flex;
    padding: 15px;
    width: 300px;
    justify-content: center;
    border-radius: 10px;
    margin-top: 20px;
    background-color: var(--main-color);
    color: var(--white-color);
    font-weight: 400;
  }
`;
