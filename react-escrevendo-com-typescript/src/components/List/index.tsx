import React from "react";

// import { Container } from './styles';

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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            <h3>{tarefa.tarefa}</h3>
            <span>{tarefa.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
