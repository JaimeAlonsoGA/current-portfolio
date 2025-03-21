import ProjectCard from "@/components/projectCard";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/data/projects";

export default function Software() {
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );
  const container = "flex flex-wrap gap-4 mt-4";

  return (
    <div className="w-full flex flex-col h-full">
      <Tabs defaultValue="all" className="h-full w-full overflow-y-auto scrollbar-hide">
        <div className="sticky top-5 mt-20 flex flex-col items-center justify-end">
          <TabsList>
            <TabsTrigger value="all">Todos</TabsTrigger>
            <TabsTrigger value="app">App</TabsTrigger>
            <TabsTrigger value="program">Solution</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="all" className={container}>
          {projects.map((project, i) => {
            return (
              <div key={i}>
                <ProjectCard project={project} />
              </div>
            );
          })}
        </TabsContent>
      </Tabs>
      <footer className="flex flex-wrap h-fit items-end md:flex-row justify-between gap-y-2 py-4">
        {allTags.map((tag) => (
          <Badge variant={"secondary"} key={tag}>
            {tag}
          </Badge>
        ))}
      </footer>
    </div>
  );
}
