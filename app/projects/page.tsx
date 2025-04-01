import { ProjectCard } from "@/components/projectCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";

export default function Software() {
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  const container = "flex flex-col justify-center items-center gap-4";
  const box = "relative flex w-full justify-center"
  
  return (
    <div className="w-full flex flex-col h-full">
      <Tabs
        defaultValue="all"
        className="h-full w-full overflow-y-auto scrollbar-hide"
      >
        <div className="sticky top-5 mt-24 flex flex-col items-center justify-end z-20 mb-6">
          <TabsList className="bg-gray-50 bg-opacity-90">
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="app">App</TabsTrigger>
            <TabsTrigger value="program">Solution</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className={container}>
          {projects.map((project, i) => {
            return (
              <div key={i} className={box}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </TabsContent>
        <TabsContent value="app" className={container}>
          {projects.map((project, i) => {
            if (!project.type.includes("app")) return null;
            return (
              <div key={i} className={box}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </TabsContent>
        <TabsContent value="program" className={container}>
          {projects.map((project, i) => {
            if (!project.type.includes("program")) return null;
            return (
              <div key={i} className={box}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </TabsContent>
        <TabsContent value="web" className={container}>
          {projects.map((project, i) => {
            if (!project.type.includes("web")) return null;
            return (
              <div key={i} className={box}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}
