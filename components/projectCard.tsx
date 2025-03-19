"use client";

import { FaGithub } from "react-icons/fa6";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { ProjectProps } from "@/data/projects";

const ProjectCard: React.FC<ProjectProps> = ({ project, i }) => {
  return (
    <Card key={i} className="flex flex-col max-w-2xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4 text-justify text-balance text-sm">
        {project.tags.map((tag, i) => (
          <Badge variant={"outline"} key={i}>
            {tag}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-row gap-4 items-center">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex flex-row gap-1 group items-center"
            >
              <p className="text-gray-500 text-xs group-hover:underline">
                Github
              </p>
              <FaGithub />
            </a>
          )}
          {project.link && (
            <a
              href={project.link.url}
              target="_blank"
              className="flex flex-row gap-1 group items-center"
            >
              <p className="text-gray-500 text-xs group-hover:underline">
                Website
              </p>
              <p className="text-xs text-gray-500 font-semibold">
                {project.link.icon}
              </p>
            </a>
          )}
        </div>
        {project.seeMore && (
          <Link
            href={`./software/${project.title}`}
            className="z-20 text-xs text-gray-500 font-semibold"
          >
            . . .
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
