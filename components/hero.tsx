"use client";

import { text } from "@/data/text";
import { techs } from "@/data/techs";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

import { motion } from "framer-motion";
import { SeeMore } from "./seeMore";

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="text-white p-8 flex flex-col items-center justify-between max-w-4xl">
        <motion.h1
          className="text-6xl font-bold mb-4 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {text.current.name}
        </motion.h1>

        <motion.p
          className="text-center tracking-wider mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {text.current.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {techs.map((tech) => (
            <Badge
              key={tech.id}
              variant="secondary"
              className={cn(
                "flex items-center gap-2 px-4 py-2 transition-all",
                "hover:bg-white/20 hover:scale-105 cursor-pointer"
              )}
            >
              <tech.icon className="w-4 h-4" />
              <span className="text-xs">{tech.name}</span>
            </Badge>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-8 w-full justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <a
            href="mailto:alonsog.jaime@gmail.com"
            className="backdrop-blur-sm h-9 px-4 py-2 text-sm font-medium text-blue-400 hover:text-blue-300 hover:underline underline-offset-4 transition-all rounded-md border border-blue-400/20 hover:border-blue-400/40"
          >
            Contact
          </a>
          <SeeMore />
        </motion.div>
      </div>
    </motion.div>
  );
};


export default Hero;
