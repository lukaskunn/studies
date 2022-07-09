import React from "react";

import styles from "./styles.module.scss";

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  return <button className={styles.botao}>{props.children}</button>;
};

export default Button;
