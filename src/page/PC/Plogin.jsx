import React, { useState, useRef } from "react";
import Header from "../../component/Header";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { Toast } from "../../sweetalert";

export default function P_Login() {
  const [menu, setMenu] = useState(true);
  const nicknameRef = useRef();
  const idRef = useRef();
  const pwRef = useRef();
  const pwcheckRef = useRef();

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
      setMenu(true);
    }
  };
  return (
    <>
      <Header />
      <Container menu={menu.toString()}>
        <h1 className="LoginHeader">맛남의 공간에 오신걸 환영합니다.</h1>
        <div className="LoginBox">
          <div className="MenuBox">
            <div className="LoginBtn Btn" onClick={() => setMenu(true)}>
              로그인
            </div>
            <div className="SignUpBtn Btn" onClick={() => setMenu(false)}>
              회원가입
            </div>
          </div>
          <div className="LoginTitle">
            {menu
              ? "맛있는 레시피를 찾으러 오셨나요😆"
              : "쉽고 빠르게 회원가입 해보세요😍"}
          </div>
          {menu ? (
            <div className="inputBox">
              <input type="text" className="inputStyle" placeholder="아이디" />
              <input
                type="password"
                className="inputStyle"
                placeholder="패스워드"
              />
              <button className="Login">로그인</button>
              <div className="LoginLine">OR</div>
              <button className="KakaoLogin">
                <RiKakaoTalkFill className="kakao" />
                카카오 로그인
              </button>
            </div>
          ) : (
            <div className="inputBox">
              <input
                type="text"
                placeholder="닉네임"
                ref={nicknameRef}
                className="inputStyle"
              />
              <input
                type="email"
                placeholder="아이디"
                ref={idRef}
                className="inputStyle"
              />
              <input
                type="password"
                placeholder="패스워드"
                ref={pwRef}
                className="inputStyle"
              />
              <input
                type="password"
                placeholder="패스워드 확인"
                ref={pwcheckRef}
                className="inputStyle"
              />
              <button onClick={checkSignUp} className="Login">
                회원가입
              </button>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-top: 80px;

  .LoginHeader {
    text-align: center;
    padding: 40px;
    font-weight: 700;
    font-size: 1.6rem;
  }

  .LoginTitle {
    font-size: 1.6rem;
    text-align: center;
    padding: 40px 20px 20px 20px;
  }

  .LoginBox {
    border: 1px solid var(--dark-gray);
    width: 600px;
    height: 500px;
    margin: 0 auto;
    border-radius: 10px;
  }

  .MenuBox {
    display: flex;
  }

  .Btn {
    padding: 20px;
    width: 50%;
    text-align: center;
    cursor: pointer;
  }

  .LoginBtn {
    border-radius: 10px 10px 0px 0px;
    border-right: 1px solid var(--dark-gray);
    background-color: ${({ menu }) =>
      menu == "true" ? "var(--main-color)" : "var(--hover-gray)"};
    color: ${({ menu }) => (menu == "true" ? "var(--white-color)" : "black")};
  }

  .SignUpBtn {
    border-radius: ${({ menu }) =>
      menu == "true" ? "10px 0px 0px 0px;" : "10px 10px 0px 0px"};
    border-bottom: 1px solid var(--dark-gray);
    background-color: ${({ menu }) =>
      menu == "true" ? "var(--hover-gray)" : "var(--main-color) "};
    color: ${({ menu }) => (menu == "true" ? "black" : "var(--white-color) ")};
  }

  .inputBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 380px;
    padding: 20px;
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

  .inputStyle:focus {
    border: 1px solid var(--main-color);
  }

  .Login {
    padding: 15px;
    border: none;
    background-color: var(--sub-color);
    border-radius: 10px;
    width: 322px;
    margin: 10px;
  }

  .LoginLine {
    width: 350px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .LoginLine::before {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background-color: black;
    margin-right: 10px;
  }

  .LoginLine::after {
    content: "";
    display: block;
    width: 40%;
    height: 1px;
    background-color: black;
    margin-left: 10px;
  }

  .KakaoLogin {
    margin-top: 15px;
    width: 322px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fee500;
  }

  .kakao {
    width: 30px;
  }

  .info {
  }
`;
