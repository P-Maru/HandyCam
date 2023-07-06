import "../style/PatientSignlist.css";
import { Link } from "react-router-dom";

function PatientSignlist() {
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
            <Link to="/DoctorSignlist" className="DoctorSignlistBtn">
              의사
            </Link>
            <Link to="/PatientSignlist" id="PatientSignlistBtn">
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
          <div className="DoctorSignContent">
            <iframe
              width="250"
              height="150"
              src="https://www.youtube.com/embed/9vx9O6x6Su8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="DoctorSignExplain">
              <Link to="/DoctorSign" className="DoctorSignTitle">
                어디가 아프신가요?
              </Link>
              <p className="SignExplain">
                환자가 병원에 찾아왔을 때, 증상이 어떤지 알아보기 위해 사용된다.
              </p>
            </div>
          </div>
          <div className="DoctorSignContent">
            <iframe
              width="250"
              height="150"
              src="https://www.youtube.com/embed/liptnin17rs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="DoctorSignExplain">
              <Link to="/DoctorSign" className="DoctorSignTitle">
                감기
              </Link>
              <p className="SignExplain">
                감기(感氣 문화어: 고뿔, 영어: Common Cold) 또는 의학적으로 급성
                바이러스형 비인두염 혹은 급성비염은 코, 목구멍 등 상부 호흡계가
                바이러스에 감염되어 발병하는 전염성 높은 병을 말한다.
              </p>
            </div>
          </div>
          <div className="DoctorSignContent">
            <iframe
              width="250"
              height="150"
              src="https://www.youtube.com/embed/zxDzZWXbdvA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="DoctorSignExplain">
              <Link to="/DoctorSign" className="DoctorSignTitle">
                주사를 맞고 약을 드시기 바랍니다.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientSignlist;
