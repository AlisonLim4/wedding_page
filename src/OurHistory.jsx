import styles from "./styles/OurHistory.module.css";

import couple from "./assets/img/couple.png";
import React from "react";
import TitleSection from "./components/TitleSection";

const OurHistory = ({ wife_name, husband_name }) => {
  return (
    <section className={styles.ourHistory}>
      <TitleSection
        title="Nossa História"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <div className={styles.content_container}>
        <div className={styles.wife_side}>
          <h2>{wife_name}</h2>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Donec sollicitudin molestie
            malesuada. Cras ultricies ligula sed magna dictum porta.
          </p>
        </div>
        <div className={styles.couple}>
          <img src={couple} alt="Couple Photo" />
        </div>
        <div className={styles.husband_side}>
          <h2>{husband_name}</h2>
          <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
            sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id
            imperdiet et, porttitor at sem. Donec sollicitudin molestie
            malesuada. Cras ultricies ligula sed magna dictum porta.
          </p>
        </div>
      </div>

      <div className={styles.motivational}>
        <div className={styles.motivational_container}>
          <p>“Melhor ter amado e perdido do que nunca ter amado”</p>
          <span>Robert Patterson</span>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
