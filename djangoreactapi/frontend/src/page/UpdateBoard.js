import "../style/WriteBoard.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function BoardUpdate() {
  const { id: board_id } = useParams();
  // const [board_id, setBoardId] = useState("");
  const [id, setBoardUser] = useState("");
  const [board_title, setBoardTitle] = useState("");
  const [board_content, setBoardContent] = useState("");
  const [password, setPassword] = useState(""); // 비밀번호 필드에 대한 상태 변수 추가
  const [views, setViews] = useState("");
  // const [write_day, setWriteday] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/board_list/${board_id}`)
      .then((response) => {
        let Board = response.data;
        // setBoardId(Board.board_id);
        setBoardTitle(Board.board_title);
        // setBoardUser(Board)
        setBoardTitle(Board.board_title);
        setBoardContent(Board.board_content);
        setViews(Board.views);
        // setWriteday(Board.write_day);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [board_id]);
  const handleSave = (event) => {
    event.preventDefault();
    const newBoard = {
      board_id: board_id,
      board_title: board_title,
      board_content: board_content,
      board_user: id, // 사용자 ID 필드는 비워두었습니다.
      views: views, // 초기값으로 0을 설정
      write_day: new Date().toJSON().slice(0, 10), // 현재 날짜를 문자열로 저장
      password: password, // 비밀번호 필드 추가
    };

    axios
      .put(`/board_list/${board_id}`, newBoard)
      .then((response) => {
        console.log("Board update successfully");
        navigate("/BoardPage");
      })
      .catch((error) => {
        console.log("Error while update board:", error);
      });
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(../background.png)",
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        backgroundRepeat: "repeat-y",
      }}
    >
      <h1 className="title_name">게시판 글 작성</h1>
      <div className="WriteBoard">
        <form onSubmit={handleSave}>
          <table className="write_boardform" width="800">
            <tbody>
              {" "}
              {/* <tr> 태그는 <tbody> 태그로 감싸야 합니다. */}
              <tr>
                <th>이름</th>
                <td>
                  <input
                    className="write_boardname"
                    onChange={(event) => {
                      setBoardUser(event.target.value);
                    }}
                    value={id}
                    type="text"
                    name="board_user"
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>제목</th>
                <td>
                  <input
                    className="write_boardtitle"
                    onChange={(event) => {
                      setBoardTitle(event.target.value);
                    }}
                    value={board_title}
                    type="text"
                    name="board_title"
                  />
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td>
                  <input
                    className="write_boardcontent"
                    onChange={(event) => {
                      setBoardContent(event.target.value);
                    }}
                    value={board_content}
                    type="text"
                    name="board_content"
                  />
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <input
                    className="write_boardpw"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    placeholder="비밀번호"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <div className="writeBoard_btn_div">
                    <button
                      onClick={handleSave}
                      type="submit"
                      className="writeBoard_btn"
                    >
                      저장
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
