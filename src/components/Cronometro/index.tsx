import Button from "../Button";
import Relogio  from "./Relogio";
import style from "./Cronometro.module.scss"

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.title}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button texto="Começar!" />
    </div>
  );
}
