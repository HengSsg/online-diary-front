import React, { useContext, useEffect, useState } from "react";

import { diaryData } from "../../util/data";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";
import DiaryList from "../../components/DiaryList";

const DiaryView = () => {
  const [data, setData] = useState([]);
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  useEffect(() => {
    console.log(typeof diaryList);
    if (diaryData.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryData.filter(
          (it) => firstDay <= it.created_at && it.created_at <= lastDay
        )
      );
    }
  }, [diaryData, curDate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // 월 증가
  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };

  // 월 감소
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };

  return (
    <div className="DiaryView">
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};
export default DiaryView;
