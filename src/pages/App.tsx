import React from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import Style from "./App.module.scss";

function App() {
  return (
    <div className={Style.AppStyle}>
      <Form />
      <List />
      <Cronometro />
    </div>
  );
}

export default App;
