"use client";

import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectProps, projects } from "@/data/projects";
import { techs } from "@/data/techs";
import { TechIcon } from "@/components/tech-icon";
import Footer from "@/components/footer";

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

  return (
    <div className={`px-4 sm:px-8 pt-16 mt-20 pb-4 flex flex-col w-11/12 md:w-3/4 h-full`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          {project.title}
        </h1>

        <p className="text-xl text-white/90 mb-8 max-w-3xl">
          {project.overview}
        </p>

        {project.link?.length > 0 && (
          <div className="flex flex-wrap gap-2 md:gap-4 mb-12">
            {project.link?.map((link) => (
              <Button
                key={link.label}
                asChild
                variant="default"
                size="sm"
                className="border-white/10 bg-white/20 hover:bg-white/10 "
              >
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label === "GitHub" ? (
                    <Github className="mr-2 h-4 w-4" />
                  ) : (
                    <ExternalLink className="mr-2 h-4 w-4" />
                  )}
                  {link.label}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-white/20"
          >
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className={`w-full h-full ${
                  isMobileApp ? "object-contain" : "object-cover"
                }`}
              />
            )}
          </motion.div>

          {project.images && project.images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-between md:justify-normal gap-4 mt-4 overflow-x-auto pb-2"
            >
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative w-24 h-24 rounded-md overflow-hidden border border-white/10 cursor-pointer transition-all ${
                    selectedImage === image ? "border border-primary" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} ${index + 1}`}
                    fill
                    className={`w-full h-full ${
                      isMobileApp ? "object-contain" : "object-cover"
                    }`}
                  />
                </div>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8 border-l rounded-md border-white/20"
        >
          <div>
            {/* <h2 className="text-xl font-bold mb-4 text-white">Tech stack</h2> */}
            <div className="grid grid-cols-3 gap-4">
              {projectTechs.map((tech, index) => (
                <React.Fragment key={index}>
                  <TechIcon name={tech.name} Icon={tech.icon} color={tech.color}/>
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Tabs defaultValue="description" className="mt-2">
        <TabsList className="mb-8 bg-white/5 border border-white/10 backdrop-blur-sm text-white/90">
          <TabsTrigger
            value="description"
            className="data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            Descripción
          </TabsTrigger>
          {project.video && (
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Video
            </TabsTrigger>
          )}
        </TabsList>
        <TabsContent
          value="description"
          className="space-y-4 bg-black/60 rounded-md p-4 border border-primary/60"
        >
          <ol className="flex flex-col gap-3 text-white/90">
            {project.description.split("\n").map((line, index) => {
              const parts = line.split(
                /(\[b\].*?\[\/b\]|\[link:.*?\]\(.*?\))/g
              );

              return (
                <li key={index} className="text-pretty">
                  {parts.map((part, index) => {
                    if (part.startsWith("[b]") && part.endsWith("[/b]")) {
                      return (
                        <strong key={index} className="text-white">
                          {part.slice(3, -4)}{" "}
                        </strong>
                      );
                    }

                    if (part.startsWith("[link:") && part.includes("](")) {
                      const text = part.slice(6, part.indexOf("]("));
                      const url = part.slice(part.indexOf("](") + 2, -1);
                      return (
                        <a
                          key={index}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline after:content-['_↗'] font-medium"
                        >
                          {text}
                        </a>
                      );
                    }
                    return part; // Return the plain text part
                  })}
                  <br />
                </li>
              );
            })}
          </ol>
        </TabsContent>
        {project.video && (
          <TabsContent
            value="video"
            className="bg-black/60 rounded-md p-4 border border-primary/60 space-y-4"
          >
            <div className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg border border-white/10">
              <iframe
                className="flex w-full h-full"
                src={project.video}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </TabsContent>
        )}
      </Tabs>

      {relatedProjects.length > 0 && (
        <div className="mt-16 pt-8 border-t border-white/10 pb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Related projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((p) => {
              const isMobileApp =
                p?.type === "app" && p?.images?.[0]?.includes("frame");
              return (
                <Link key={p.id} href={`/projects/${p.id}`} className="group">
                  <div className="relative aspect-video overflow-hidden rounded-lg mb-2 bg-white">
                    {p.images && p.images[0] && (
                      <>
                        <Image
                          src={p.images[0] || "/placeholder.svg"}
                          alt={p.title}
                          width={600}
                          height={340}
                          className={`w-full h-full ${
                            isMobileApp ? "object-contain" : "object-cover"
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </>
                    )}
                  </div>
                  <h3 className="font-medium group-hover:text-primary/80 transition-colors text-white">
                    {p.title}
                  </h3>
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
