import React, { useEffect, useRef } from "react";
import MenuBar from "../component/MenuBar";
import styled from "styled-components";
import Logo from "../asset/Logo.png";
import { useNavigate, Link } from "react-router-dom";
import { MenuStateAtom, usersAtom } from "../Recoil/atom";
import { useRecoilState } from "recoil";
import { Toast, showToast } from "../services/sweetalert";
import { FcGoogle } from "react-icons/fc";
import { FaX } from "react-icons/fa6";
import { collection, addDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { db } from "../firebase";
import { userData } from "../Firebase/firebaseFn";

export default function Login() {
  const [menu, setMenu] = useRecoilState(MenuStateAtom);
  const [users, setUsers] = useRecoilState(usersAtom);
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  // 엔터키 Keydown 이벤트 적용
  const handleEnter = (e) => {
    if (e.key === "Enter") loginhandle();
  };

  // 하단 메뉴바 상태 관리 - useEffect
  useEffect(() => {
    setMenu((prev) => ({
      ...prev,
      Login: true,
    }));
    return () => {
      setMenu((prev) => ({
        ...prev,
        Login: false,
      }));
    };
  }, [menu.Login]);

  // 로그인 처리 함수 - loginhandle
  const loginhandle = () => {
    const idValue = idRef.current.value;
    const pwValue = pwRef.current.value;
    if (idValue.length === 0) {
      showToast("error", "아이디를 입력하세요", idRef);
    } else if (pwValue.length === 0) {
      showToast("error", "패스워드를 입력하세요", pwRef);
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, idValue, pwValue)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const DBUserData = await userData(user.displayName, user.email);
          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("nickname", DBUserData.nickname);
          localStorage.setItem("profile", DBUserData.profile);
          localStorage.setItem("email", DBUserData.email);
          showToast("success", `${DBUserData.nickname} 님 환영합니다.`);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          showToast("error", "맛남의 공간 회원이 아닙니다.", idRef);
        });
    }
  };

  // 구글 로그인 처리 함수 - googleLogin
  const googleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (userCredential) => {
      const user = userCredential.user;
      const DBUserData = await userData(user.displayName, user.email);

      // 나의 회원 테이블이 DB에 있다는 소리
      if (DBUserData.email === user.email) {
        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("nickname", DBUserData.nickname);
        localStorage.setItem("profile", DBUserData.profile);
        localStorage.setItem("email", DBUserData.email);
        navigate("/");
        showToast("success", `${DBUserData.nickname}님 환영합니다.`);
      } else {
        if (user.displayName === DBUserData.nickname) {
          const nickname = prompt(
            "동일한 닉네임이 있습니다. 다른 닉네임을 적어주세요"
          );
          if (nickname === null) return false;
          await addDoc(collection(db, "users"), {
            ...users,
            email: user.email,
            nickname,
            profile: user.photoURL,
          });
          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("nickname", nickname);
          localStorage.setItem("profile", user.photoURL);
          localStorage.setItem("email", user.email);
          navigate("/");
          showToast("success", `${nickname}님 환영합니다.`);
        } else {
          await addDoc(collection(db, "users"), {
            ...users,
            email: user.email,
            nickname: user.displayName,
            profile: user.photoURL,
          });
          localStorage.setItem("accessToken", user.accessToken);
          localStorage.setItem("nickname", user.displayName);
          localStorage.setItem("profile", user.photoURL);
          localStorage.setItem("email", user.email);
          navigate("/");
          showToast("success", `${user.displayName}님 환영합니다.`);
        }
      }
    });
  };

  return (
    <>
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
            <input
              type="text"
              className="inputStyle"
              placeholder="아이디"
              ref={idRef}
              onKeyDown={handleEnter}
            />
            <input
              type="password"
              className="inputStyle"
              placeholder="비밀번호"
              ref={pwRef}
              onKeyDown={handleEnter}
            />
            <button className="Login Btn" onClick={loginhandle}>
              로그인
            </button>
            <button className="googleLogin Btn" onClick={googleLogin}>
              <FcGoogle className="google" />
              구글 로그인
            </button>
            <Link to="/SignUP">
              <div className="signUpInfo"> 맛남의 공간 회원가입</div>
            </Link>
          </div>
        </div>
        <MenuBar />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  .HeaderBar {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .OutIcon {
    font-size: 1.2rem;
    margin-left: 15px;
    cursor: pointer;
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
    font-weight: 700;
  }

  .inputStyle {
    width: 300px;
    height: 20px;
    padding: 10px;
    border: 1px solid var(--gray-400);
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
    background-color: var(--main-color);
  }

  .googleLogin {
    background-color: var(--gray-300);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .google {
    width: 30px;
  }

  .signUpInfo {
    margin: 15px;
    font-weight: 700;
    color: var(--gray-900);
  }
`;
