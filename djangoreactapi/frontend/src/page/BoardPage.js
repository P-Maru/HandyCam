import "../style/BoardPage.css";
import { Link } from "react-router-dom";

function BoardPage() {
  const boardList = [
    {
      id: 1,
      title: "병원 수어 영상말고 일생생활 수어 영상도 넣어주세요!.",
      writer: "정세연",
      date: "2022-04-19",
    },
    {
      id: 2,
      title: "인식이 제대로 안되는 부분이 있습니다. 데이터를 더 넣어주세요!",
      writer: "권순규",
      date: "2022-04-12",
    },
    {
      id: 3,
      title: "실시간 검색이 제대로 안이루어져있는 것 같아요!",
      writer: "민선홍",
      date: "2022-04-03",
    },
    {
      id: 4,
      title: "오늘의 수어 영상 업로드 종종 부탁드립니다!",
      writer: "정세연",
      date: "2022-03-27",
    },
    {
      id: 5,
      title: "물체 인식이 제대로 안되는 부분이 있습니다. 수정 해주세요!",
      writer: "권순규",
      date: "2022-03-20",
    },
    {
      id: 6,
      title: "수어 인식 및 물체 인식이 제대로 잘 되네요! 감사합니다!",
      writer: "민선홍",
      date: "2022-03-13",
    },
  ];
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
                {boardList.map((board) => (
                  <tr key={board.id}>
                    <td>{board.id}</td>
                    <td>
                      <Link className="boardname" to={`/board/${board.id}`}>
                        {board.title}
                      </Link>
                    </td>
                    <td>{board.writer}</td>
                    <td>{board.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardPage;
