import { PiGooglePlayLogoLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

export interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    link?: {
      url: string;
      icon: React.ReactNode;
    };
    seeMore?: boolean;
  }
  i: number;
}

const appIcon = <PiGooglePlayLogoLight size={16} />;
const webIcon = <TbWorld size={16} />;

export const projects = [
  {
    title: "MIRTO Internship",
    description:
      "Designed and developed end-to-end software solutions for CREACIONES MIRTO, S.A.U. during my 9-month internship as a fullstack developer",
    tags: [
      "fullstack",
      "react",
      "typescript",
      "react native",
      "expo",
      "node",
      "graphql",
      "tailwindcss",
      "firebase",
      "figma",
    ],
    seeMore: true,
  },
  {
    title: "Alchimix",
    description:
      "Mobile app designed and developed to create custom cocktails with no limits",
    tags: ["react native", "javascript", "expo", "figma"],
    github: "https://github.com/JaimeAlonsoGA/alchimix",
    link: {
      url: "https://play.google.com/store/apps/details?id=com.sonicode.coctelapp&pcampaignid=web_share",
      icon: appIcon,
    },
    seeMore: true,
  },
  {
    title: "Visu? Visu!",
    description:
      "Mobile app designed and developed hand-by-hand with a biologist to help study the visu exam",
    tags: ["react native", "javascript", "expo", "figma"],
    github: "https://github.com/JaimeAlonsoGA/bio-visu",
    seeMore: true,
  },
  {
    title: "Vivilife Landing Page",
    description:
      "Landing page developed for Vivilife, an app for coaches and communities",
    tags: ["react", "tailwindcss"],
    github: "https://github.com/JaimeAlonsoGA/vivilife_web",
    link: {
      url: "https://vivilife-web.web.app/",
      icon: webIcon,
    },
  },
  {
    title: "This website!",
    description: "Yes, I wanted to make my own website from scratch",
    tags: ["typescript", "nextjs", "tailwindcss", "vercel"],
    github: "https://github.com/JaimeAlonsoGA/multi-portfolio",
  },
  {
    title: "Musickeyboard.io",
    description:
      "My attempt to make a web app to play music with your keyboard",
    tags: ["react", "javascript", "tailwindcss"],
    github: "https://github.com/JaimeAlonsoGA/musickeyboard_web",
    link: {
      url: "https://musickeyboard.web.app/",
      icon: webIcon,
    },
  },
  {
    title: "Jaime360",
    description: "My old deprecated portfolio, also made from scratch",
    tags: ["react", "javascript", "tailwindcss", "firebase"],
    github: "https://github.com/JaimeAlonsoGA/portfolio",
    link: {
      url: "https://jaime360.web.app/",
      icon: webIcon,
    },
  },
  {
    title: "El Boske, mixing studio",
    description: "Website designed and developed for a music studio in Madrid",
    tags: ["react", "javascript", "tailwindcss", "firebase"],
    github: "https://github.com/JaimeAlonsoGA/studio_web",
    link: {
      url: "https://elboskestudio.com/",
      icon: webIcon,
    },
  },
];
