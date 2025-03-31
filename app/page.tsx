import Hero from "@/components/hero";
import { HeroProjects } from "@/components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 h-full items-center sm:items-start">
      <Hero />
      <HeroProjects />
    </div>
  );
}
