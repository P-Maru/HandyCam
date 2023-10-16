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
  const modelName = "phone";
  const classThreshold = 0.2;


  const handleButtonClick = () => {
    alert(`인식한 물체는 ${labelValue} 입니다.`);
    const url = videoRef.current.src;
    videoRef.current.src = ""; // restore video source
    videoRef.current.style.display = "none"; // hide video
    // 또는 다른 사용자 정의 동작을 수행할 수 있습니다.

    window.open('https://sldict.korean.go.kr/front/sign/signContentsView.do?origin_no=4399&top_category=CTE&category=&searchKeyword=%EC%A0%84%ED%99%94%EA%B8%B0&searchCondition=&search_gubun=&museum_type=00&current_pos_index=1');

  };

  useEffect(() => {
    tf.ready().then(async () => {
      const yolov5 = await tf.loadGraphModel(`../${modelName}_web_model/model.json`, {
        onProgress: (fractions) => {
          setLoading({ loading: true, progress: fractions });
        },
      });

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
    <div className="ObjectRecPage">
      {loading.loading && (
        <Loader>Loading model... {(loading.progress * 100).toFixed(2)}%</Loader>
      )}
      <div className="header">
        <h1>📷 YOLOv5 Live Detection App</h1>
        <p>
          YOLOv5 live detection application on the browser powered by{" "}
          <code>tensorflow.js</code>
        </p>
        <p>
          Serving: <code className="code">{modelName}</code>
        </p>
      </div>

      <div className="content">
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
        <canvas width={model.inputShape[1]} height={model.inputShape[2]} ref={canvasRef} />
      </div>
      {labelValue && (
        <div className="label-value">
          인식된 물체: {labelValue}
          <br></br>
          <button onClick={handleButtonClick}>인식한 물체 확인</button>
        </div>
      )}
      <ButtonHandler imageRef={imageRef} cameraRef={cameraRef} videoRef={videoRef} />
    </div>
  );
}

export default ObjectRecPage;
