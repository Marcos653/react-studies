import style from "../List.module.scss"

export default function Item({chore, time}: { chore: string; time: string }) {
  return (
    <li className={style.item}>
      <h3>{chore}</h3>
      <span>{time}</span>
    </li>
  );
}
