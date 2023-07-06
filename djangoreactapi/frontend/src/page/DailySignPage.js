import "../style/DailySignPage.css";
import { Link } from "react-router-dom";

function DailySignPage() {
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
      <div className="DailySignPage">
        <div className="DailyleftSide">
          <h1 id="DailyTitle">일상생활 수어</h1>
        </div>
        <div className="DailyrightSide"></div>
      </div>
    </div>
  );
}

export default DailySignPage;
