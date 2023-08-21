import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";
import React from "react";

const DiaryItem = ({ id, emotion_id, title, content, created_at }) => {
  //   이미지가 안나올때 <
  //   const env = process.env;
  //   env.PUBLIC_URL = env.PUBLIC_URL || "";
  // >
  const strDate = new Date(parseInt(created_at)).toLocaleDateString();
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion_id}`,
        ].join(" ")}
      >
        <img
          src={
            process.env.PUBLIC_URL + `assets/emotion/emotion${emotion_id}.png`
          }
        />
      </div>

      <div className="info_wrapper" onClick={goDetail}>
        <div className="diary_date">{strDate}</div>
        <div className="diary_content_preview">{title.slice(0, 25)}</div>
      </div>

      <div className="btn_wrapper">
        <MyButton text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
