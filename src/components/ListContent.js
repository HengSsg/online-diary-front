const ListContent = ({
  id,
  title,
  content,
  created_at,
  updated_at,
  writer,
  emotion_id,
}) => {
  const date = new Date(created_at).toLocaleString().slice(0, 10);

  console.log(new Date().getTime());
  return (
    <div className="ListContent">
      <div className="ListContent-emotion">
        <img src={process.env.PUBLIC_URL + `assets/emotion/emotion1.png`} />
      </div>
      <div className="ListContent-title">
        <div className="created_at">{date}</div>
        <div className="title">{title}</div>
      </div>
      <div className="ListContent-updateButton"> 수정하기</div>
    </div>
  );
};

export default ListContent;
