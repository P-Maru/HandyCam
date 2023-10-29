import { Link, useNavigate } from "react-router-dom";
import "../style/Navbar.css";
import axios from "axios";
import React, { useState } from "react";
import { Login_id, logout } from "../page/LoginPage";
var video_index = 0;
export { video_index };

function Navbar() {
  // console.log(props.insert_id);

  let [search_text, settext] = useState("");
  const navigate = useNavigate();
  const handleSave = (event) => {
    event.preventDefault();

    axios
      .get(`/video_list`)
      .then((response) => {
        const videoList = response.data;
        const foundVideo = videoList.find(
          (video) => video.video_title === search_text
        );

        if (foundVideo) {
          const video_type = foundVideo.video_type;
          const new_count = foundVideo.count + 1;
          console.log(new_count);
          // 예시: count 값을 1 증가시키기
          axios
            .put(`/video_list/${foundVideo.video_id}`, { count: new_count })
            .then((putResponse) => {
              // 성공적으로 수정된 경우 여기에 추가 로직 작성 가능
              console.log(
                "Video count successfully updated:",
                putResponse.data
              );

              // 여기에 페이지 이동 등의 추가 로직 작성
              const dynamicURL = determineDynamicURL(foundVideo);
              navigate(dynamicURL);
            })
            .catch((putError) => {
              console.error(
                "Error updating video count:",
                putError.response.data
              );
            });
        } else {
          // 특정 video_title을 찾지 못했을 때
          alert("검색 실패");
        }
      })
      .catch((error) => {
        console.error("Error fetching video list:", error);
      });
  };

  // video_type에 따라 동적 URL을 결정하는 함수
  const determineDynamicURL = (foundVideo) => {
    switch (foundVideo.video_type) {
      case "의사":
        return `../DoctorSign/${foundVideo.video_id}`;
      case "약":
        return `../DrugSign/${foundVideo.video_id - 16}`;
      case "환자":
        return `../PatientSign/${foundVideo.video_id - 8}`;
      case "의료기기":
        return `../MedicalEquipmentSign/${foundVideo.video_id - 24}`;
      default:
        return "";
    }
  };

  return (
    <div className="Navbar">
      <div className="navbar-1">
        <span className="navbar-logo" style={{ marginTop: "20px" }}>
          <Link to="/">
            <img src="./logo.png" id="logo-link" alt="None" />
          </Link>
        </span>
        <form onSubmit={handleSave}>
          <div className="search">
            <div className="searcharea">
              <input
                placeholder="검색어를 입력해주세요"
                className="searchtext"
                onChange={(e) => {
                  settext(e.target.value);
                }}
              />
              <button className="searchbtn">검색</button>
            </div>
          </div>
        </form>

        {Login_id ? (
          <div className="LoginBtn">
            <Link to="/" className="LoginPageBtn" onClick={logout}>
              로그아웃
            </Link>
          </div>
        ) : (
          <>
            <div className="LoginBtn">
              <Link to="/LoginPage" className="LoginPageBtn">
                로그인
              </Link>
            </div>
            <div className="SignUpBtn">
              <Link to="/SignUpPage" className="SignUpPageBtn">
                회원가입
              </Link>
            </div>
          </>
        )}
        {/* <div className="LoginBtn">
          <Link to="/LoginPage" className="LoginPageBtn">
            로그인
          </Link>
        </div>
        <div className="SignUpBtn">
          <Link to="/SignUpPage" className="SignUpPageBtn">
            회원가입
          </Link>
        </div> */}
      </div>
      <div className="navbar-2">
        {Login_id ? (
          <div className="navbar-btn">
            <Link to="/Service" className="ServicePageBtn">
              인식 서비스
            </Link>
            <Link to="/HospitalSignPage" className="HospitalSignPageBtn">
              병원생활 수어
            </Link>
            <Link to="/BoardPage" className="BoardPageBtn">
              게시판
            </Link>
            <Link to="/NoticePage" className="NoticePageBtn">
              공지사항
            </Link>
          </div>
        ) : (
          <div className="navbar-btn">
            <Link to="/LoginPage" className="ServicePageBtn">
              인식 서비스
            </Link>
            <Link to="/LoginPage" className="HospitalSignPageBtn">
              병원생활 수어
            </Link>
            <Link to="/LoginPage" className="BoardPageBtn">
              게시판
            </Link>
            <Link to="/LoginPage" className="NoticePageBtn">
              공지사항
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
