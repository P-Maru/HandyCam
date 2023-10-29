import "../style/LoginPage.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState, createContext, Component } from "react";
import Navbar from "../components/Navbar.js";
var Login_id = null;
const logout = () => {
  Login_id = null;
};
export { Login_id, logout };

export default function Login() {
  let [insert_id, setid] = useState("");
  let [insert_pw, setpw] = useState("");
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();

    axios
      .get(`/member_list/${insert_id}`)
      .then((response) => {
        if (
          response.data.password === insert_pw &&
          response.data.id === insert_id
        ) {
          Login_id = insert_id;
          console.log(Login_id);
          console.log("Login successfully");
          navigate("/");
        } else {
          alert("로그인에 실패하셨습니다.");
        }
      })
      .catch((error) => {
        console.log("Error login:", error);
      });
  };
  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(./background.png)",
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        backgroundRepeat: "repeat-y",
      }}
    >
      <form class="SignForm" onSubmit={handleSave}>
        <h2 class="SignInHeader">HandyCam LogIn</h2>
        <div class="SignContent">
          <label>ID</label>
          <input
            placeholder="아이디를 입력해주세요"
            id="id"
            className="login"
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
        </div>
        <div class="SignContent">
          <label>비밀번호</label>
          <input
            placeholder="비밀번호를 입력해주세요"
            id="password"
            className="login"
            type="password"
            onChange={(e) => {
              setpw(e.target.value);
            }}
          />
        </div>
        <div class="Btns">
          <button type="submit" id="SignInBtn" class="Btn">
            로그인
          </button>
        </div>
        <Link to="/SignUpPage">
          <div class="Btns">
            <button type="button" id="SingUpBtn" class="Btn">
              회원가입
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}
