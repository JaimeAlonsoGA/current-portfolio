import { SeeMoreOnProject } from "@/components/seeMore";
import Title from "@/components/ui/title";
import { projects } from "@/data/projects";
import { techs } from "@/data/techs";
import Image from "next/image";
import React from "react";
import { FiGithub } from "react-icons/fi";

export default async function Project({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    throw new Error(`Project with id "${id}" not found`);
  }

  return (
    <div className="flex flex-col gap-8 h-full mt-20 items-center overflow-y-auto scrollbar-hide">
      <div className="flex flex-row items-center gap-8 bg-white">
        <Title title={project.title.toUpperCase()} />
        {project.logo && (
          <Image
            src={project.logo}
            alt={`logo of ${project.title} project`}
            width={80}
            height={80}
            className="rounded-md hidden md:flex"
          />
        )}
      </div>
      <div className="grid grid-cols-4 items-start gap-4 border rounded-md p-4">
        {project.tags.map((tag, i) => {
          const tech = techs.find((tech) => tech.id === tag);
          if (!tech) {
            return null;
          }
          return (
            <div className="flex flex-col gap-2 items-center" key={i}>
              {tech ? <tech.icon key={i} /> : null}
              <p>{tech.name}</p>
            </div>
          );
        })}
      </div>
      <span className="flex flex-col gap-2">
        {project.description.split("\n").map((line, index) => (
          <p key={index} className="text-justify">
            {line}
            <br />
          </p>
        ))}
      </span>
      <div className="w-full flex flex-wrap justify-around gap-4 scrollbar-hide ">
        {project.images?.map((image, i) => (
          <Image
            key={i}
            src={image}
            alt={`image of ${project.title} project`}
            width={200}
            height={400}
            className="rounded-md"
          />
        ))}
      </div>
      <SeeMoreOnProject />
      <footer className="w-full bg-white fixed bottom-0 flex flex-row justify-center gap-12 p-1">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="flex flex-row gap-1 items-center text-gray-500 text-xs group-hover:underline"
          >
            Github
            <FiGithub />
          </a>
        )}
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            className="flex flex-row gap-1 items-center text-gray-500 text-xs group-hover:underline"
          >
            {project.type === "web" ? "Website" : "Play Store"}
            {project.link.icon}
          </a>
        )}
      </footer>
    </div>
  );
}
