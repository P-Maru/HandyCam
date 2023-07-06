import "../style/SignRecPage.css";
import { Link } from "react-router-dom";

function SignRecPage() {
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
      <div className="image_div">
        <img className="Sign_image" src="/object_imgae.png"></img>
      </div>
      <div className="Signtext_div">
        <h1 className="Sign_text"></h1>
      </div>
    </div>
  );
}

export default SignRecPage;
