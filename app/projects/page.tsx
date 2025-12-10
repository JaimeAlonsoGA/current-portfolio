import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full flex justify-center items-start pb-20 pt-24">
      <div className="px-4 sm:px-8 w-full max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-white/70 text-lg">
            A collection of applications, systems, and tools I've built
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}