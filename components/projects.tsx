import { HeroProjectCard, ProjectCard } from "./projectCard";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <div className="h-1/2 w-full flex flex-wrap gap-6 overflow-hidden scrollbar-hide justify-center">
      {projects.map((project, i) => {
        return (
          <div key={i}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
};

export const HeroProjects = () => {
  return (
    <div className="h-1/2 w-full grid grid-cols-2 gap-6 overflow-y-auto scrollbar-hide justify-center items-center">
      {projects.map((project, i) => {
        if (i > 3) return null;
        return (
          <div key={i}>
            <HeroProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
};
