"use client";

import { usePathname } from "next/navigation";
import Blanket from "./blanket";
import { cn } from "@/lib/utils";

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "relative w-full font-[family-name:var(--font-geist-sans)]",
        pathname !== "/" && "hidden"
      )}
    >
      <Blanket />
      <div className="absolute bottom-0 w-full flex justify-center items-center py-2 backdrop-blur-sm bg-black/10">
        <p className="text-white/70 text-xs">
          © {currentYear} Jaime Alonso. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
