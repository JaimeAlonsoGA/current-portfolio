"use client";

import { text } from "@/data/text";
import { techs } from "@/data/techs";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

import { motion } from "framer-motion";
import { SeeMore } from "./seeMore";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = text.current.description;
  const typingSpeed = 30;
  const initialDelay = 2000;

  useEffect(() => {
    let index = -2;

    const startTyping = () => {
      const interval = setInterval(() => {
        if (index < fullText.length - 1) {
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
        } else {
          clearInterval(interval);
        }
      }, typingSpeed);
    };

    const timeout = setTimeout(startTyping, initialDelay);

    return () => {
      clearTimeout(timeout);
    };
  }, [fullText]);

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

        <motion.pre
          className={cn(
            "tracking-wider mb-8 whitespace-pre-wrap bg-zinc-900 p-4 rounded-md text-left text-sm font-mono"
          )}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <code>
            {displayedText.split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  word.toLowerCase().includes("developing") ||
                  word.toLowerCase().includes("applications")
                    ? "text-blue-400" // Palabras clave importantes
                    : word.toLowerCase().includes("software") ||
                      word.toLowerCase().includes("solutions")
                    ? "text-green-400" // Palabras técnicas
                    : word.toLowerCase().includes("cutting-edge") ||
                      word.toLowerCase().includes("cross-platform")
                    ? "text-orange-400" // Strings (cadenas)
                    : "text-gray-300" // Texto general
                }
              >
                {word.replace("undefined", "") + " "}
              </span>
            ))}
            <motion.span
              className={cn("ml-1")}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              |
            </motion.span>
          </code>
        </motion.pre>

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
                "hover:bg-white/20 hover:scale-105 cursor-default hover:border hover:border-primary/60 hover:text-white/90"
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
          <SeeMore />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
