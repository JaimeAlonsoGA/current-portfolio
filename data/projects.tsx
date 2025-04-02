import { image } from "@heroui/theme";

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
      "Designed and developed a phone app for MIRTO® with a complete push notification system.",
    description:
      "[b]The MIRTO Official App[/b] is a [b]luxury fashion retail application.[/b] It was commissioned by [b]MIRTO Corporation[/b] as an extension of its online Shopify store, [link:mirto.com](https://mirto.com).\n[b]I was responsible for the complete design, development, and publication of the app,[/b] including the [b]backend[/b] and the [b]push notification system.[/b]\nIt integrates multiple services such as [b]Firestore, Firebase Cloud Functions, and Cloud Scheduler.[/b] Additionally, a [b]private external notification management app[/b] was developed for MIRTO employees, allowing them to [b]schedule and send notifications[/b] to all devices.\n\n✅ The app is [b]fully optimized[/b] for both [b]iOS and Android,[/b] ensuring a seamless experience across both operative systems.",
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
      "Designed and developed a custom private web system from scratch to efficiently manage and administer internal resources for MIRTO Corporation.",
    description:
      "Internal Management Web System, designed and developed by Jaime Alonso for [link:MIRTO Corporation](https://mirto.com) \nIts main functions are: \n• Review [b]active inventory[/b], [b]filter[/b] and [b]export to PDF[/b] \n• [b]Manage users and roles[/b] \n• Control [b]production lines[/b] and [b]new orders[/b] \n• Create [b]packing lists[/b] (delivery notes) \n• Check phone [b]app analytics[/b] \n• Plan and [b]send push notifications[/b] to the phone app \n• View [b]fabric orders[/b] and [b]technical sheets[/b] \n• Visualize [b]technical photography gallery[/b]. \n\nThe departments that benefited from the creation of such application were: \n✅ Human Resources \n✅ Marketing \n✅ Production \n✅ Design \n✅ Warehouse \n✅ Company Administrators",
    tags: [
      "react",
      "typescript",
      "node",
      "tailwindcss",
      "tanstack query",
      "figma",
    ],
    images: [
      "/images/400/card1.webp",
      "/images/400/card2.webp",
      "/images/400/card3.webp",
      "/images/400/card4.webp",
      "/images/400/card5.webp",
      "/images/400/card6.webp",
      "/images/400/card7.webp",
      "/images/400/card8.webp",
      "/images/400/card9.webp",
    ],
    video: "https://www.youtube.com/embed/FYXvtEI2agk?si=VsCWdzB4bo7s97AU",
    type: "app",
    highlight: true,
  },
  {
    id: "shopify",
    title: "Shopify Product Uploader",
    overview:
      "Developed a program to upload, translate, migrate, and synchronize product listings and stock on Shopify.",
    description:
      "Retailers working with Shopify have often found uploading and synchronizing product listings between stores a painful task. \n\n✅ Using [b]GraphQL[/b] and the [b]Shopify API,[/b] I created this program that [b]saves time[/b] by [b]automating[/b] the synchronization given an SVG or JSON file. \n\n Actually, this program belongs to [b]MIRTO Corporation[/b]",
    tags: ["typescript", "node"],
    type: "program",
    highlight: true,
  },
  {
    id: "alchimix",
    title: "Alchimix",
    overview:
      "designed and developed a phone app to create custom cocktails with no limits.",
    description:
      "Alchimix is a [b]phone app[/b] currently published on the [link:Google Play](https://play.google.com/store/apps/details?id=com.sonicode.coctelapp&pcampaignid=web_share).\nIts purpose was to consolidate my knowledge of React Native, Expo, and the [b]end-to-end app development cycle,[/b] including [b]testing[/b] and [b]deployment.[/b] On top of that, the app was a [b]friend's birthday present.[/b]\n\n Alchimix allows users to: \n• create a [b]pantry[/b] \n• categorize [b]ingredients[/b] \n• craft [b]cocktails.[/b] \n• Read easy-to-follow [b]recipes[/b] \n\nThe interface is intuitive, and since its launch in 2023, [b]continuous updates—driven by user feedback[/b]—have significantly enhanced its functionality. \n Despite being developed with [b]limited resources,[/b] Alchimix remains a solid and [b]well-structured application.[/b] It is still in [b]testing[/b] and continues to receive [b]core updates[/b] to refine the user experience. The version control is managed with [link:GitHub](https://github.com/JaimeAlonsoGA/alchimix). \n Alchimix was built using [b]JavaScript with Node.js.[/b] Cocktail recipes are stored using the [b]operating system’s native storage,[/b] ensuring [b]seamless performance and accessibility.[/b] To enhance the visual experience, a [b]professional designer[/b] was hired to create the app’s artwork and icons.",
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
      "Designed and developed a phone app hand-by-hand with a biologist to help study the visu exam",
    description:
      "The Visu is a public exam that biologists take to qualify as teachers for public schools. The exam focuses on studying the Latin names of living organisms, with an emphasis on identifying and understanding different parts of those organisms.\n\nIt functions are: \n• [b]Simulate[/b] a [b]real Visu exam[/b] \n• [b]Search[/b] categorized [b]species[/b] \n• [b]Practice[/b] with [b]categories[/b] independantly \n• Display [b]various pictures[/b] of one specie \n\n✅ The app was developed in collaboration with a biologist.",
    tags: ["javascript", "react native", "expo", "figma"],
    link: [
      {
        url: "https://github.com/JaimeAlonsoGA/bio-visu",
        label: "GitHub",
      },
    ],
    images: [
      "/images/visu/frame1.webp",
      "/images/visu/frame2.webp",
      "/images/visu/frame3.webp",
    ],
    video: "https://youtube.com/embed/CGobMb4hzZc?feature=share",
    type: "app",
  },
  {
    id: "vivilife",
    title: "Vivilife Landing Page",
    overview:
      "developed the landing page for Vivilife, an app for coaches and communities",
    description:
      "Vivilife is a [b]project[/b] of [link:Klajdi Beqiraj](https://www.linkedin.com/in/klajdi-beqiraj-1998-leven/) and [link:Gonzalo Alonso](https://www.linkedin.com/in/galonsog/) dedicated to building a [b]dynamic space for coaches and communities[/b]. \n\n✅ The landing page was [b]successfully launched[/b] before the startup was [b]presented to inverstors.[/b]",
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
    images: [
      "/images/vivilife/card1.webp",
      "/images/vivilife/card2.webp",
      "/images/vivilife/card3.webp",
    ],
    type: "web",
  },
  {
    id: "musickeyboard",
    title: "Musickeyboard.io",
    overview: "A simple music keyboard to play with",
    description: "Summer is long and sometimes you just want to play the keys on your laptop keyboard to get some inspiration at night. \n\nThat is why I created musickeyboard.io, with some features: \n• Easy to use [b]keyboard web[/b]\n• [b]8 octaves[/b], just like a [b]real piano[/b] \n• A lot of [b]customization[/b] options to get inspired \n• [b]Chord tracker[/b] \n\n ✅ Its sound is terrible, I know...but it is still cool!",
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
    images: [
      "/images/musickeyboard/card1.webp",
      "/images/musickeyboard/card2.webp",
      "/images/musickeyboard/card3.webp",
    ],
    type: "app",
  },
  {
    id: "jaime360",
    title: "Jaime360",
    overview: "My old portfolio, a bit too much creative",
    description: "When I started creating webs I had some experience with sound design and videogame audio so I created a portfolio to showcase both skills, software and audio. \n\n• This web is [b]deprecated[/b]\n\n✅ Creating it settled the foundations of my knowledge of [b]Firebase Hosting[/b]",
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
    images: [
      "/images/jaime360/card1.webp",
      "/images/jaime360/card2.webp",
      "/images/jaime360/card3.webp",
      "/images/jaime360/card4.webp",
    ],
    type: "web",
  },
  {
    id: "elboske",
    title: "Mixing studio website",
    overview: "Designed and developed a website for a music studio in Madrid",
    description: "El Boske Mixing Studio is my own music studio in Madrid, Spain. I wanted to create a website to present my work and the services of the studio. \n\n• The web is [b]fully responsive[/b] and [b]optimized for SEO.[/b] \n• It has a [b]mailing automated system[/b] \n\n ✅ The site fulfills its purpose.",
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
    images: [
      "/images/elboske/card1.webp",
      "/images/elboske/card2.webp",
      "/images/elboske/card3.webp",
    ],
    type: "web",
  },
];
