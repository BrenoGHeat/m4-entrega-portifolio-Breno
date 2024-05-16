
export const TechCard = ( {tecnologia} ) => {
    return(
        <li className="container list">
            <img className="img tech"    src={tecnologia.img} alt={tecnologia.name}/>
            <h3>{tecnologia.name}</h3>
          
        </li>
    )
}