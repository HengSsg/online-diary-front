import React, { useEffect, useState } from "react";

import DiaryHeader from "../../components/DiaryHeader";
import MyButton from "../../components/MyButton";
import { diaryData } from "../../util/data";
import "../../App.css";
import ListContent from "../../components/ListContent";

const DiaryList = () => {
  const [curDate, setCurDate] = useState(new Date());
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;

  // useEffect(() => {
  //   console.log(typeof diaryList);
  //   if (diaryData.length >= 1) {
  //     const firstDay = new Date(
  //       curDate.getFullYear(),
  //       curDate.getMonth(),
  //       1
  //     ).getTime();

  //     const lastDay = new Date(
  //       curDate.getFullYear(),
  //       curDate.getMonth() + 1,
  //       0,
  //       23,
  //       59,
  //       59
  //     ).getTime();
  //   }
  // }, [diaryData, curDate]);

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
    <div className="DiaryList">
      <div className="DiaryList-header">
        <DiaryHeader
          headText={headText}
          leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
          rightChild={<MyButton text={">"} onClick={increaseMonth} />}
        />
      </div>
      <div className="DiaryList-body">
        {diaryData.map((item) => (
          <ListContent
            key={item.id}
            title={item.title}
            created_at={item.created_at}
          />
        ))}
      </div>
    </div>
  );
};
export default DiaryList;
