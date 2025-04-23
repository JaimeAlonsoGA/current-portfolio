"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons/lib";

interface TechIconProps {
  name: string;
  Icon: IconType;
  color: string;
}

export function TechIcon({ name, Icon, color }: TechIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-2 group"
    >
      <div
        className="relative p-4 border-white/20 rounded-lg bg-white/20 shadow-sm border flex items-center justify-center group-hover:border-primary/50 transition-colors"
        style={{ color }} // Aplicamos el color al ícono
      >
        <div className="bg-white rounded-md p-1">
          <Icon size={32} />
        </div>
      </div>
      <span className="text-sm text-muted-foreground text-white/70">
        {name}
      </span>
    </motion.div>
  );
}
