import "../style/DrugSign.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default function DrugSign() {
  const { id: drug_id } = useParams();
  const [Drugvideo, setDrugSign] = useState({
    video_src: "",
    video_title: "",
    video_explain: "",
  });

  useEffect(() => {
    axios
      .get(`/drug_list/${drug_id}`)
      .then((response) => {
        setDrugSign(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching board content:", error);
      });
  }, [drug_id]);
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
      <div className="DrugSign">
        <div className="HospitalleftSide">
          <h1 id="HospitalTitle">병원생활 수어</h1>
          <div className="HospitalleftSideBtn">
            <Link to="/DoctorSignlist" className="DoctorSignlistBtn">
              의사
            </Link>
            <Link to="/PatientSignlist" className="PatientSignlistBtn">
              환자
            </Link>
            <Link to="/DrugSignlist" id="DrugSignlistBtn">
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
          <div id="DrugSignContent">
            <iframe
              width="500"
              height="400"
              src={Drugvideo.drug_src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div id="DrugSignExplain">
              <p id="DrugSignTitle">{Drugvideo.drug_title}</p>
              <p id="DrugSignAction">수형 설명</p>
              <p id="SignExplain">{Drugvideo.drug_explain}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
