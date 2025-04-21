import { Badge } from "./ui/badge";
import Link from "next/link";
import { ProjectProps } from "@/data/projects";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaAppStore } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Link
      href={`./projects/${project.id}`}
      className="bg-gray-50 bg-opacity-90 group relative flex flex-row justify-between w-full p-4 rounded-md max-w-4xl h-60 gap-4 overflow-y-auto scrollbar-hide"
    >
      <div className="flex flex-col justify-between min-gap-4 w-3/5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{project.title}</h1>
          <h2 className="text-sm">{project.overview}</h2>
        </div>
        <div className="flex flex-row gap-4 items-center">
          {project.link?.map((link, i) => {
            if (link.label === "Private GitHub") return null;
            return (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="z-20 text-xs items-center flex flex-row hover:underline underline-offset-2"
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
              <p className="text-xs items-center flex flex-row hover:line-through">
                Private GitHub
                <RiGitRepositoryPrivateLine className="inline-block ml-1" />
              </p>
            )}
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex-wrap gap-2 hidden sm:flex">
            {project.tags?.sort().map((tag, i) => (
              <Badge variant={"default"} key={i}>
                {tag}
              </Badge>
            ))}
          </div>
          {/* <Link
            href={`./projects/${project.id}`}
            className="text-xs text-blue-500 hover:underline underline-offset-2 after:content-['_↗']"
          >
            Read more
          </Link> */}
        </div>
      </div>
      <div className="flex w-2/5 justify-center rounded-lg border border-gray-50">
        {(project.images?.[0] || project.icon) && (
          <Image
            src={project.images?.[0] ?? project.icon ?? ""}
            alt={project.title || "Project image"}
            width={
              project.images?.[0]?.includes("card") ||
              !project.images?.[0]?.includes("frame")
                ? 400
                : 120
            }
            height={0}
            className={`rounded-md hidden sm:flex aspect-[16/9] ${
              project.images?.[0]?.includes("card") && "sm:w-full"
            }`}
            loading="lazy"
          />
        )}
      </div>
      {project.icon && (
        <div className="sm:hidden flex justify-center items-start">
          <Image
            src={project.icon}
            alt={`logo of ${project.title} project`}
            width={150}
            height={0}
            className="rounded-md sm:hidden flex aspect-square min-w-16"
          />
        </div>
      )}
    </Link>
  );
};

export const HeroProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-gray-50 bg-opacity-80 group relative flex flex-row justify-between w-full p-4 rounded-md shadow-xl h-60 gap-4">
      <div className="flex flex-col justify-between w-3/5">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{project.title}</h1>
          <h2 className="text-xs md:text-sm flex">{project.overview}</h2>
        </div>
        <div className="flex flex-row gap-4 items-center ">
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
                    <TbWorld className="ml-1 hidden sm:flex" />
                  ) : link.label === "Play Store" ? (
                    <IoPhonePortraitOutline className="ml-1 hidden sm:flex" />
                  ) : link.label === "App Store" ? (
                    <FaAppStore className="ml-1 hidden sm:flex" />
                  ) : link.label === "GitHub" ? (
                    <FiGithub className="ml-1 hidden sm:flex" />
                  ) : null}
                </a>
              );
          })}
        </div>
        <div className="flex-col gap-2 text-sm hidden sm:flex">
          <div className="flex flex-wrap gap-2">
            {project.tags.sort().map((tag, i) => (
              <Badge variant={"default"} key={i}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-2/5 justify-center rounded-lg bg-gradient-to-b from-gray-200 to-gray-100 ">
        {(project.images?.[0] || project.icon) && (
          <Image
            src={project.images?.[0] ?? project.icon ?? ""}
            alt={project.title}
            width={project.images?.[0]?.includes("card") ? 400 : 100}
            height={0}
            className={`rounded-md flex aspect-[16/9] ${
              project.images?.[0]?.includes("card") &&
              "hidden sm:flex sm:w-full"
            }`}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

//transition-transform duration-300 ease-in-out hover:translate-y-[-3px] hover:shadow-2xl
