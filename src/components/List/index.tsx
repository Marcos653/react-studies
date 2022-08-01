import React from "react";

function List() {
  const chores = [
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
  ];
  return (
    <aside>
      <h2>Study of the day</h2>
      <ul>
        {chores.map((item, index) => (
          <li key={index}>
            <h3>{item.chore}</h3>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
