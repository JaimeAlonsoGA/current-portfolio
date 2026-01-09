import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black/50 w-full flex flex-col items-center pb-20 pt-32 px-4 sm:px-8">
      <div className="w-full max-w-7xl">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Projects
          </h1>
          <p className="text-white/60 text-xl font-light leading-relaxed">
            A curated collection of applications, systems, and tools I have built, showcasing fullstack development capabilities.
          </p>
        </div>
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}