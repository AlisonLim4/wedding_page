import styles from "../styles/Input.module.css";
import React from "react";

const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label className={styles.label} htmlFor="">
        <input
          placeholder={label}
          className={styles.input}
          id={name}
          type={type}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Input;
