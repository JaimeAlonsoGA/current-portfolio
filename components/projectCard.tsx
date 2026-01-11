"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaStar } from "react-icons/fa";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProjectProps } from "@/data/projects";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ProjectCard({ project }: { project: ProjectProps }) {
  const isMobileApp = project.images[0]?.includes("frame");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative flex flex-col gap-6"
    >
      {/* Card Container */}
      <div className={`${project.highlight ? "shadow-md shadow-yellow-500/10 hover:shadow-yellow-500/20" : "group-hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]"} relative bg-zinc-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500`}>

        {/* Highlight Badge */}
        {project.highlight && (
          <div className="absolute top-4 right-4 z-20">
            <div className="bg-yellow-500/10 backdrop-blur-md border border-yellow-500/20 text-yellow-500 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-2 shadow-lg">
              <FaStar className="w-3 h-3" />
              <span>Featured</span>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
          {/* Image Section - Takes up more space now */}
          <div className="lg:col-span-3 relative h-[300px] lg:h-full min-h-[300px] bg-black/50 overflow-hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full h-full flex flex-col"
            >
              <CarouselContent className="flex-1 h-full ml-0">
                {project.images.map((img, idx) => (
                  <CarouselItem key={idx} className="relative w-full h-full min-h-[300px] pl-0">
                    <div className="relative w-full h-full group/image cursor-grab active:cursor-grabbing">
                      <Image
                        src={img}
                        alt={`${project.title} image ${idx + 1}`}
                        fill
                        className={cn(
                          "transition-transform duration-700 ease-out group-hover/image:scale-105",
                          isMobileApp ? "object-contain p-8" : "object-cover"
                        )}
                        priority={idx === 0}
                      />
                      {/* Gradient overlay for better text contrast if we had text over image, but here it adds depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {project.images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4 bg-black/50 hover:bg-white text-white hover:text-black border-none backdrop-blur-sm" />
                  <CarouselNext className="right-4 bg-black/50 hover:bg-white text-white hover:text-black border-none backdrop-blur-sm" />
                </>
              )}
            </Carousel>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 p-8 flex flex-col justify-between bg-gradient-to-br from-white/[0.03] to-transparent">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="bg-white/5 border-white/10 text-white/50 hover:bg-white/10 transition-colors uppercase tracking-wider text-[10px]">
                  {project.type}
                </Badge>
              </div>

              <Link href={`/projects/${project.id}`} className="group/title block">
                <h2 className="font-mono text-3xl font-bold text-white mb-3 leading-tight group-hover/title:text-primary transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300" />
                </h2>
              </Link>

              <p className="text-zinc-400 text-base mb-6 leading-relaxed line-clamp-3">
                {project.overview}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-xs font-medium text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded border border-white/5">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
              {project.link?.map((link) => (
                <Button
                  key={link.label}
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-transparent border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 hover:border-white/30 transition-all duration-300"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label === "GitHub" ? (
                      <GitBranch className="mr-2 h-3.5 w-3.5" />
                    ) : (
                      <ExternalLink className="mr-2 h-3.5 w-3.5" />
                    )}
                    {link.label}
                  </a>
                </Button>
              ))}
              <Button
                asChild
                variant="default"
                size="sm"
                className="bg-white text-black hover:bg-zinc-200 ml-auto"
              >
                <Link href={`/projects/${project.id}`}>
                  Details
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
