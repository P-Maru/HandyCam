import "../style/PatientSignlist.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";

export default function PatientSignlist() {
  const [PatientList, setPatientList] = useState([]);

  useEffect(() => {
    axios
      .get("/patient_list")
      .then((response) => {
        setPatientList(response.data);
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
      <div className="PatientSignlist">
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
          <div className="PatientSignContent">
            <table className="DoctorSignContent_Table">
              <tbody>
                {PatientList.map((Patientvideo) => {
                  return (
                    <tr
                      className="DoctorSignContent_Tabletr"
                      key={Patientvideo.patient_id}
                    >
                      <td className="DoctorSignContent_TableVideo">
                        <iframe
                          width="250"
                          height="150"
                          src={Patientvideo.patient_src}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </td>
                      <td>
                        <div className="PatientSignExplain">
                          <Link
                            to={`/PatientSign/${Patientvideo.patient_id}`}
                            className="PatientSignTitle"
                          >
                            {Patientvideo.patient_title}
                          </Link>
                          <p className="SignExplain">
                            {Patientvideo.patient_explain}
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
