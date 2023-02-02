import styles from "../styles/ScheduleCard.module.css";
import React from "react";

const ScbeduleCard = ({ img, alt, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_container}>
        <img src={img} alt={alt} />
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ScbeduleCard;
