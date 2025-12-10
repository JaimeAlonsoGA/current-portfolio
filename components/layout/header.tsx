"use client";

import Arrow from "./arrow";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false);
  const isHome = pathname === "/";
  const isProject = pathname.includes("/projects/");

  useEffect(() => {
    setIsMounted(true);
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
      href: "https://github.com/jaime360",
      icon: FiGithub,
    },
  ];

  if (!isMounted) return null;
  return (
    <header
      className={cn(
        "fixed backdrop-blur-lg z-10 w-full top-0",
        "flex flex-row justify-around sm:justify-between items-center px-4 sm:px-8 py-4",
        "font-[family-name:var(--font-geist-sans)]",
        "bg-black/10 border-b border-white/10 shadow-sm gap-4"
      )}
    >
      {isHome && <div className="flex flex-row gap-2 items-center">
        {/* <Image src={logo} alt="Logo" width={40} height={40} className="rounded-full" /> */}
        <h1 className={cn(
          "text-white/90 font-bold flex items-center gap-2",
          "hover:text-white",
          "transition-all duration-300 text-sm"
        )}>
          Fullstack Software Developer
        </h1>
      </div>
      }
      <Arrow isHome={isHome} isProject={isProject} />
      <nav className="flex items-center gap-4 sm:gap-6">
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
      </nav>
    </header>
  );
};

export default Header;
