
import Portfolio from "../../assets/portfolio.png"

import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
           
            <img src={Portfolio} alt="Logo Portfolio" />
            <div className="container header">
                <p className="paragraph md">Sobre</p>
                <p className="paragraph md">Stack</p>
                <p className="paragraph md">Projetos</p>
            </div>
            <button type="button" className="btn">Contato</button>

        </header>
    )


}