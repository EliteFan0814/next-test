import { NextPage } from "next";
import React from "react";

const Content: NextPage = (props) => {
  const [likes, setLikes] = React.useState(0);
  const nameList = [
    { id: 0, name: "范佩西" },
    { id: 1, name: "范玉佩" },
    { id: 2, name: "范大运" },
    { id: 3, name: "范小炒" },
  ];
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <h2>标题：{props.title}</h2>
      <ul>
        <div>
          {nameList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </div>
      </ul>
      <button onClick={handleClick}>点我试试（{likes}）</button>
    </>
  );
};

export default Content;
