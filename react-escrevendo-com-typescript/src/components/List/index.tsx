import React from "react";

import styles from "./styles.module.scss";

const List: React.FC = () => {
  const tarefas = [
    {
      tarefa: "estudos do dia",
      tempo: "01:15:00",
    },
    {
      tarefa: "estudos do dia",
      tempo: "01:15:00",
    },
    {
      tarefa: "estudos do dia",
      tempo: "01:15:00",
    },
  ];
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index} className={styles.item}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
