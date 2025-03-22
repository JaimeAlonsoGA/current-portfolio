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
        <CardFooter className="flex justify-between"></CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
