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
import { SiVercel } from "react-icons/si";
import { SiReactquery } from "react-icons/si";

export interface TechsInterface {
  id: string;
  name: string;
  icon: IconType;
}

export const techs: TechsInterface[] = [
  {
    id: "react",
    name: "React",
    icon: SiPreact,
  },
  {
    id: "nextjs",
    name: "Next",
    icon: SiNextdotjs,
  },
  {
    id: "tailwindcss",
    name: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    id: "graphql",
    name: "GraphQL",
    icon: SiGraphql,
  },
  {
    id: "firebase",
    name: "Firebase",
    icon: IoLogoFirebase,
  },
  {
    id: "figma",
    name: "Figma",
    icon: CgFigma,
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    id: "react native",
    name: "React Native",
    icon: TbBrandReactNative,
  },
  {
    id: "expo",
    name: "Expo",
    icon: SiExpo,
  },
  {
    id: "vercel",
    name: "Vercel",
    icon: SiVercel,
  },
  {
    id: "tanstack query",
    name: "Tanstack Query",
    icon: SiReactquery,
  },
  {
    id: "node",
    name: "Node",
    icon: SiTsnode,
  }
];
