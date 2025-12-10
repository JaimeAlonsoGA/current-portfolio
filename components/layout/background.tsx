"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import background from "@/public/bg.webp";

const Background = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* Static background image - loads first */}
      <div className="fixed inset-0 -z-20 w-full h-screen">
        <Image
          src={background}
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
      </div>

      {/* Animated overlay - loads after mount */}
      {isMounted && (
        <motion.div
          className="fixed inset-0 -z-10 w-full h-screen"
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(0.25)",
          }}
          initial={{ backgroundPosition: "50% 50%" }}
          animate={{
            backgroundPosition: ["50% 50%", "55% 45%", "50% 50%"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </>
  );
};

export default Background;