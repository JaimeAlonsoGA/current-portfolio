import { SiPreact, SiTsnode } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiGraphql } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiReactquery } from "react-icons/si";

export interface TechsInterface {
  id: string;
  name: string;
  icon: IconType;
  color: string;
}

export const techs: TechsInterface[] = [
  {
    id: "react",
    name: "React",
    icon: SiPreact,
    color: "#61DAFB", // Azul claro
  },
  {
    id: "nextjs",
    name: "Next",
    icon: SiNextdotjs,
    color: "#000000", // Negro
  },
  {
    id: "tailwindcss",
    name: "Tailwind",
    icon: RiTailwindCssFill,
    color: "#38BDF8", // Azul claro
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6", // Azul
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: SiGraphql,
    color: "#E535AB", // Rosa
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: IoLogoFirebase,
    color: "#FFCA28", // Amarillo
  },
  {
    id: "figma",
    name: "Figma",
    icon: CgFigma,
    color: "#F24E1E", // Naranja
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E", // Amarillo
  },
  {
    id: "react native",
    name: "React Native",
    icon: TbBrandReactNative,
    color: "#61DAFB", // Azul claro (igual que React)
  },
  {
    id: "expo",
    name: "Expo",
    icon: SiExpo,
    color: "#000020", // Azul oscuro
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "#336791", // Azul
  },
  {
    id: "tanstack query",
    name: "Tanstack Query",
    icon: SiReactquery,
    color: "#FF4154", // Rojo
  },
  {
    id: "node",
    name: "Node",
    icon: SiTsnode,
    color: "#339933", // Verde
  },
];
