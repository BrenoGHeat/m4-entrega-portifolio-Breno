import { TechList } from "./TechList";

import styles from "./style.module.css";

export const TechSection = () => {
  return (
    <section>
      <div className={styles.tech}>
        <h1 className="title md">Tecnologias</h1>
        <TechList />
      </div>
    </section>
  );
};
