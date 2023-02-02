import styles from "./styles/Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Página desenvolvivida por{" "}
        <a href="https://portifolio-liard-phi.vercel.app/" target="_blank">
          <span>A</span>lison <span>L</span>ima
        </a>{" "}
        front-end developer.
      </p>
    </footer>
  );
};

export default Footer;
