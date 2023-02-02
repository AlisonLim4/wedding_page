import styles from "./styles/Confirmation.module.css";
import React from "react";
import Form from "./components/Form";

const Confirmation = () => {
  return (
    <section className={styles.confirmation}>
      <div className={styles.background}>
        <div className={styles.shadow}>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <h1>Podemos confirmar sua presença?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formulary}>
        <Form />
      </div>
    </section>
  );
};

export default Confirmation;
