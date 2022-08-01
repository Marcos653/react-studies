import React from "react";
import Button from "../Button";
import style from "./Form.module.scss"

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="chore">Add new study</label>
          <input
            type="text"
            name="chore"
            id="chore"
            placeholder="What do you want to study?"
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time"></label>
          <input
            type="time"
            step={"1"}
            name="time"
            id="time"
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Button 
        texto="adicionar"
        />
      </form>
    );
  }
}

export default Form;
