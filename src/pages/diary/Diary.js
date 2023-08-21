import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MyHeader from "../../components/MyHeader";
import { getStringDate } from "../../util/date";
import MyButton from "../../components/MyButton";
import { emotionList } from "../../util/emotion";
import { diaryData } from "../../util/data";

const Diary = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
    setData(diaryData[0]);
  }, []);

  if (!data) {
    return <div className="DiaryPage">로딩 중입니다...</div>;
  } else {
  }

  const curEmotionData = emotionList.find(
    (it) => parseInt(it.emotion_id) === parseInt(data.emotion_id)
  );
  return (
    <div className="DiaryPage">
      <MyHeader
        headText={`${getStringDate(new Date(data.created_at))} 기록`}
        leftChild={
          <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
        }
        rightChild={
          <MyButton
            text={"수정하기"}
            onClick={() => navigate(`/edit/${data.id}`)}
          />
        }
      />
      <article>
        <section>
          <h4>오늘의 감정</h4>
          <div
            className={[
              "diary_img_wrapper",
              `diary_img_wrapper_${data.emotion}`,
            ].join(" ")}
          >
            <img src={curEmotionData.emotion_img} />
            <div className="emotion_descript">
              {curEmotionData.emotion_descript}
            </div>
          </div>
        </section>
        <section>
          <h4>오늘의 일기</h4>
          <div className="diary_content_wrapper">
            <p>{data.content}</p>
          </div>
        </section>
      </article>
    </div>
  );
};
export default Diary;
