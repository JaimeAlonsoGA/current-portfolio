"use client";

import { Badge } from "./ui/badge";
import Link from "next/link";
import { ProjectProps } from "@/data/projects";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaAppStore, FaStar } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-50 bg-opacity-90 group relative flex flex-row justify-between w-full p-4 rounded-md max-w-4xl h-60 gap-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{project.title}</h1>
          <h2 className="text-sm">{project.overview}</h2>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {project.link?.map((link, i) => {
            if (link.label === "Private GitHub") return null;
            else
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
          {project.link &&
            project.link.some((link) => link.label === "Private GitHub") && (
              <p className="text-xs items-center flex flex-row hover:line-through ">
                Private GitHub
                <RiGitRepositoryPrivateLine className="inline-block ml-1" />
              </p>
            )}
        </div>
        <div className="flex flex-col gap-2 text-sm ">
          <div className="flex flex-wrap gap-2">
            {project.tags.sort().map((tag, i) => (
              <Badge variant={"default"} key={i}>
                {tag}
              </Badge>
            ))}
          </div>
          <Link
            href={`./projects/${project.id}`}
            className="text-xs text-blue-500 hover:underline underline-offset-2  after:content-['_↗']"
          >
            Conocer más
          </Link>
        </div>
      </div>
      {(project.images?.[0] || project.logo) && (
        <Image
          src={project.images?.[0] ?? project.logo ?? ""}
          alt={project.title}
          width={project.images?.[0]?.includes("card") ? 400 : 120}
          height={0}
          className="rounded-md hidden md:flex aspect-[16/9]"
          loading="lazy"
        />
      )}
      {/* {project.highlight && (
        <Badge
          className="absolute top-2 right-2 group-hover:animate-pulse"
          variant={"default"}
        >
          <FaStar />
        </Badge>
      )} */}
    </div>
  );
};

export const HeroProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-50 bg-opacity-80 group relative flex flex-row justify-between w-full p-4 rounded-md shadow-xl max-w-4xl h-60 gap-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{project.title}</h1>
          <h2 className="text-sm">{project.overview}</h2>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {project.link?.map((link, i) => {
            if (link.label === "Private GitHub") return null;
            else
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
        </div>
        <div className="flex flex-col gap-2 text-sm ">
          <div className="flex flex-wrap gap-2">
            {project.tags.sort().map((tag, i) => (
              <Badge variant={"default"} key={i}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      {(project.images?.[0] || project.logo) && (
        <Image
          src={project.images?.[0] ?? project.logo ?? ""}
          alt={project.title}
          width={project.images?.[0]?.includes("card") ? 400 : 100}
          height={0}
          className="rounded-md hidden md:flex aspect-[16/9]"
          loading="lazy"
        />
      )}
      {/* {project.highlight && (
    <Badge
      className="absolute top-2 right-2 group-hover:animate-pulse"
      variant={"default"}
    >
      <FaStar />
    </Badge>
  )} */}
    </div>
  );
};

//transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-2xl
