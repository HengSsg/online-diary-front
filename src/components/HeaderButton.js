import { useNavigate } from "react-router";

const HeaderButton = ({ text, route }) => {
  const navigate = useNavigate();

  return (
    <div className="Header-button" onClick={() => navigate(route)}>
      {text}
    </div>
  );
};
export default HeaderButton;
