"use client";

import React, { useState } from "react";
import { ExternalLink, GitBranch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectProps, projects } from "@/data/projects";
import { techs } from "@/data/techs";
import { TechIcon } from "@/components/tech-icon";
import Footer from "@/components/layout/footer";

const Project: React.FC<{ project: ProjectProps; id: string }> = ({
  project,
  id,
}) => {
  const [selectedImage, setSelectedImage] = useState(project?.images?.[0]);
  const isMobileApp =
    project?.type === "app" && project?.images?.[0]?.includes("frame");

  // Find related technologies
  const projectTechs = project.tags
    .map((tag) => techs.find((tech) => tech.id === tag))
    .filter((tech): tech is (typeof techs)[0] => tech !== undefined);

  // Find related projects (excluding current one)
  const relatedProjects = projects
    .filter(
      (p) => p.id !== id && p.tags.some((tag) => project.tags.includes(tag))
    )
    .slice(0, 3);

  // Helper to format text with custom tags
  const renderDescription = (text: string) => {
    return text.split("\n").map((line, index) => {
      const parts = line.split(
        /(\[b\].*?\[\/b\]|\[link:.*?\]\(.*?\))/g
      );

      return (
        <li key={index} className="text-pretty mb-2">
          {parts.map((part, partIndex) => {
            if (part.startsWith("[b]") && part.endsWith("[/b]")) {
              return (
                <strong key={partIndex} className="text-white font-semibold">
                  {part.slice(3, -4)}{" "}
                </strong>
              );
            }

            if (part.startsWith("[link:") && part.includes("](")) {
              const text = part.slice(6, part.indexOf("]("));
              const url = part.slice(part.indexOf("](") + 2, -1);
              return (
                <a
                  key={partIndex}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors underline decoration-primary/30 underline-offset-4"
                >
                  {text}
                </a>
              );
            }
            return part;
          })}
        </li>
      );
    })
  }

  return (
    <div className="min-h-screen bg-black/50 flex flex-col items-center w-full">
      {/* Hero Section with Blur Background */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover blur-3xl opacity-30 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-black" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/20 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                {project.type}
              </span>
              {project.tags.map(tag => (
                <span key={tag} className="bg-white/5 text-white/60 border border-white/10 px-3 py-1 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
              {project.overview}
            </p>

            {project.link?.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-8">
                {project.link?.map((link) => (
                  <Button
                    key={link.label}
                    asChild
                    size="lg"
                    className="rounded-full bg-white text-black hover:bg-zinc-200"
                  >
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label === "GitHub" ? (
                        <GitBranch className="mr-2 h-5 w-5" />
                      ) : (
                        <ExternalLink className="mr-2 h-5 w-5" />
                      )}
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-7xl px-4 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 shadow-2xl">
              {selectedImage && (
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className={`w-full h-full ${isMobileApp ? "object-contain p-8" : "object-cover"
                    }`}
                />
              )}
            </div>
            {project.images && project.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`relative w-32 aspect-video flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === image ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Description & Video Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="bg-zinc-900/50 border border-white/5 p-1 rounded-full mb-8">
                <TabsTrigger
                  value="description"
                  className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:text-black"
                >
                  Description
                </TabsTrigger>
                {project.video && (
                  <TabsTrigger
                    value="video"
                    className="rounded-full px-6 data-[state=active]:bg-white data-[state=active]:text-black"
                  >
                    Video Demo
                  </TabsTrigger>
                )}
              </TabsList>
              <TabsContent
                value="description"
                className="space-y-6"
              >
                <ul className="flex flex-col gap-2 text-lg text-zinc-300 leading-relaxed font-light">
                  {renderDescription(project.description)}
                </ul>
              </TabsContent>
              {project.video && (
                <TabsContent
                  value="video"
                  className="animate-in fade-in-0 zoom-in-95"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50">
                    <iframe
                      className="w-full h-full"
                      src={project.video}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </motion.div>

        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-24 p-6 rounded-2xl bg-zinc-900/30 border border-white/5 backdrop-blur-md"
          >
            <h3 className="text-xl font-bold text-white mb-6">Built With</h3>
            <div className="grid grid-cols-2 gap-4">
              {projectTechs.map((tech, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  <TechIcon name={tech.name} Icon={tech.icon} color={tech.color} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {relatedProjects.length > 0 && (
        <div className="w-full max-w-7xl px-4 sm:px-8 py-20 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12 text-white">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((p) => {
              const isMobileApp =
                p?.type === "app" && p?.images?.[0]?.includes("frame");
              return (
                <Link key={p.id} href={`/projects/${p.id}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl mb-4 bg-zinc-900 shadow-lg border border-white/5">
                    {p.images && p.images[0] && (
                      <Image
                        src={p.images[0] || "/placeholder.svg"}
                        alt={p.title}
                        fill
                        className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${isMobileApp ? "object-contain p-4" : "object-cover"
                          }`}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium text-white group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1 line-clamp-1">{p.overview}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Project;
