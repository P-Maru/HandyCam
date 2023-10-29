import "../style/DoctorSignlist.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";

export default function DoctorSignlist() {
  const [DoctorList, setDoctorList] = useState([]);

  useEffect(() => {
    axios
      .get("/doctor_list")
      .then((response) => {
        setDoctorList(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching videos:", error);
      });
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
      <div className="DoctorSignlist">
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
          <div className="DoctorSignContent">
            <table className="DoctorSignContent_Table">
              <tbody>
                {DoctorList.map((Doctorvideo) => {
                  return (
                    <tr
                      className="DoctorSignContent_Tabletr"
                      key={Doctorvideo.doctor_id}
                    >
                      <td className="DoctorSignContent_TableVideo">
                        <iframe
                          width="250"
                          height="150"
                          src={Doctorvideo.doctor_src}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </td>
                      <td>
                        <div className="DoctorSignExplain">
                          <Link
                            to={`/DoctorSign/${Doctorvideo.doctor_id}`}
                            className="DoctorSignTitle"
                          >
                            {Doctorvideo.doctor_title}
                          </Link>
                          <p className="SignExplain">
                            {Doctorvideo.doctor_explain}
                          </p>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
