"use client";

import Arrow from "./arrow";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    setIsMounted(true);
    
    // Show header after 3 seconds
    const headerTimer = setTimeout(() => {
      setIsHeaderVisible(true);
    }, 3000);
    
    // Show content after 4 seconds
    const contentTimer = setTimeout(() => {
      setIsContentVisible(true);
    }, 4000);

    return () => {
      clearTimeout(headerTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  const navLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jaime360/",
      icon: FiLinkedin,
    },
    {
      name: "Email",
      href: "mailto:alonsog.jaime@gmail.com",
      icon: FiMail,
    },
    {
      name: "GitHub",
      href: "https://github.com/JaimeAlonsoGA",
      icon: FiGithub,
    },
  ];

  if (!isMounted) return null;
  return (
    <motion.header
      className={cn(
        "fixed backdrop-blur-lg z-50 w-full top-0",
        "flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-4",
        "font-[family-name:var(--font-geist-sans)]",
        "bg-black/10 border-b border-white/10 shadow-sm gap-4"
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: isHeaderVisible ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {isHome && (
        <motion.div
          className="flex flex-row gap-2 items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isContentVisible ? 1 : 0, x: isContentVisible ? 0 : -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" /> */}
          <h1 className={cn(
            "text-white/90 font-light flex items-center gap-2",
            "hover:text-white",
            "transition-all duration-300 text-sm"
          )}>
            Fullstack Software Developer
          </h1>
        </motion.div>
      )}
      <Arrow isHome={isHome} />
      <motion.nav
        className="flex items-center gap-4 sm:gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isContentVisible ? 1 : 0, x: isContentVisible ? 0 : 20 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <a
          className={cn(
            "text-white/90 font-light flex items-center gap-2",
            "hover:text-white hover:underline hover:underline-offset-4",
            "transition-all duration-300 text-sm"
          )}
          // href="/curriculum.pdf"
          // download="Curriculum_Jaime.pdf"
          aria-label="Descargar Curriculum"
        >
          <Link href="/cv" className="">Curriculum</Link>
        </a>
        {navLinks.map((link) => (
          <a
            key={link.name}
            className={cn(
              "text-white/90 font-light flex items-center gap-2",
              "hover:text-white hover:underline hover:underline-offset-4",
              "transition-all duration-300 text-sm"
            )}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={`Visitar ${link.name}`}
          >
            {/* <link.icon className="w-4 h-4" /> */}
            <span className="">{link.name}</span>
          </a>
        ))}
      </motion.nav>
    </motion.header>
  );
};

export default Header;
