import React from "react";
import Button from "../Button";
import styles from "./styles.module.scss";

const Form: React.FC = () => {
  return (
    <form action="" className={styles.novaTarefa}>
      <div className={styles.inputContainer}>
        <label htmlFor="tarefa">Adicione o que você quer estudar: </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="tempo">Tempo: </label>
        <input
          type="time"
          step="1"
          name="tempo"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
