import Banner from "../../assets/banner-img.png";


export const BannerSection = () =>{
    return(
        <>
        <div>
            <p>BrenoGarcia</p>
            <h1>Bem vindo ao meu Portfólio</h1>
            <p>Uma frase interessante sobre mim</p>
            <button type="button">Saiba Mais</button>
        </div>
        <div>
                <img src={Banner} alt="" />
        </div>
        </>
    )
}