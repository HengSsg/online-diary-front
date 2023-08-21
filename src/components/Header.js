import { useNavigate } from "react-router";
import HeaderButton from "./HeaderButton";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="Header-title" onClick={() => navigate("/")}>
        감정 일기장
      </div>
      <div className="Header-buttons">
        <HeaderButton text={"내 일기"} route={"/mydiary"} />
        <HeaderButton text={"공유 일기"} route={"/sharediary"} />
        <HeaderButton text={"로그인"} route={"/login"} />
      </div>
    </div>
  );
};
export default Header;
