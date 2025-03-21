import { PiGooglePlayLogoLight } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";

export interface ProjectProps {
  project: {
    id: string;
    title: string;
    overview: string;
    description: string;
    tags: string[];
    logo?: string;
    github?: string;
    link?: {
      url: string;
      icon: React.ReactNode;
    };
    seeMore?: boolean;
    type: string;
    images?: string[];
  };
}

const appIcon = <PiGooglePlayLogoLight size={16} />;
const webIcon = <TbWorld size={16} />;

export const projects = [
  {
    id: "mirto",
    title: "MIRTO",
    overview:
      "Designed and developed end-to-end software solutions for CREACIONES MIRTO, S.A.U. during my 9-month internship as a fullstack developer",
    description: "",
    tags: [
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
    type: "web",
  },
  {
    id: "alchimix",
    title: "Alchimix",
    overview:
      "Mobile app designed and developed to create custom cocktails with no limits",
    description:
      "Alchimix is a mobile application currently published on the Play Store. It was a self-initiated project designed to solidify my knowledge of React Native, Expo, and the end-to-end app development lifecycle, including testing, deployment, and publication. \n I developed the app entirely on my own within a short time frame, as its primary purpose was to be a birthday gift for a close friend. Throughout the development process, I encountered numerous challenges, which I overcame through persistence and a strong motivation to see the project through to completion. \n Alchimix allows users to create a pantry, categorize ingredients, and later use them to craft cocktails, which are stored in the app as easy-to-follow recipes. The interface is intuitive, and since its launch in 2023, continuous updates—driven by user feedback—have significantly enhanced its functionality. \n Despite being developed with limited resources, Alchimix remains a solid and well-structured application. It is still in testing and continues to receive core updates to refine the user experience.",
    tags: ["react native", "javascript", "expo", "figma"],
    logo: "https://play-lh.googleusercontent.com/C5lUALvi9BQ9aaeeXB1Tbt5CPXvpOEj5Ciykt66MxLfY5tl9vxalE9elu8dlcF8zy7A=w240-h480-rw",
    github: "https://github.com/JaimeAlonsoGA/alchimix",
    link: {
      url: "https://play.google.com/store/apps/details?id=com.sonicode.coctelapp&pcampaignid=web_share",
      icon: appIcon,
    },
    seeMore: true,
    type: "app",
    images: [
      "https://play-lh.googleusercontent.com/-E4lMy06-xWYcJuBmfBhlwykmJdjh8M2Eki0V9ZZf9nlwG8vHqeiLKJ-Hy4DC10Dt_w=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/btlnWh6IBfDiDkr3No9bQx9nCrEEDB3FFRrPgTywE4KDpHi3Mlb5HlJRy8YONUPjlg=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/65Jcth3oefE-JNZ--B7IrL4IZ9WDW02BxlF1ies4SCQC1z0ommPuvEO8UO5m8peYYiYT=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/-E4lMy06-xWYcJuBmfBhlwykmJdjh8M2Eki0V9ZZf9nlwG8vHqeiLKJ-Hy4DC10Dt_w=w526-h296-rw",
    ],
  },
  {
    id: "visuvisu",
    title: "Visu? Visu!",
    overview:
      "Mobile app designed and developed hand-by-hand with a biologist to help study the visu exam",
    description: "",
    tags: ["javascript", "react native", "expo", "figma"],
    github: "https://github.com/JaimeAlonsoGA/bio-visu",
    seeMore: true,
    type: "app",
  },
  {
    id: "vivilife",
    title: "Vivilife Landing Page",
    overview:
      "Landing page developed for Vivilife, an app for coaches and communities",
    description: "",
    tags: ["react", "tailwindcss"],
    github: "https://github.com/JaimeAlonsoGA/vivilife_web",
    link: {
      url: "https://vivilife-web.web.app/",
      icon: webIcon,
    },
    type: "web",
  },
  {
    id: "thiswebsite",
    title: "This website!",
    overview: "Yes, I wanted to make my own website from scratch",
    description: "",
    tags: ["typescript", "nextjs", "tailwindcss", "vercel"],
    github: "https://github.com/JaimeAlonsoGA/multi-portfolio",
    type: "web",
  },
  {
    id: "musickeyboard",
    title: "Musickeyboard.io",
    overview: "My attempt to make a web app to play music with your keyboard",
    description: "",
    tags: ["react", "javascript", "tailwindcss"],
    github: "https://github.com/JaimeAlonsoGA/musickeyboard_web",
    link: {
      url: "https://musickeyboard.web.app/",
      icon: webIcon,
    },
    type: "web",
  },
  {
    id: "jaime360",
    title: "Jaime360",
    overview: "My old deprecated portfolio, also made from scratch",
    description: "",
    tags: ["react", "javascript", "tailwindcss", "firebase"],
    github: "https://github.com/JaimeAlonsoGA/portfolio",
    link: {
      url: "https://jaime360.web.app/",
      icon: webIcon,
    },
    type: "web",
  },
  {
    id: "elboske",
    title: "El Boske, mixing studio",
    overview: "Website designed and developed for a music studio in Madrid",
    description: "",
    tags: ["react", "javascript", "tailwindcss", "firebase"],
    github: "https://github.com/JaimeAlonsoGA/studio_web",
    link: {
      url: "https://elboskestudio.com/",
      icon: webIcon,
    },
    type: "web",
  },
];
