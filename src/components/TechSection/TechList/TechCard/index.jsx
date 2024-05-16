
export const TechCard = ( {tecnologia} ) => {
    return(
        <li className="container technologies">
            <img className="img tech" src={tecnologia.img} alt={tecnologia.name}/>
            <h3 className="title sm">{tecnologia.name}</h3>
          
        </li>
    )
}