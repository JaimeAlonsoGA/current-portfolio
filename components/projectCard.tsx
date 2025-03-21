"use client";

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

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <Link href={`./projects/${project.id}`}>
      <Card className="flex flex-col max-w-xl">
        <CardHeader>
          <CardTitle className="mb-2">{project.title}</CardTitle>
          <CardDescription>{project.overview}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4 text-justify text-balance text-sm">
          {project.tags.map((tag, i) => (
            <Badge variant={"outline"} key={i}>
              {tag}
            </Badge>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <div className="flex flex-row gap-4 items-center">
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
            )} */}
          {/* {project.link && (
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
            <a className="z-20 text-xs text-gray-500 font-semibold">. . .</a>
          )} */}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
