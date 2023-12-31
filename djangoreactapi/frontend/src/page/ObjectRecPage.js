import React, { useState, useEffect, useRef, useCallback } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import Loader from "../components/loader";
import ButtonHandler from "../components/btn-handler";
import { detectImage, detectVideo } from "../utils/detect";
import { useNavigate } from "react-router-dom";
import { renderBoxes } from "../utils/renderBox";
import "../style/objectPage.css";

function ObjectRecPage() {
  const [loading, setLoading] = useState({ loading: true, progress: 0 });
  const [model, setModel] = useState({
    net: null,
    inputShape: [1, 0, 0, 3],
  });

  const imageRef = useRef(null);
  const cameraRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [labelValue, setLabelValue] = useState("");
  const modelName = "best";
  const classThreshold = 0.2;

  const handleButtonClick = () => {
    alert(`인식한 물체는 ${labelValue} 입니다.`);
    const url = videoRef.current.src;
    videoRef.current.src = ""; // restore video source
    videoRef.current.style.display = "none"; // hide video
    // 또는 다른 사용자 정의 동작을 수행할 수 있습니다.
    if (labelValue == "phone") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=4399&top_category=CTE&category=&searchKeyword=%EC%A0%84%ED%99%94%EA%B8%B0&searchCondition=&search_gubun=&museum_type=00&current_pos_index=1"
      );
    } else if (labelValue == "bed") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=6053&top_category=CTE&category=&searchKeyword=%EC%B9%A8%EB%8C%80&searchCondition=&search_gubun=&museum_type=00&current_pos_index=0"
      );
    } else if (labelValue == "cup") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=10581&top_category=CTE&category=&searchKeyword=%EC%BB%B5&searchCondition=&search_gubun=&museum_type=00&current_pos_index=1"
      );
    } else if (labelValue == "scissors") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=6883&top_category=CTE&category=&searchKeyword=%EA%B0%80%EC%9C%84&searchCondition=&search_gubun=&museum_type=00&current_pos_index=0"
      );
    } else if (labelValue == "medicine") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=11990&top_category=CTE&category=&searchKeyword=%EC%95%BD&searchCondition=&search_gubun=&museum_type=00&current_pos_index=0"
      );
    } else if (labelValue == "syringe") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=14955&top_category=SPE&category=&searchKeyword=%EC%A3%BC%EC%82%AC%EA%B8%B0&searchCondition=&search_gubun=&museum_type=00&current_pos_index=0"
      );
    } else if (labelValue == "pen") {
      window.open(
        "https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=7841&top_category=CTE&category=&searchKeyword=%ED%8E%9C&searchCondition=&search_gubun=&museum_type=00&current_pos_index=1"
      );
    } else {
      alert(`해당하는 물체의 수화가 존재하지 않습니다.`);
    }
  };

  useEffect(() => {
    tf.ready().then(async () => {
      const yolov5 = await tf.loadGraphModel(
        `../${modelName}_web_model/model.json`,
        {
          onProgress: (fractions) => {
            setLoading({ loading: true, progress: fractions });
          },
        }
      );

      const dummyInput = tf.ones(yolov5.inputs[0].shape);
      const warmupResult = await yolov5.executeAsync(dummyInput);
      tf.dispose(warmupResult);
      tf.dispose(dummyInput);

      setLoading({ loading: false, progress: 1 });
      setModel({
        net: yolov5,
        inputShape: yolov5.inputs[0].shape,
      });
    });
  }, []);

  useEffect(() => {
    console.log(labelValue);
  }, [labelValue]);

  console.log("Label Value in detectImageCallback:", labelValue);
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
      <div className="ObjectRecPage">
        {loading.loading && (
          <Loader>
            Loading model... {(loading.progress * 100).toFixed(2)}%
          </Loader>
        )}
        <div className="ObjectRecLeftSide">
          <div className="ObjectRecTopSide">
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                marginBottom: "10px",
                fontFamily: "'BlackHanSans', sans-serif",
              }}
            >
              물체 인식 서비스를 선택해주세요.
            </h1>
            <img
              src="#"
              ref={imageRef}
              onLoad={() =>
                detectImage(
                  imageRef.current,
                  model,
                  classThreshold,
                  canvasRef.current,
                  setLabelValue
                )
              }
            />
            <video
              autoPlay
              muted
              ref={cameraRef}
              onPlay={() =>
                detectVideo(
                  cameraRef.current,
                  model,
                  classThreshold,
                  canvasRef.current,
                  setLabelValue
                )
              }
            />
            <video
              autoPlay
              muted
              ref={videoRef}
              onPlay={() =>
                detectVideo(
                  videoRef.current,
                  model,
                  classThreshold,
                  canvasRef.current,
                  setLabelValue
                )
              }
            />
            <canvas
              width={model.inputShape[1]}
              height={model.inputShape[2]}
              ref={canvasRef}
            />
          </div>
          <div className="ObjectRecBottomSide">
            <ButtonHandler
              imageRef={imageRef}
              cameraRef={cameraRef}
              videoRef={videoRef}
            />
          </div>
        </div>
        <div className="ObjectRecRightSide">
          <h1
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginBottom: "10px",
              fontFamily: "'BlackHanSans', sans-serif",
            }}
          >
            인식된 물체 결과를 확인해주세요.
          </h1>
          <div className="ObjectRecResult">
            {labelValue && (
              <div className="Result_div">
                <p className="Result_text">
                  물체 인식한 결과 {labelValue} 입니다{" "}
                </p>
                <button className="Result_Btn" onClick={handleButtonClick}>
                  인식한 물체 수화 링크
                </button>
              </div>
            )}
          </div>
          <button className="Clear_Btn" onClick={() => setLabelValue("")}>
            인식한 결과 초기화를 원하신다면 버튼을 눌러주세요.
          </button>
        </div>
      </div>
    </div>
  );
}

export default ObjectRecPage;
