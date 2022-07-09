import React from "react";
import Form from "../../components/Form";
import List from "../../components/List";
import Timer from "../../components/Timer";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.AppStyle}>
      <Form />
      <List />
      <Timer />
    </div>
  );
}

export default App;
