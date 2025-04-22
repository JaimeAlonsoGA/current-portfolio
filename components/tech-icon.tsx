"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons/lib";

interface TechIconProps {
  name: string;
  Icon: IconType;
}

export function TechIcon({ name, Icon }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-2 group"
    >
      <div className="text-white relative p-4 backdrop-blur-sm group-hover:backdrop-blur-xl rounded-xl shadow-sm border flex items-center justify-center hover:border-primary/50 transition-colors">
        <Icon size={32} />
      </div>
      <span className="text-sm text-muted-foreground text-white/70">
        {name}
      </span>
    </motion.div>
  );
}
