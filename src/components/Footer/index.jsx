import Whatsapp from "../../assets/whatsapp-icon.png";
import Linkedin from "../../assets/linkedin-icon.png";
import GitHub from "../../assets/github-icon.png";

import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container sm">
        <div className="container ft">
          <h1>Contato</h1>
          <div className="container logo">

          <img src={Whatsapp} alt="Logo Whatsapp" />
          <img src={Linkedin} alt="Logo Linkedin" />
          <img src={GitHub} alt="Logo GitHub" />
          </div>
        </div>
        <p>Todos os direitos reservados - Breno Garcia </p>
      </div>
    </footer>
  );
};
