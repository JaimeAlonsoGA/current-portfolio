"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Background = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="absolute inset-0 -z-10 w-full bg-cover bg-center min-h-screen">
        <Image
          src="/bg.webp"
          alt="Background"
          layout="fill"
          objectFit="cover"
          fill
          priority
        />
      </div>
      {isMounted && (
        <motion.div
          className="absolute inset-0 -z-10 w-full bg-cover bg-center min-h-screen"
          style={{
            backgroundImage: "url('/bg.webp') no repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ backgroundPosition: "50% 50%" }}
          animate={{ backgroundPosition: ["50% 50%", "55% 45%", "50% 50%"] }}
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