import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-1">
        <span className="navbar-logo" style={{ marginTop: "20px" }}>
          <Link to="/">
            <img src="./logo.png" id="logo-link" alt="None" />
          </Link>
        </span>
        <div className="search">
          <div className="searcharea">
            <input
              class="searchtext"
              type="text"
              placeholder="검색을 해주세요."
            />
            <button class="searchbtn">검색</button>
          </div>
        </div>
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
      </div>
      <div className="navbar-2">
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
      </div>
    </div>
  );
}

export default Navbar;
