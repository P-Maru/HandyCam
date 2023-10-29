import "../style/MedicalEquipmentSignlist.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";

export default function MedicalEquipmentSignlist() {
  const [EquipmentList, setEquipmentList] = useState([]);

  useEffect(() => {
    axios
      .get("/eqeuipment_list")
      .then((response) => {
        setEquipmentList(response.data);
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
      <div className="MedicalEquipmentSignlist">
        <div className="HospitalleftSide">
          <h1 id="HospitalTitle">병원생활 수어</h1>
          <div className="HospitalleftSideBtn">
            <Link to="/DoctorSignlist" className="DoctorSignlistBtn">
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
              id="MedicalEquipmentSignlistBtn"
            >
              의료기기
            </Link>
          </div>
        </div>
        <div className="HospitalrightSide">
          <div className="MedicalEquipmentSignContent">
            <table className="DoctorSignContent_Table">
              <tbody>
                {EquipmentList.map((Equipmentvideo) => {
                  return (
                    <tr
                      className="MedicalEquipmentSignContent_Tabletr"
                      key={Equipmentvideo.equeipment_id}
                    >
                      <td className="MedicalEquipmentSignContent_TableVideo">
                        <iframe
                          width="250"
                          height="150"
                          src={Equipmentvideo.eqeuipment_src}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </td>
                      <td>
                        <div className="MedicalEquipmentSignExplain">
                          <Link
                            to={`/MedicalEquipmentSign/${Equipmentvideo.eqeuipment_id}`}
                            className="MedicalEquipmentSignTitle"
                          >
                            {Equipmentvideo.eqeuipment_title}
                          </Link>
                          <p className="SignExplain">
                            {Equipmentvideo.eqeuipment_explain}
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
