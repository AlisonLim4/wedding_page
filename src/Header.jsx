import styles from "./styles/Header.module.css";
import React from "react";

const Header = ({ wife_name, husband_name, data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title_container}>
            <p>Estamos nos casando</p>
          </div>
          <div className={styles.names_container}>
            <h1 className={styles.names}>
              {wife_name} & {husband_name}
            </h1>
          </div>
          <div className={styles.reserve_container}>
            <p className={styles.reserve}>reserve esta data</p>
          </div>
          <div className={styles.data_container}>
            <h2 className={styles.data}>{data}</h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
