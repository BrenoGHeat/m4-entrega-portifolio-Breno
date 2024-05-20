import { ProjectsList } from "./ProjectsList";

import styles from "./style.module.css";

export const ProjectsSection = () => {
  return (
    <section>
      <div className={styles.card}>
        <h2 className="title md">Projetos</h2>
        <ProjectsList />
      </div>
    </section>
  );
};
