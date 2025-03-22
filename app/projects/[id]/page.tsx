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
    <div className="flex flex-col gap-8 h-full mt-20 items-center overflow-y-auto scrollbar-hide max-w-11/12">
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
      <div className="w-full flex flex-col md:flex-row gap-12 justify-center items-start">
        <ol className="list-inside list-disc flex flex-col gap-8 w-full md:w-1/2">
          {project.description.split("\n").map((line, index) => {
            const parts = line.split(/(\[b\].*?\[\/b\]|\[link:.*?\]\(.*?\))/g);

            return (
              <li key={index} className="text-justify">
                {parts.map((part, index) => {
                  if (part.startsWith("[b]") && part.endsWith("[/b]")) {
                    return <strong key={index}>{part.slice(3, -4)} </strong>;
                  }

                  if (part.startsWith("[link:") && part.includes("](")) {
                    const text = part.slice(6, part.indexOf("]("));
                    const url = part.slice(part.indexOf("](") + 2, -1);
                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline after:content-['_↗'] font-medium"
                      >
                        {text}
                      </a>
                    );
                  }
                  return part; // Return the plain text part
                })}
                <br />
              </li>
            );
          })}
        </ol>
        <div>
          <iframe
            className="rounded-lg"
            width="315"
            height="560"
            src={project.video}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-4 scrollbar-hide ">
        {project.images?.map((image, i) => (
          <div className="flex flex-col gap-2">
            <Image
              key={i}
              src={image}
              alt={`image of ${project.title} project`}
              className="rounded-lg"
              width={300}
              height={200}
            />
            <p className="text-xs italic text-center">
              {image.includes("figma")
                ? "Design on Figma"
                : "Application screen"}
            </p>
          </div>
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
