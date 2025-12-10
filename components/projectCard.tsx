"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectProps } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: ProjectProps }) {
  const isMobileApp = project.images[0]?.includes("frame");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-white/5 backdrop-blur-md rounded-xl overflow-hidden",
        "border border-white/10 hover:border-white/20 transition-all duration-300",
        project.highlight && "ring-2 ring-yellow-500/50"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        {/* Image Carousel */}
        <div className="relative aspect-video bg-black/20 rounded-lg overflow-hidden">
          <Carousel opts={{
            align: "start",
            loop: true,
          }}
            className="w-full h-full"
          >
            <CarouselContent>
              {project.images.map((img, idx) => (
                <CarouselItem key={idx} className="relative aspect-video">
                  <Image
                    src={img}
                    alt={`${project.title} image ${idx + 1}`}
                    fill
                    className={cn(
                      "object-cover rounded-lg",
                      isMobileApp && "object-contain"
                    )}
                    priority={idx === 0}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70" />
            <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70" />
          </Carousel>

          {/* Highlight Badge */}
          {project.highlight && (
            <div className="absolute top-3 right-3 bg-yellow-500/90 backdrop-blur-sm rounded-full p-2">
              <FaStar className="w-4 h-4 text-white" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {project.title}
                </h2>
                <span className="text-sm text-white/60 uppercase tracking-wide">
                  {project.type}
                </span>
              </div>
            </div>

            <p className="text-white/80 text-base mb-4 leading-relaxed">
              {project.overview}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-white/10 text-white/90 border-white/20 text-xs"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          {project.link && project.link.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.link.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label === "GitHub" ? (
                      <GitBranch className="mr-2 h-4 w-4" />
                    ) : (
                      <ExternalLink className="mr-2 h-4 w-4" />
                    )}
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}