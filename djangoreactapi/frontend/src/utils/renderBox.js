import labels from "./labels.json";
import { useHistory } from "react-router-dom";
class Colors {
  // ultralytics color palette https://ultralytics.com/
  constructor() {
    this.palette = [
      "#FF3838",
      "#FF9D97",
      "#FF701F",
      "#FFB21D",
      "#CFD231",
      "#48F90A",
      "#92CC17",
      "#3DDB86",
      "#1A9334",
      "#00D4BB",
      "#2C99A8",
      "#00C2FF",
      "#344593",
      "#6473FF",
      "#0018EC",
      "#8438FF",
      "#520085",
      "#CB38FF",
      "#FF95C8",
      "#FF37C7",
    ];
    this.n = this.palette.length;
  }

  get = (i) => this.palette[Math.floor(i) % this.n];

  static hexToRgba = (hex, alpha) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${[
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ].join(", ")}, ${alpha})`
      : null;
  };
}

/**
 * Render prediction boxes
 * @param {HTMLCanvasElement} canvasRef canvas tag reference
 * @param {number} classThreshold class threshold
 * @param {Array} boxes_data boxes array
 * @param {Array} scores_data scores array
 * @param {Array} classes_data class array
 * @param {Array[Number]} ratios boxes ratio [xRatio, yRatio]
 * @param {Function} setLabelValue
 */
export const renderBoxes = (
  canvasRef,
  classThreshold,
  boxes_data,
  scores_data,
  classes_data,
  ratios,
  setLabelValue
) => {
  const ctx = canvasRef.getContext("2d");
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clean canvas

  const colors = new Colors();

  // font configs
  const font = `${Math.max(
    Math.round(Math.max(ctx.canvas.width, ctx.canvas.height) / 40),
    14
  )}px Arial`;
  ctx.font = font;
  ctx.textBaseline = "top";

  // Find the index with the highest score
  let maxIndex = -1;
  let maxScore = -1;

  const validPredictions = [];

  for (let i = 0; i < scores_data.length; ++i) {
    // filter based on class threshold
    if (scores_data[i] > classThreshold && scores_data[i] > maxScore) {
      maxIndex = i;
      maxScore = scores_data[i];
    }
  }

  if (maxIndex !== -1) {
    const klass = labels[classes_data[maxIndex]];
    const color = colors.get(classes_data[maxIndex]);
    const score = (maxScore * 100).toFixed(1);

    let [x1, y1, x2, y2] = boxes_data.slice(maxIndex * 4, (maxIndex + 1) * 4);
    x1 *= canvasRef.width * ratios[0];
    x2 *= canvasRef.width * ratios[0];
    y1 *= canvasRef.height * ratios[1];
    y2 *= canvasRef.height * ratios[1];
    const width = x2 - x1;
    const height = y2 - y1;

    // draw box.
    ctx.fillStyle = Colors.hexToRgba(color, 0.2);
    ctx.fillRect(x1, y1, width, height);
    // draw border box.
    ctx.strokeStyle = color;
    ctx.lineWidth = Math.max(
      Math.min(ctx.canvas.width, ctx.canvas.height) / 200,
      2.5
    );
    ctx.strokeRect(x1, y1, width, height);

    // Draw the label background.
    ctx.fillStyle = color;
    const textWidth = ctx.measureText(klass + " - " + score + "%").width;
    const textHeight = parseInt(font, 10); // base 10
    const yText = y1 - (textHeight + ctx.lineWidth);
    ctx.fillRect(
      x1 - 1,
      yText < 0 ? 0 : yText, // handle overflow label box
      textWidth + ctx.lineWidth,
      textHeight + ctx.lineWidth
    );

    // Draw labels
    ctx.fillStyle = "#ffffff";
    ctx.fillText(klass + " - " + score + "%", x1 - 1, yText < 0 ? 0 : yText);
    validPredictions.push({ label: `${klass}`, score: parseFloat(score) });
  }

  validPredictions.sort((a, b) => b.score - a.score);
  console.log(validPredictions);
  if (validPredictions.length > 0 && validPredictions[0].score > 50.0) {
    console.log("hi");
    console.log(typeof setLabelValue);
    if (typeof setLabelValue === "function") {
      setLabelValue(validPredictions[0].label); // 가장 높은 확률값만 가져오도록 수정
      console.log("Label Value in renderBoxes:", validPredictions[0].label);
      // const history = useHistory();

      // // 페이지 이동
      // history.push('/www.google.com');
    }
  }
};
