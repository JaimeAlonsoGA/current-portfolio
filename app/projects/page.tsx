import { ProjectCard } from "@/components/projectCard";
import { projects } from "@/data/projects";
import { SPACING } from "@/lib/utils";

export default function Software() {
  const box = "relative flex w-full justify-center";

  return (
    <div
      className={`px-4 sm:px-8 pt-16 mt-20 pb-4 overflow-y-auto scrollbar-hide w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-4`}
    >
      {projects.map((project, i) => {
        return (
          <div key={i} className={box}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
}
