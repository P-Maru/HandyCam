import "../style/SignUpPage.css";
import { Link } from "react-router-dom";

function SignUpPage() {
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
        <h2 class="SignUpHeader">HandyCam Sign-Up</h2>
        <div class="SignContent">
          <label>이름</label>
          <input type="text" placeholder="이름" />
        </div>
        <div class="SignContent">
          <label>닉네임</label>
          <input type="text" placeholder="닉네임" />
        </div>
        <div class="SignContent">
          <label>ID</label>
          <input type="text" placeholder="ID" />
        </div>
        <div class="SignContent">
          <label>비밀번호</label>
          <input type="password" placeholder="비밀번호" />
        </div>
        {/* <div class="SignContent">
          <label>사용자 성별</label>
              <select class="gender" value={Sex} onchange={onSexHandler} >
                  {sexlist.map((item)=>(
                      <option value={item} key={item}>
                          {item}
                      </option>
                  ))}
              </select>                 
          </div> */}
        <div class="SignContent">
          <label>이메일</label>
          <input type="email" placeholder="이메일" />
        </div>
        <div class="SignContent">
          <label>전화번호</label>
          <input type="text" placeholder="전화번호" />
        </div>
        {/* <div class="SignContent">
          <label>분야</label>
              <select class="role" value={Role} onchange={onRoleHandler} >
                  {rolelist.map((item)=>(
                      <option value={item} key={item}>
                          {item}
                      </option>
                  ))}
              </select>                 
          </div> */}
        <Link to="/LoginPage">
          <div class="Btns">
            <button type="submit" id="SignUpSubmit" class="Btn">
              회원가입
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}
export default SignUpPage;
