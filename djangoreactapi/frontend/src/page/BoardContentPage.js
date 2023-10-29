import "../style/BoardContentPage.css";
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
export default function BoardContentPage() {
  // 게시물 ID를 URL 파라미터에서 가져옵니다.
  const { id: board_id } = useParams();
  const [Board, setBoard] = useState({ board_id: "", board_content: "" });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/board_list/${board_id}`)
      .then((response) => {
        setBoard(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching board content:", error);
      });
  }, [board_id]);

  // const deleteBoard = async (board_id) => {
  //   try {
  //     const response = await axios.delete(`/board_list/${board_id}`);
  //     console.log("asdf");
  //   } catch (error) {
  //     console.log("qwer");
  //     throw error;
  //   }
  // }

  const handleDeleteConfirm = (board_id) => {
    axios
      .delete(`/board_list/${board_id}`)
      .then(() => {
        console.log("Board deleted successfully.");
        navigate("/BoardPage");
      })
      .catch((error) => {
        console.log("Error while deleting board:", error);
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
      <div className="BoardContentPage">
        <div className="ViewBoard">
          <table className="ViewBoard_Table">
            <tbody>
              <tr className="ViewBoard_Title">
                <th className="HeadLine">제목</th>
                <td className="Content">{Board.board_title}</td>
              </tr>
              <tr className="ViewBoard_User">
                <th className="HeadLine">이름</th>
                <td className="Content">{Board.nickname}</td>
              </tr>
              <tr className="ViewBoard_Content">
                <th className="HeadLine">내용</th>
                <td className="Content">{Board.board_content}</td>
              </tr>
            </tbody>
          </table>
          <div className="ViewBoard_Btn">
            {" "}
            <Link
              className="UpdateBoardBtn"
              to={`/UpdateBoard/${Board.board_id}`}
              id="UpdateBoardBtn"
            >
              수정
            </Link>
            <button
              className="DeleteBoardBtn"
              onClick={() => handleDeleteConfirm(Board.board_id)}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
