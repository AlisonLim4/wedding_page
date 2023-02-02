import styles from "./styles/Photos.module.css";
import React, { useRef } from "react";
import photo1 from "./assets/img/photo1.png";
import photo2 from "./assets/img/photo2.png";
import photo3 from "./assets/img/photo3.png";
import photo4 from "./assets/img/photo4.png";
import chevron_r from "./assets/icons/chevronr_icon.svg";
import chevron_l from "./assets/icons/chevronl_icon.svg";

const Photos = () => {
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo1,
    photo2,
    photo3,
    photo4,
  ];
  const carousel = useRef(null);

  const handlePrev = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft -= 300;
  };
  const handleNext = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += 300;
  };
  return (
    <section className={styles.photos}>
      <div className={styles.photos_container} ref={carousel}>
        {images.map((img) => {
          return <img src={img} alt="" key={img} />;
        })}
      </div>
      <div className={styles.buttons_container}>
        <button onClick={handlePrev}>
          <img src={chevron_l} alt="Chevron icon" />
        </button>

        <button onClick={handleNext}>
          <img src={chevron_r} alt="Chevron icon" />
        </button>
      </div>
    </section>
  );
};

export default Photos;
