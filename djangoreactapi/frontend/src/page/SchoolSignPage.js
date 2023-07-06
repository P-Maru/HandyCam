import "../style/SchoolSignPage.css";
import { Link } from "react-router-dom";

function SchoolSignPage() {
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
      <div className="SchoolSignPage">
        <div className="SchoolleftSide">
          <h1 id="SchoolTitle">학교생활 수어</h1>
        </div>
        <div className="SchoolrightSide"></div>
      </div>
    </div>
  );
}

export default SchoolSignPage;
