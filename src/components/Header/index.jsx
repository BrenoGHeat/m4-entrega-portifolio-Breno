
import Portfolio from "../../assets/portfolio.png"

import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Portfolio} alt="Logo Portfolio" />
            <div className="container header">
                <h3 className="paragraph three">Sobre</h3>
                <h3  className="paragraph three">Stack</h3>
                <h3  className="paragraph three">Projetos</h3>
            </div>
            <button type="button" className="btn">Contato</button>
        </header>
    )


}