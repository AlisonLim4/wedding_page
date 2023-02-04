import styles from "./styles/Schedule.module.css";
import TitleSection from "./components/TitleSection";
import ScheduleCard from "./components/ScheduleCard";
import building from "./assets/icons/building_icon.svg";
import crown from "./assets/icons/crown_icon.svg";
import car from "./assets/icons/car_icon.svg";
import camera from "./assets/icons/cam_icon.svg";
import cake from "./assets/icons/cake_icon.svg";
import drink from "./assets/icons/drink_icon.svg";
import React from "react";

const Schedule = () => {
  return (
    <section className={styles.schedule}>
      <TitleSection title="Programação" />
      <div className={styles.events}>
        <ScheduleCard
          img={building}
          alt="Building icon"
          title="Cerimônia"
          description={
            "This is a short description elaborating the service you have mentioned above."
          }
        />
        <ScheduleCard
          img={crown}
          alt="Crown icon"
          title="O que vestir"
          description={
            "This is a short description elaborating the service you have mentioned above."
          }
        />
        <ScheduleCard
          img={car}
          alt="Car icon"
          title="Estacionamento"
          description={
            "This is a short description elaborating the service you have mentioned above."
          }
        />
        <ScheduleCard
          img={camera}
          alt="Camera icon"
          title="Registro"
          description={
            "This is a short description elaborating the service you have mentioned above."
          }
        />
        <ScheduleCard
          img={cake}
          alt="Cake icon"
          title="Recepção"
          description={
            "This is a short description elaborating the service you have mentioned above."
          }
        />
        <ScheduleCard
          img={drink}
          alt="Drink icon"
          title="Bebidas"
          description={
            "This is a short description elaborating the service you have mentioned above."
          }
        />
      </div>
    </section>
  );
};

export default Schedule;
