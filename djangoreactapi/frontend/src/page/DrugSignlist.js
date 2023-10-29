import "../style/DrugSignlist.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";

export default function DrugSignlist() {
  const [DrugList, setDrugList] = useState([]);

  useEffect(() => {
    axios
      .get("/drug_list")
      .then((response) => {
        setDrugList(response.data);
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
      <div className="DrugSignlist">
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
          <div className="DrugSignContent">
            <table className="DrugSignContent_Table">
              <tbody>
                {DrugList.map((Drugvideo) => {
                  return (
                    <tr
                      className="DrugSignContent_Tabletr"
                      key={Drugvideo.drug_id}
                    >
                      <td className="DrugSignContent_TableVideo">
                        <iframe
                          width="250"
                          height="150"
                          src={Drugvideo.drug_src}
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </td>
                      <td>
                        <div className="DrugSignExplain">
                          <Link
                            to={`/DrugSign/${Drugvideo.drug_id}`}
                            className="DrugSignTitle"
                          >
                            {Drugvideo.drug_title}
                          </Link>
                          <p className="SignExplain">
                            {Drugvideo.drug_explain}
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
