import styles from "../styles/Button.module.css";
import React from "react";

const Button = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default Button;
