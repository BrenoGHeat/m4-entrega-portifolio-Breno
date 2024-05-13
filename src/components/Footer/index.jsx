
import Whatsapp from "../../assets/whatsapp-icon.png";
import Linkedin from "../../assets/linkedin-icon.png";
import GitHub from "../../assets/github-icon.png";

import style from "./style.module.css";


export const Footer = () => {
    return(
        <footer>
            <div className="container sm">
                <div className="container footer">
                <h1>Contato</h1>
                    <img src={Whatsapp} alt="Logo Whatsapp" />
                    <img src={Linkedin} alt="Logo Linkedin" />
                    <img src={GitHub} alt="Logo GitHub" />
                    </div>
                <p>Todos os direitos reservados - Breno Garcia </p>
            </div>
            
        </footer>
    )
}