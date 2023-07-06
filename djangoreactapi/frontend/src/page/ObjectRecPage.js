import "../style/LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
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
      <form class="SignForm">
        <h2 class="SignInHeader">HandyCam LogIn</h2>
        <div class="SignContent">
          <label>ID</label>
          <input type="string" placeholder="아이디를 입력해주세요." />
        </div>
        <div class="SignContent">
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <Link to="/">
          <div class="Btns">
            <button type="submit" id="SignInBtn" class="Btn">
              로그인
            </button>
          </div>
        </Link>
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

export default LoginPage;
