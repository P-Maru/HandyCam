import React from "react";
import { Link } from "react-router-dom";
import "../style/MainPage.css";

function MainPage() {
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
      <div className="MainPage">
        <div className="Top">
          <div className="leftSide">
            <h1>
              정확한 수어 인식 서비스<br></br>핸디캠, HandyCam
            </h1>
            <Link to="/Service">
              <button className="ServiceBtn">서비스 시작</button>
            </Link>
          </div>
          <div className="rightSide">
            <h1> 실시간 검색순위 </h1>
            <ol className="real-time-order">
              <li>감기에 걸렸어요</li>
              <li>배가 아파요</li>
              <li>어디가 아프신가요?</li>
            </ol>
          </div>
        </div>
        <div className="Bottom">
          <h1>오늘의 동영상</h1>
          <div className="Video">
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/jPkgmuWmjig"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/175zBnyr2Lc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/dfMlqdO5Mr0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/sf2_-4Yq_sU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
