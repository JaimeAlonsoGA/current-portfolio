import GalleryImage from "@/components/gallery";
import { SeeMoreOnProject } from "@/components/seeMore";
import { Badge } from "@/components/ui/badge";
import Title from "@/components/ui/title";
import { projects } from "@/data/projects";
import { techs } from "@/data/techs";
import Image from "next/image";
import React from "react";
import { FaAppStore } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
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
    <div className="w-full flex flex-col h-full items-center overflow-y-auto scrollbar-hide">
      <div className="mt-24 mb-6 md:z-20 md:sticky top-5 flex md:flex-row flex-wrap justify-around md:justify-between items-start gap-4 border rounded-md p-2 bg-gray-50 bg-opacity-90 max-w-full">
        {project.tags.map((tag, i) => {
          const tech = techs.find((tech) => tech.id === tag);
          if (!tech) {
            return null;
          }
          return (
            <div
              className="flex md:flex-row flex-col gap-2 items-center"
              key={i}
            >
              {tech ? <tech.icon key={i + tag} /> : null}
              <Badge variant={"default"} key={i}>
                {tech.name}
              </Badge>{" "}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-row items-center gap-8 backdrop-blur-xl rounded-full p-4 text-white">
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
        <div
          className={`${
            project.tags.includes("react native")
              ? "flex-col sm:flex-row"
              : "flex-col"
          } flex gap-12 max-w-4xl border p-4 rounded-md shadow-md bg-gray-50 bg-opacity-90`}
        >
          <ol className="flex flex-col gap-3 text-sm">
            {project.description.split("\n").map((line, index) => {
              const parts = line.split(
                /(\[b\].*?\[\/b\]|\[link:.*?\]\(.*?\))/g
              );

              return (
                <li key={index} className="text-pretty">
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
          {project.video && (
            <div className="flex justify-center">
              <iframe
                className={`rounded-lg ${
                  project.tags.includes("react native")
                    ? "h-[500] w-[250]"
                    : "aspect-video w-full"
                }`}
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"
              ></iframe>
            </div>
          )}
        </div>
        {project.images && (
          <div className="w-full flex flex-wrap justify-around gap-4 p-4 rounded-md">
            {project.images?.map((image, i) => (
              <React.Fragment key={i}>
                <GalleryImage
                  title={project.title}
                  image={image}
                  index={i}
                  isPhone={project.tags.includes("react native")}
                />
              </React.Fragment>
            ))}
          </div>
        )}
        <SeeMoreOnProject />
        {project.link && (
          <footer className="w-full bg-gray-50 fixed bottom-0 flex flex-row justify-center gap-12 p-1">
            {project.link.map((link, i) => {
              return (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  className="text-xs items-center flex flex-row hover:underline underline-offset-2"
                >
                  {link.label}
                  {link.label === "Website" ? (
                    <TbWorld className="inline-block ml-1" />
                  ) : link.label === "Play Store" ? (
                    <IoPhonePortraitOutline className="inline-block ml-1" />
                  ) : link.label === "App Store" ? (
                    <FaAppStore className="inline-block ml-1 " />
                  ) : link.label === "GitHub" ? (
                    <FiGithub className="inline-block ml-1" />
                  ) : null}
                </a>
              );
            })}
          </footer>
        )}
      </div>
    </div>
  );
}
