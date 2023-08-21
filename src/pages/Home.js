import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="Home-content">
        <div>
          <div className="Home-text-wrapper">언제 어디서나.</div>

          <div className="Home-img-wrapper">
            <img
              src={
                process.env.PUBLIC_URL +
                `assets/home/undraw_checking_boxes_re_9h8m.svg`
              }
            />
          </div>
        </div>
        <div>
          <div className="Home-img-wrapper">
            <img
              src={
                process.env.PUBLIC_URL + `assets/home/undraw_diary_re_4jpc.svg`
              }
            />
          </div>
          <div className="Home-text-wrapper">나의 추억을 간직해 보아요.</div>
        </div>
      </div>
      <div className="Home-start-button" onClick={() => navigate("/mydiary")}>
        시작하기
      </div>
    </div>
  );
};
export default Home;
