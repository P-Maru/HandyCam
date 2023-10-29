import "../style/PatientSign.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default function PatientSign() {
  const { id: patient_id } = useParams();
  const [Patientvideo, setPatientSign] = useState({
    video_src: "",
    video_title: "",
    video_explain: "",
  });

  useEffect(() => {
    axios
      .get(`/patient_list/${patient_id}`)
      .then((response) => {
        setPatientSign(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching board content:", error);
      });
  }, [patient_id]);
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
      <div className="PatientSign">
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
          <div id="PatientSignContent">
            <iframe
              width="500"
              height="400"
              src={Patientvideo.patient_src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div id="PatientSignExplain">
              <p id="PatientSignTitle">{Patientvideo.patient_title}</p>
              <p id="PatientSignAction">수형 설명</p>
              <p id="SignExplain">{Patientvideo.patient_explain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
