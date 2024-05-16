import Banner from "../../assets/banner-img.png";

import styles from "./style.module.css"

import { username } from "../../data/user";

export const BannerSection = () =>{
    return(
       
        <section className={styles.banner}>
            <div className="container banner">
            <p className="paragraph poppins">{username}</p>
            <h1 className="title lg">Bem vindo ao meu Portfólio</h1>
            <p className="paragraph">Uma frase interessante sobre mim</p>
            <button type="button" className="btn banner">Saiba Mais</button>
           
            </div>
            <div className="container img">
            <img src={Banner} alt="" />
            </div>
           
            
        </section>
      
    )
}
