"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <motion.div
      className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg11.jpg')", // Ruta de la imagen en la carpeta public
      }}
      initial={{ backgroundPosition: "50% 50%" }}
      animate={{ backgroundPosition: ["50% 50%", "55% 45%", "50% 50%"] }}
      transition={{
        duration: 20, // Duración del ciclo completo
        repeat: Infinity, // Repetir indefinidamente
        ease: "easeInOut", // Suavizado
      }}
    />
  );
};

export default Background;
