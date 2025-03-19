import ProjectCard from "./projectCard";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";

const Projects = () => {
    return (
        <div className="h-1/2 w-full flex flex-wrap gap-6 overflow-hidden scrollbar-hide justify-center">
            {projects.map((project, i) => {
                return <ProjectCard project={project} i={i} />;
            })}
        </div>
    )
}

export default Projects;