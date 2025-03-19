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
import { JSX } from "react";

interface CardProps {
  project: {
    tags: string[];
    description: string;
    title: string;
    github?: string;
    link?: {
      url: string;
      icon: JSX.Element;
    };
    seeMore?: boolean;
  };
  i: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, i }) => {
  return (
    <Card key={i} className="flex flex-col gap-2">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap text-justify text-balance text-sm">
        {project.tags.map((tag, i) => (
          <Badge variant={`secondary`} key={i} className="mx-2">
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
            className="text-xs text-gray-500 font-semibold"
          >
            . . .
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;