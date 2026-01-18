import { SiCplusplus, SiHuggingface, SiPostman, SiPreact, SiStripe, SiTsnode, SiWagmi, SiWeb3Dotjs } from "react-icons/si";
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
import { SiSupabase } from "react-icons/si";
import { SiPython } from "react-icons/si";

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
    id: "supabase",
    name: "Supabase",
    icon: SiSupabase,
    color: "#3ECF8E", // Verde Oscuro
  },
  {
    id: "python",
    name: "Python",
    icon: SiPython,
    color: "#3776AB", // Azul
  },
  {
    id: "tanstack-query",
    name: "Tanstack Query",
    icon: SiReactquery,
    color: "#FF4154", // Rojo
  },
  {
    id: "web3",
    name: "Web3",
    icon: SiWeb3Dotjs,
    color: "#F16822", // Naranja
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
    id: "stripe",
    name: "Stripe",
    icon: SiStripe,
    color: "#FFCA28", // Amarillo
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
    id: "postman",
    name: "Postman",
    icon: SiPostman,
    color: "#FF6C00", // Naranja
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
    id: "wagmi",
    name: "Wagmi",
    icon: SiWagmi,
    color: "#FF4154", // Rojo
  },
  {
    id: "c++",
    name: "C++",
    icon: SiCplusplus,
    color: "#00599C", // Azul
  },
  // {
  //   id: "huggingface",
  //   name: "Hugging Face",
  //   icon: SiHuggingface,
  //   color: "#F7DF1E", // Amarillo
  // },
  {
    id: "node",
    name: "Node",
    icon: SiTsnode,
    color: "#339933", // Verde
  },
];
