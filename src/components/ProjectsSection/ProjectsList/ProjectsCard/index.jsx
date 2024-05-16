import Giticon from "../../../../assets/git-icon.png";

export const ProjectsCard = ({ project }) => {
  return (
    <li className="mini container card">
     
      <h3 className="title three">{project.name}</h3>
      <img className="git icon" src={Giticon} alt="Logo Git Hub" />
     
      <p className="paragraph">{project.description}</p>
      <a href="#">Saiba Mais</a>
    
    </li>
  );
};
