import { Link } from "react-router-dom";
import "../style/Service.css";

function Service() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(./background.png)",
        backgroundSize: "cover",
        width: "100%",
        height: "70vh",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="Service">
        <div className="Service_Left">
          <Link to="/SignRecPage">
            <button className="Service_LeftBtn">수어 인식</button>
          </Link>
        </div>
        <div className="Service_Center">
          <Link to="/ObjectRecPage">
            <button className="Service_CenterBtn">사물 인식</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Service;
