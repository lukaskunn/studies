import React from "react";
import Button from "../Button";
import Clock from "./Clock";

import style from "./Timer.module.scss";

const Timer: React.FC = () => {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha o card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Clock />
      </div>
      <Button />
    </div>
  );
};

export default Timer;
