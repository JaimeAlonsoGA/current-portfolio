"use client";

import { Badge } from "./ui/badge";
import Link from "next/link";
import { ProjectProps } from "@/data/projects";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { FaAppStore } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="bg-white group relative flex flex-row justify-between w-full p-4 border rounded-md shadow-lg max-w-4xl h-60 gap-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">{project.title}</h1>
          <h2 className="text-sm font-light">{project.overview}</h2>
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
          width={100}
          height={100}
          className="rounded-md hidden md:flex"
        />
      )}
      {project.highlight && (
        <Badge
          className="absolute top-2 right-2 group-hover:animate-pulse"
          variant={"default"}
        >
          ⭐
        </Badge>
      )}
    </div>
  );
};

// const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
//   return (
//     <Link
//       href={`./projects/${project.id}`}
//       className="flex w-full justify-center"
//     >
//       <Card className="flex flex-col w-full max-w-4xl h-60 relative">
//         <CardHeader>
//           <CardTitle className="mb-2">{project.title}</CardTitle>
//           <CardDescription>{project.overview}</CardDescription>
//         </CardHeader>
//         <CardContent className="flex flex-row items-center justify-center">
//           <div className="flex flex-wrap gap-4 text-sm">
//             {project.tags.map((tag, i) => (
//               <Badge variant={"outline"} key={i}>
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//           <Image
//             src={project.images?.[0] ?? project.logo ?? ""}
//             alt={project.title}
//             width={100}
//             height={100}
//             className="rounded-md absolute right-10"
//           />
//         </CardContent>
//         <CardFooter className="flex justify-between"></CardFooter>
//       </Card>
//     </Link>
//   );
// };

export default ProjectCard;
