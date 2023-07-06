import "../style/NoticePage.css";
import { Link } from "react-router-dom";

function NoticePage() {
  const noticeList = [
    {
      id: 1,
      title: "[중요] 2023년 4월 19일 수어 영상 업데이트합니다.",
      writer: "정세연",
      date: "2022-04-19",
    },
    {
      id: 2,
      title: "[중요] 2023년 4월 12일 수어 영상 업데이트합니다.",
      writer: "권순규",
      date: "2022-04-12",
    },
    {
      id: 3,
      title: "[중요] 2023년 4월 03일 수어 영상 업데이트합니다.",
      writer: "민선홍",
      date: "2022-04-03",
    },
    {
      id: 4,
      title: "[중요] 2023년 3월 27일 수어 영상 업데이트합니다.",
      writer: "정세연",
      date: "2022-03-27",
    },
    {
      id: 5,
      title: "[중요] 2023년 3월 20일 수어 영상 업데이트합니다.",
      writer: "권순규",
      date: "2022-03-20",
    },
    {
      id: 6,
      title: "[중요] 2023년 3월 13일 수어 영상 업데이트합니다.",
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
      <div className="NoticePage">
        <div className="NoticeleftSide">
          <h1 id="NoticeTitle">공지사항</h1>
          <div className="NoticeleftSideBtn">
            <Link to="/WriteBoard" id="WriteBoardBtn">
              글쓰기
            </Link>
          </div>
        </div>
        <div className="NoticerightSide"></div>
        <div className="noticelist_div">
          <table className="noticetable">
            <thead className="noticehead">
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>작성일</th>
              </tr>
            </thead>
            <tbody className="noticebody">
              {noticeList.map((board) => (
                <tr key={board.id}>
                  <td>{board.id}</td>
                  <td>
                    <Link className="noticename" to={`/board/${board.id}`}>
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
  );
}

export default NoticePage;
