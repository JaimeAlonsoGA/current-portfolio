import ProjectCard from "./projectCard";
import { projects } from "@/data/projects";

const Projects = () => {
    return (
        <div className="h-1/2 w-full flex flex-wrap gap-6 overflow-hidden scrollbar-hide justify-center">
            {projects.map((project, i) => {
                return <div key={i}><ProjectCard project={project} i={i} /></div>;
            })}
        </div>
    )
}

export default Projects;