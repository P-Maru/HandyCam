import "../style/WriteBoard.css";
import { Link } from "react-router-dom";

function WriteBoard() {
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
      <h1 className="title_name">게시판 글 작성</h1>
      <div className="WriteBoard">
        <form>
          <table className="write_form" width="800">
            <tr>
              <th>이름</th>
              <td>
                <input className="write_name" type="text"></input>
              </td>
            </tr>
            <tr>
              <th>제목</th>
              <td>
                <input className="write_title" type="text"></input>
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                <textarea className="write_content"></textarea>
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input
                  className="write_pw"
                  type="password"
                  placeholder="비밀번호"
                ></input>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <div className="write_btn_div">
                  <button className="write_btn">저장</button>
                </div>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default WriteBoard;
