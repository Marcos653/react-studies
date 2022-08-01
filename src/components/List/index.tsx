import React, { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

function List() {
  const [chores, setChores] = useState([
    {
      chore: "React",
      time: "02:00:00",
    },
    {
      chore: "JavaScript",
      time: "01:00:00",
    },
    {
      chore: "Typescript",
      time: "03:00:00",
    },
  ]);
  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setChores([...chores, { chore: "Estudar estado", time: "05:00:00" }]);
        }}
      >
        Study of the day
      </h2>
      <ul>
        {chores.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
