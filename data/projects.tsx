export interface ProjectProps {
  project: {
    id: string;
    title: string;
    overview: string;
    description: string;
    tags: string[];
    logo?: string;
    link?: {
      url: string;
      label: string;
    }[];
    type: string;
    images?: string[]; //image[0] is the main image
    video?: string;
    highlight?: boolean;
  };
}

export const projects = [
  {
    id: "mirto",
    title: "Mirto",
    overview:
      "Designed and developed a mobile app for MIRTO® with a complete push notification system.",
    description:
      "[b]The MIRTO Official App[/b] is a luxury fashion retail application designed to enhance the shopping experience of the popular Madrid luxury brand MIRTO. It was commissioned by [b]CREACIONES MIRTO S.A.U[/b] as an extension of its online Shopify store, [link:mirto.com](https://mirto.com).\n I was responsible for the complete design, development, and publication of the app, including the backend infrastructure that securely stores essential data for its proper functionality.\n One of the project's key highlights is the sophisticated push notification system, which integrates multiple services such as [b]Firestore, Firebase Cloud Functions, and Cloud Scheduler[/b]. Additionally, a private external notification management app was developed for MIRTO employees, allowing them to schedule and send notifications to all mobile devices with the app installed.\n The [b]MIRTO app[/b] is fully optimized for both [b]iOS and Android[/b], ensuring a seamless experience across platforms. \n This project was developed as a corporate initiative, and the experience gained throughout its development was instrumental in deepening my expertise in [b]Firebase, Expo, React Native, and software architecture[/b].",
    tags: [
      "typescript",
      "react native",
      "expo",
      "javascript",
      "tailwindcss",
      "firebase",
    ],
    link: [
      {
        url: "https://play.google.com/store/apps/details?id=com.mirto.shop&hl=es",
        label: "Play Store",
      },
      {
        url: "https://mirto.com",
        label: "App Store",
      },
    ],
    images: [
      "/images/mirto/frame1.webp",
      "/images/mirto/frame2.webp",
      "/images/mirto/frame3.webp",
    ],
    type: "app",
    highlight: true,
  },
  {
    id: "400",
    title: "Internal Management System",
    overview:
      "Designed and developed a custom private web system from scratch to efficiently manage and administer internal resources for CREACIONES MIRTO, S.A.",
    description:
      "Alchimix is a mobile application currently published on the Play Store. It was a self-initiated project designed to solidify my knowledge of React Native, Expo, and the end-to-end app development lifecycle, including testing, deployment, and publication. \n I developed the app entirely on my own within a short time frame, as its primary purpose was to be a birthday gift for a close friend. Throughout the development process, I encountered numerous challenges, which I overcame through persistence and a strong motivation to see the project through to completion. \n Alchimix allows users to create a pantry, categorize ingredients, and later use them to craft cocktails, which are stored in the app as easy-to-follow recipes. The interface is intuitive, and since its launch in 2023, continuous updates—driven by user feedback—have significantly enhanced its functionality. \n Despite being developed with limited resources, Alchimix remains a solid and well-structured application. It is still in testing and continues to receive core updates to refine the user experience.",
    tags: [
      "react",
      "typescript",
      "node",
      "tailwindcss",
      "tanstack query",
      "figma",
    ],
    images: [
      "/images/400/card1.png",
    ],
    type: "app",
    highlight: true,
  },
  {
    id: "shopify",
    title: "Shopify Product Uploader",
    overview:
      "Developed a program to upload, translate, migrate, and synchronize product listings and stock on Shopify.",
    description:
      "Alchimix is a mobile application currently published on the Play Store. It was a self-initiated project designed to solidify my knowledge of React Native, Expo, and the end-to-end app development lifecycle, including testing, deployment, and publication. \n I developed the app entirely on my own within a short time frame, as its primary purpose was to be a birthday gift for a close friend. Throughout the development process, I encountered numerous challenges, which I overcame through persistence and a strong motivation to see the project through to completion. \n Alchimix allows users to create a pantry, categorize ingredients, and later use them to craft cocktails, which are stored in the app as easy-to-follow recipes. The interface is intuitive, and since its launch in 2023, continuous updates—driven by user feedback—have significantly enhanced its functionality. \n Despite being developed with limited resources, Alchimix remains a solid and well-structured application. It is still in testing and continues to receive core updates to refine the user experience.",
    tags: ["typescript", "node"],
    type: "program",
    highlight: true,
  },
  {
    id: "alchimix",
    title: "Alchimix",
    overview:
      "designed and developed a mobile app to create custom cocktails with no limits.",
    description:
      "Alchimix is a [b]mobile application[/b] currently published on the [link:Google Play](https://play.google.com/store/apps/details?id=com.sonicode.coctelapp&pcampaignid=web_share). It was a [b]self-initiated[/b] project designed to solidify my knowledge of [b]React Native,[/b] Expo, and the end-to-end app [b]development lifecycle,[/b] including testing, deployment, and publication. \n I developed the app [b]entirely on my own[/b] within a [b]short time frame,[/b] as its primary purpose was to be a birthday gift for a close friend. Throughout the development process, I encountered [b]numerous challenges,[/b] which I overcame through [b]persistence[/b] and a [b]strong motivation[/b] to see the project through to completion. \n Alchimix allows users to create a pantry, categorize ingredients, and later use them to [b]craft cocktails,[/b] which are stored in the app as [b]easy-to-follow recipes.[/b] The interface is intuitive, and since its launch in 2023, [b]continuous updates—driven by user feedback[/b]—have significantly enhanced its functionality. \n Despite being developed with [b]limited resources,[/b] Alchimix remains a solid and [b]well-structured application.[/b] It is still in [b]testing[/b] and continues to receive [b]core updates[/b] to refine the user experience. The version control is managed with [link:GitHub](https://github.com/JaimeAlonsoGA/alchimix). \n Alchimix was built using [b]JavaScript with Node.js.[/b] Cocktail recipes are stored using the [b]operating system’s native storage,[/b] ensuring [b]seamless performance and accessibility.[/b] To enhance the visual experience, a [b]professional designer[/b] was hired to create the app’s artwork and icons.",
    tags: ["react native", "javascript", "expo", "figma"],
    logo: "/images/alchimix/logo.webp",
    link: [
      {
        url: "https://play.google.com/store/apps/details?id=com.sonicode.coctelapp&pcampaignid=web_share",
        label: "Play Store",
      },
      {
        url: "https://github.com/JaimeAlonsoGA/alchimix",
        label: "GitHub",
      },
    ],
    type: "app",
    images: [
      "/images/alchimix/frame1.webp",
      "/images/alchimix/frame2.webp",
      "/images/alchimix/frame3.webp",
      "/images/alchimix/figma1.webp",
      "/images/alchimix/figma2.webp",
    ],
    video: "https://youtube.com/embed/tVVbru0DCGo?feature=share",
    highlight: true,
  },
  {
    id: "visuvisu",
    title: "Visu? Visu!",
    overview:
      "Designed and developed a mobile app hand-by-hand with a biologist to help study the visu exam",
    description: "",
    tags: ["javascript", "react native", "expo", "figma"],
    link: [
      {
        url: "https://github.com/JaimeAlonsoGA/bio-visu",
        label: "GitHub",
      },
    ],
    type: "app",
  },
  {
    id: "vivilife",
    title: "Vivilife Landing Page",
    overview:
      "developed the landing page for Vivilife, an app for coaches and communities",
    description: "",
    tags: ["react", "tailwindcss"],
    link: [
      {
        url: "https://vivilife-web.web.app/",
        label: "Website",
      },
      {
        url: "https://github.com/JaimeAlonsoGA/vivilife_web",
        label: "GitHub",
      },
    ],
    type: "web",
  },
  {
    id: "thiswebsite",
    title: "This website!",
    overview: "No description needed, right?",
    description: "",
    tags: ["typescript", "nextjs", "tailwindcss", "vercel"],
    link: [
      {
        url: "https://github.com/JaimeAlonsoGA/multi-portfolio",
        label: "GitHub",
      },
    ],
    type: "web",
  },
  {
    id: "musickeyboard",
    title: "Musickeyboard.io",
    overview: "A simple music keyboard to play with",
    description: "",
    tags: ["react", "javascript", "tailwindcss"],
    link: [
      {
        url: "https://musickeyboard.web.app/",
        label: "Website",
      },
      {
        url: "https://github.com/JaimeAlonsoGA/musickeyboard_web",
        label: "GitHub",
      },
    ],
    type: "app",
  },
  {
    id: "jaime360",
    title: "Jaime360",
    overview: "My old portfolio, a bit too much creative",
    description: "",
    tags: ["react", "javascript", "tailwindcss", "firebase"],
    link: [
      {
        url: "https://jaime360.web.app/",
        label: "Website",
      },
      {
        url: "https://github.com/JaimeAlonsoGA/portfolio",
        label: "GitHub",
      },
    ],
    type: "web",
  },
  {
    id: "elboske",
    title: "El Boske, mixing studio",
    overview: "Designed and developed a website for a music studio in Madrid",
    description: "",
    tags: ["react", "javascript", "tailwindcss", "firebase"],
    link: [
      {
        url: "https://elboskestudio.com/",
        label: "Website",
      },
      {
        url: "https://github.com/JaimeAlonsoGA/studio_web",
        label: "GitHub",
      },
    ],
    type: "web",
  },
];
