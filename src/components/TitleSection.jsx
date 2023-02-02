import styles from "../styles/TitleSection.module.css";
import flower from "../assets/icons/flower-icon.png";
import React from "react";

const TitleSection = ({ title, subtitle }) => {
  return (
    <div className={styles.title_container}>
      <img src={flower} alt="flower Icon" />
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default TitleSection;
