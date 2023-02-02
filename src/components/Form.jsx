import styles from "../styles/Form.module.css";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [mensage, setMensage] = useState("");

  return (
    <form className={styles.form}>
      <Input label="Nome" type="text" name="nome" />
      <Input label="Telefone" type="text" name="telefone" />
      <Input label="Mensagem" type="textArea" name="telefone" />

      <Button text="Confirmar" />
    </form>
  );
};

export default Form;
