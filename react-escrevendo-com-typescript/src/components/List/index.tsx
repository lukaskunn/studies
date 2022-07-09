import React from "react";
import Item from "./components/Item";
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
        {tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
