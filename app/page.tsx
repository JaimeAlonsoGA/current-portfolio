import Blanket from "@/components/blanket";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import SeeMore from "@/components/seeMore";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 h-full items-center sm:items-start">
      <Hero />
      <Projects />
      <Blanket />
      <SeeMore />
    </div>
  );
}
