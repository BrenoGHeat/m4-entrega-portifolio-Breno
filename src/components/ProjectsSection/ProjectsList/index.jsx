import { ProjectsCard } from "./ProjectsCard";
import { projects } from "../../../data/projects";

export const ProjectsList = () => {
  return (
    <ul className="container projects list">
      {projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </ul>
  );
};
