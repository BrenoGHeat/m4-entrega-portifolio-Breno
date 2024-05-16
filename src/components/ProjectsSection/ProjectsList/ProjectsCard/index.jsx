import Giticon from "../../../../assets/git-icon.png";


export const ProjectsCard = ( { project } ) => {
    return(
        <li>
            
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={Giticon} alt="Logo Git Hub" />
            
        
        </li>
    )
}