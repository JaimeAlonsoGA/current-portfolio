import ProjectCard from "@/components/projectCard";
import { projects } from "@/data/projects";

export default function Software() {
  return (
    <section className="w-full flex flex-col gap-8 max-h-screen scrollbar-hide">
      <div className="flex flex-wrap gap-4">
        {projects.map((project, i) => {
          return <ProjectCard project={project} i={i} />;
        })}
      </div>
    </section>
  );
}
