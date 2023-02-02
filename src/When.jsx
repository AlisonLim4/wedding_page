import styles from "./styles/When.module.css";
import React from "react";
import TitleSection from "./components/TitleSection";
import clock from "./assets/icons/clock_icon.svg";
import cup from "./assets/icons/cup2.svg";

const When = ({ dayOfWeek, day, mounth, year, hour, localName, adress }) => {
  return (
    <section className={styles.when}>
      <TitleSection
        title="Quando & Onde"
        subtitle="Vamos adorar ver você por lá"
      />

      <div className={styles.content_container}>
        <div className={styles.cerimony}>
          <div className={styles.icon_container}>
            <img src={clock} alt="Clock icon" />
          </div>
          <div className={styles.cerimony_title}>
            <h2>Cerimônia</h2>
          </div>
          <div className={styles.cerimony_p}>
            <p>
              {dayOfWeek || "xx"}, {day || "DIA"} de {mounth || "MÊS"} de{" "}
              {year || "ANO"} <br />
              {hour || "HORA "}hs <br />
              {localName || "Local do evento"}
              <br />
              {adress || "Endereço"}
            </p>
          </div>
        </div>

        <div className={styles.reception}>
          <div className={styles.icon_container}>
            <img src={cup} alt="Cup icon" />
          </div>
          <div className={styles.reception_title}>
            <h2>Recepção</h2>
          </div>
          <div className={styles.reception_p}>
            <p>
              {dayOfWeek || "xx"}, {day || "DIA"} de {mounth || "MÊS"} de{" "}
              {year || "ANO"} <br />
              {hour || "HORA "}hs <br />
              {localName || "Local do evento"}
              <br />
              {adress || "Endereço"}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.shadow}></div>
    </section>
  );
};

export default When;
