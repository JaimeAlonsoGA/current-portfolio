import ProjectCard from "@/components/projectCard";
import Title from "@/components/ui/title";
import { projects } from "@/data/projects";
import { text } from "@/data/text";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Title title={text.current.name} />
      <ol className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li>{text.current.description}</li>
      </ol>
      <div className="w-full flex flex-wrap gap-6">
        {projects.map((project, i) => {
          return <ProjectCard project={project} i={i} />;
        })}
      </div>
      <div className="flex w-full absolute bottom-0 pt-64 backdrop-blur-sm bg-gradient-to-b from-transparent to-white"></div>
    </main>
  );
}
