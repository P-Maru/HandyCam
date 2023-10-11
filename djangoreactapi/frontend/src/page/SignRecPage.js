import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { createBrowserHistory } from "history";
import "../style/SignRecPage.css";

const WebcamStreamPage = () => {
  const videoRef = useRef(null);
  const [recognizedSign, setRecognizedSign] = useState([]);
  const [streamStarted, setStreamStarted] = useState(true);
  const history = createBrowserHistory();

  useEffect(() => {
    let intervalId;
    let cameraStream;

    const preventGoBack = () => {
      if (cameraStream) {
        stopWebCam();
        history.back();
      }
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
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;
        cameraStream = stream;

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

  const clearSigns = () => {
    setRecognizedSign([]);
  };

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(./background.png)",
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        backgroundRepeat: "repeat-y",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="SignRecPage">
        <div className="SignRecLeftSide">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginBottom: "10px",
              fontFamily: "'Jua', sans-serif",
            }}
          >
            카메라를 보면서 수어를 해주세요.
          </h1>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ width: 720, height: 640, margin: "auto" }}
          />
          {/* "stop" 버튼을 렌더링합니다. */}
          {streamStarted && (
            <button className="stop_btn" onClick={stopWebCam}>
              카메라 종료를 원하신다면 버튼을 눌러주세요.
            </button>
          )}
        </div>
        <div className="SignRecRightSide">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginBottom: "10px",
              fontFamily: "'Jua', sans-serif",
            }}
          >
            번역한 수어 내용이 아래에 나타납니다.
          </h1>
          <div className="SignRecResult">
            <div className="image_div">
              {recognizedSign.map((sign, index) => (
                <p className="Sign_image_text" key={index} style={{}}>
                  {sign}
                </p>
              ))}
              {/* </div> */}
            </div>
          </div>
          <button className="clear_btn" onClick={clearSigns}>
            번역한 수어 초기화를 원하신다면 버튼을 눌러주세요.
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebcamStreamPage;
