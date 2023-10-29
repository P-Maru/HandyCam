import "../style/SignUpPage.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function SignUpPage() {
  const [id, setUserId] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState(""); // 비밀번호 필드에 대한 상태 변수 추가
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newUser = {
      id: id,
      name: name,
      nickname: nickname,
      email: email,
      telephone: telephone,
      password: password,
    };

    axios
      .post("/member_list", newUser)
      .then((response) => {
        console.log("member added successfully");
        navigate("/LoginPage");
      })
      .catch((error) => {
        console.log("Error while adding member:", error);
        alert("회원가입에 실패하셨습니다. 아이디를 바꿔주세요");
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
        <h2 class="SignUpHeader">HandyCam Sign-Up</h2>
        <div class="SignContent">
          <label>이름</label>
          <input
            className="write_Username"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
            type="text"
            name="name"
            required
          />
        </div>
        <div class="SignContent">
          <label>닉네임</label>
          <input
            className="write_UserNickname"
            onChange={(event) => {
              setNickname(event.target.value);
            }}
            value={nickname}
            type="text"
            name="nickname"
            required
          />
        </div>
        <div class="SignContent">
          <label>ID</label>
          <input
            className="write_UserId"
            onChange={(event) => {
              setUserId(event.target.value);
            }}
            value={id}
            type="text"
            name="id"
            required
          />
        </div>
        <div class="SignContent">
          <label>비밀번호</label>
          <input
            className="write_UserPassword"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            type="password"
            name="password"
            required
          />
        </div>

        <div class="SignContent">
          <label>이메일</label>
          <input
            className="write_UserEmail"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            type="text"
            name="email"
            required
          />
        </div>
        <div class="SignContent">
          <label>전화번호</label>
          <input
            className="write_Usertelehpone"
            onChange={(event) => {
              setTelephone(event.target.value);
            }}
            value={telephone}
            type="text"
            name="telephone"
            required
          />
        </div>
        {/* <Link to="/LoginPage"> */}
        <div class="Btns">
          <button type="submit" id="SignUpSubmit" class="Btn">
            회원가입
          </button>
        </div>
        {/* </Link> */}
      </form>
    </div>
  );
}
