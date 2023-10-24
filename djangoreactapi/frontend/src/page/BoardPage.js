import "../style/BoardPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
export default function BoardPage() {
  const [BoardList, setBoardList] = useState([]);

  const fetchBoardList = () => {
    axios
      .get("/board_list")
      .then((response) => {
        setBoardList(response.data);
        console.log("asdf");
      })
      .catch((error) => {
        console.log("Error while fetching books:", error);
      });
  };

  useEffect(() => {
    fetchBoardList();
  }, []);

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
      <div className="BoardPage">
        <div className="BoardleftSide">
          <h1 id="BoardTitle">게시판</h1>
          <div className="BoardleftSideBtn">
            <Link to="/WriteBoard" id="WriteBoardBtn">
              글쓰기
            </Link>
          </div>
        </div>
        <div className="BoardrightSide">
          <div className="boardlist_div">
            <table className="boardtable">
              <thead className="boardhead">
                <tr>
                  <th>번호</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody className="boardbody">
                {BoardList.map((Board) => {
                  return (
                    <tr key={Board.board_id}>
                      <td>{Board.board_id}</td>
                      <td>
                        <Link className="boardname" to={"/Board/$board.id"}>
                          {Board.board_title}
                        </Link>
                      </td>
                      <td>{Board.user}</td>
                      <td>{Board.write_day}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
