import "../style/DoctorSign.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default function DoctorSign() {
  const { id: video_id } = useParams();
  const [Doctorvideo, setDoctorSign] = useState({
    video_src: "",
    video_title: "",
    video_explain: "",
  });

  useEffect(() => {
    axios
      .get(`/doctor_list/${video_id}`)
      .then((response) => {
        setDoctorSign(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching board content:", error);
      });
  }, [video_id]);
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
      <div className="DoctorSign">
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
              src={Doctorvideo.doctor_src}
              s
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div id="DoctorSignExplain">
              <p id="DoctorSignTitle">{Doctorvideo.doctor_title}</p>
              <p id="DoctorSignAction">수형 설명</p>
              <p id="SignExplain">{Doctorvideo.doctor_explain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
