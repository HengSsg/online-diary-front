import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import DiaryEditor from "../../components/DiaryEditor";
import { diaryData } from "../../util/data";

const Edit = () => {
  const [originData, setOriginData] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기 수정`;
    setOriginData(diaryData[0]);
  }, []);

  return (
    <div className="Edit">
      {originData && <DiaryEditor isEdit={true} originData={originData} />}
    </div>
  );
};
export default Edit;
