"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectProps } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: ProjectProps }) {
  const projectLink = project.id
    ? `/projects/${project.id}`
    : typeof project.link === "string"
    ? project.link
    : project.link[0]?.url || "#";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      className="w-full max-w-sm" // Asegura un tamaño consistente para todas las cards
    >
      <Link href={projectLink}>
        {project.highlight ? (
          <div
            className={cn(
              "w-full max-w-sm h-[450px] bg-gradient-to-r from-yellow-500 to-red-500 p-0.5 rounded-xl"
            )}
          >
            <ContentCard project={project} />
          </div>
        ) : (
          <div className="w-full max-w-sm h-[450px]">
            <ContentCard project={project} />
          </div>
        )}
      </Link>
    </motion.div>
  );
}

const ContentCard: React.FC<{ project: ProjectProps }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isMobileApp = project.images[0]?.includes("frame");

  return (
    <Card
      className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={340}
            className={`w-full h-full ${
              isMobileApp ? "object-contain" : "object-cover"
            }`} // Cambia el estilo según el tipo de imagen
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {project.highlight && (
          <motion.div
            className="absolute top-4 right-14 md:right-12 bg-background/80 backdrop-blur-sm rounded-full p-2"
            animate={{
              rotate: isHovered ? 145 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-yellow-500">
              <FaStar className="h-4 w-4" />
            </span>
          </motion.div>
        )}
        <motion.div
          className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2"
          animate={{
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="h-4 w-4" />
        </motion.div>
      </div>

      <CardContent className="p-6 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{project.overview}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
