import "../style/BoardContentPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function BoardContentPage(props) {
  // 게시물 ID를 URL 파라미터에서 가져옵니다.
  const { id } = useParams();

  // id를 사용하여 해당 게시물의 내용을 가져오는 로직을 추가합니다.

  return (
    <div
      className="background"
      style={{
        backgroundImage: "url(../background.png)",
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        backgroundRepeat: "repeat-y",
      }}
    >
      <div className="BoardContentPage"></div>
    </div>
  );
}

export default BoardContentPage;
