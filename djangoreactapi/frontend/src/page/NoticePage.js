import "../style/NoticePage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
export default function NoticePage() {
  const [noticeList, setNoticeList] = useState([]);

  const fetchNoticeList = () => {
    axios
      .get("/notice_list")
      .then((response) => {
        setNoticeList(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching notice:", error);
      });
  };

  useEffect(() => {
    fetchNoticeList();
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
      <div className="NoticePage">
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
              {noticeList.map((notice) => (
                <tr key={notice.id}>
                  <td>{notice.notice_id}</td>
                  <td>{notice.notice_title}</td>
                  <td>{notice.writer}</td>
                  <td>{notice.write_day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
