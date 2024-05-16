import { ProjectsList } from "./ProjectsList";

import styles from "./style.module.css";

export const ProjectsSection = () =>{
    return (
        <section className={styles.card}>
            <h1>Projetos</h1>
           <ProjectsList />
        </section>
    )
}