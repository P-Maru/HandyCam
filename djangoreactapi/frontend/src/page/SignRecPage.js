import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";

const WebcamStreamPage = () => {
  const videoRef = useRef(null);
  const [recognizedSign, setRecognizedSign] = useState([]);
  const [streamStarted, setStreamStarted] = useState(true);
  const history = createBrowserHistory();

  useEffect(() => {
    let intervalId;

    const preventGoBack = () => {
      history.go(1);
      alert("prevent go back!");
    };

    history.push(null, "", history.location.href);
    window.addEventListener("popstate", preventGoBack);

    const sendWebcamStream = async () => {
      const video = videoRef.current;
      const stream = video.srcObject;

      if (!stream) {
        console.error("비디오 스트림이 null입니다.");
        return;
      }

      const videoTrack = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(videoTrack);

      try {
        const photoBlob = await imageCapture.takePhoto();
        const formData = new FormData();

        formData.append("frame", photoBlob, "frame.jpg");
        formData.append("message", recognizedSign || "");

        const response = await axios.post(
          "http://localhost:8000/api/translate/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const sentence = response.data.message;
        console.log(sentence);
        if (
          sentence !== "False" &&
          sentence !== "" &&
          sentence !== recognizedSign
        ) {
          setRecognizedSign((prevSigns) => [...prevSigns, sentence]);
        }
      } catch (error) {
        console.error("웹캠 스트림 전송 오류:", error);
      }
    };

    const startInterval = () => {
      // 서버로 주기적으로 요청 보내기
      intervalId = setInterval(sendWebcamStream, 1000); // 10초마다 요청 보냄
    };

    const getVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        console.log("hi stream");

        startInterval(); // 스트림을 성공적으로 가져온 이후에 주기적으로 요청을 보내도록 interval 시작
      } catch (error) {
        console.error("카메라 접근 오류:", error);
      }
    };

    getVideoStream();

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

  const stopWebCam = () => {
    const video = videoRef.current;
    const stream = video.srcObject;
    // if (!video) {
    //   console.log("error!");// videoRef가 null이면 함수를 빠져나갑니다.
    // }

    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      video.pause();
      video.srcObject = null;
      video.src = "";
    }

    setStreamStarted(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
            어디가 아프신가요?
      </h1>
      <video ref={videoRef} autoPlay playsInline style={{ width: 800, height: 800, margin: "auto" }} />
  
      {/* 수화 인식한 문장 표시 */}
      {/* <div
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",
        }}
      > */}
        {recognizedSign.map((sign, index) => (
          <p key={index} style={{background: "rgba(255, 255, 255, 0.8)",
          padding: "0px 0px",
          borderRadius: "8px",
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          margin: "20px 0",}}>{sign}</p>
        ))}
      {/* </div> */}
  
      {/* "stop" 버튼을 렌더링합니다. */}
      {streamStarted && (
        <button
          style={{ fontSize: "20px" }}
          onClick={stopWebCam}
        >
          정지
        </button>
      )}
    </div>
  );
  
};

export default WebcamStreamPage;
