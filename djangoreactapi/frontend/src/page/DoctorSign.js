import "../style/DoctorSign.css";
import { Link } from "react-router-dom";

function DoctorSign() {
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
      <div className="HospitalSignPage">
        <div className="HospitalleftSide">
          <h1 id="HospitalTitle">병원생활 수어</h1>
          <div className="HospitalleftSideBtn">
            <Link to="/DoctorSignlist" id="DoctorSignlistBtn">
              의사
            </Link>
            <Link to="/PatientSignlist" className="PatientSignlistBtn">
              환자
            </Link>
            <Link to="/DrugSignlist" className="DrugSignlistBtn">
              의약품
            </Link>
            <Link
              to="/MedicalEquipmentSignlist"
              className="MedicalEquipmentSignlistBtn"
            >
              의료기기
            </Link>
          </div>
        </div>
        <div className="HospitalrightSide">
          <div id="DoctorSignContent">
            <iframe
              width="500"
              height="400"
              src="https://www.youtube.com/embed/9vx9O6x6Su8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div id="DoctorSignExplain">
              <p id="DoctorSignTitle">어디가 아프신가요?</p>
              <p id="DoctorSignAction">수형 설명</p>
              <p id="SignExplain">
                손을 내밀고 손바닥을 위로하여 흔든 뒤, 검지손가락만 들어 흔든다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorSign;
