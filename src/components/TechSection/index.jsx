import { TechList } from "./TechList"

import styles from "./style.module.css";

export const TechSection = () => {
    return (
        <section className={styles.tech}>
            <h1 className="title one">Tecnologias</h1>
            <TechList />
        </section>
    )
}