
import Portfolio from '../../assets/portfolio.png'

export const Header = () => {
    return (
        <header>
            <img src={Portfolio} alt="Logo Portfolio" />
            <div>
                <h3>Sobre</h3>
                <h3>Stack</h3>
                <h3>Projetos</h3>
            </div>
            <button type="button" class="btn">Contato</button>
        </header>
    )
}