import Arrow from "./layout/arrow";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const navLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/jaime360/",
      icon: FiLinkedin
    },
    {
      name: "Email",
      href: "mailto:alonsog.jaime@gmail.com",
      icon: FiMail
    },
    {
      name: "GitHub",
      href: "https://github.com/jaime360",
      icon: FiGithub
    },
  ];

  return (
    <header
      className={cn(
        "fixed backdrop-blur-lg z-10 w-full top-0",
        "flex flex-row justify-between items-center px-4 sm:px-8 py-4",
        "font-[family-name:var(--font-geist-sans)]",
        "bg-black/10 border-b border-white/10 shadow-sm"
      )}
    >
      <Arrow />
      
      <nav className="flex items-center gap-6">
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
            <span className="hidden sm:inline">{link.name}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
