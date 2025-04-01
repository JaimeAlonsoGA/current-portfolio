"use client";

import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.webp')",
      }}
      initial={{ backgroundPosition: "50% 50%" }}
      animate={{ backgroundPosition: ["50% 50%", "55% 45%", "50% 50%"] }}
      transition={{
        duration: 20,
        repeat: Infinity, 
        ease: "easeInOut",
      }}
    />
  );
};

export default Background;
