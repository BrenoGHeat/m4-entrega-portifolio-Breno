
import Portfolio from "../../assets/portfolio.png"

import styles from "./style.module.css";

export const Header = () => {
    return (
        <header className="header">
            <img src={Portfolio} alt="Logo Portfolio" />
            <div>
                <h3>Sobre</h3>
                <h3>Stack</h3>
                <h3>Projetos</h3>
            </div>
            <button type="button" className="btn">Contato</button>
        </header>
    )


}