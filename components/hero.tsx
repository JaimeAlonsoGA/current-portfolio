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
                "hover:bg-white/20 hover:scale-105 cursor-pointer hover:border hover:border-primary/60 hover:text-white/90"
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
          {/* <a
            href="mailto:alonsog.jaime@gmail.com"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none 
            focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none 
            [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-zinc-300 bg-zinc-900 text-zinc-50 shadow 
            dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-8 rounded-md px-3 text-xs border-white/10 bg-white/20 hover:bg-white/10"
          >
            Contact
          </a> */}
          <SeeMore />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
