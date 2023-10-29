import "./App.css";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import MainPage from "./page/MainPage.js";
import LoginPage from "./page/LoginPage.js";
import SignUpPage from "./page/SignUpPage.js";

import DailySignPage from "./page/DailySignPage.js";
import HospitalSignPage from "./page/HospitalSignPage.js";
import DoctorSignlist from "./page/DoctorSignlist.js";
import DoctorSign from "./page/DoctorSign.js";
import PatientSignlist from "./page/PatientSignlist.js";
import PatientSign from "./page/PatientSign.js";
import DrugSignlist from "./page/DrugSignlist.js";
import DrugSign from "./page/DrugSign.js";
import MedicalEquipmentSignlist from "./page/MedicalEquipmentSignlist.js";
import MedicalEquipmentSign from "./page/MedicalEquipmentSign.js";
import SchoolSignPage from "./page/SchoolSignPage.js";
import BoardPage from "./page/BoardPage.js";
import WriteBoard from "./page/WriteBoard.js";
import BoardContentPage from "./page/BoardContentPage.js";
import UpdateBoard from "./page/UpdateBoard.js";
import NoticePage from "./page/NoticePage.js";
import NoticeContentPage from "./page/NoticeContentPage.js";
import WriteNotice from "./page/WriteNotice";

import Service from "./page/Service.js";
import SignRecPage from "./page/SignRecPage.js";
import ObjectRecPage from "./page/ObjectRecPage.js";
import DocuRecPage from "./page/DocuRecPage.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>

          <Route path="/LoginPage" element={<LoginPage />}></Route>
          <Route path="/SignUpPage" element={<SignUpPage />}></Route>

          <Route path="/DailySignPage" element={<DailySignPage />}></Route>
          <Route
            path="/HospitalSignPage"
            element={<HospitalSignPage />}
          ></Route>
          <Route path="/DoctorSignlist" element={<DoctorSignlist />}></Route>
          <Route path="/DoctorSign/:id" element={<DoctorSign />}></Route>
          <Route path="/PatientSignlist" element={<PatientSignlist />}></Route>
          <Route path="/PatientSign/:id" element={<PatientSign />}></Route>
          <Route path="/DrugSignlist" element={<DrugSignlist />}></Route>
          <Route path="/DrugSign/:id" element={<DrugSign />}></Route>
          <Route
            path="/MedicalEquipmentSignlist"
            element={<MedicalEquipmentSignlist />}
          ></Route>
          <Route
            path="/MedicalEquipmentSign/:id"
            element={<MedicalEquipmentSign />}
          ></Route>
          <Route path="/SchoolSignPage" element={<SchoolSignPage />}></Route>
          <Route path="/BoardPage" exact element={<BoardPage />}></Route>
          <Route path="/BoardPage/:id" element={<BoardContentPage />}></Route>
          <Route path="/WriteBoard" element={<WriteBoard />}></Route>
          <Route path="/UpdateBoard/" element={<UpdateBoard />}></Route>
          <Route path="/UpdateBoard/:id" element={<UpdateBoard />}></Route>
          <Route path="/NoticePage" element={<NoticePage />}></Route>
          <Route path="/NoticePage/:id" element={<NoticeContentPage />}></Route>
          <Route path="/WriteNotice" element={<WriteNotice />}></Route>
          <Route path="/Service" element={<Service />}></Route>
          <Route path="/SignRecPage" element={<SignRecPage />}></Route>
          <Route path="/ObjectRecPage" element={<ObjectRecPage />}></Route>
          <Route path="/DocuRecPage" element={<DocuRecPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
