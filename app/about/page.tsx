"use client";

import Title from "@/components/ui/title";
import { text } from "@/data/text";
import { useEffect, useState } from "react";

export default function About() {
  const [displayedText, setDisplayedText] = useState("");
  const about = text.about.text;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < about.length) {
        setDisplayedText((prev) => prev + about[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center gap-8 backdrop-blur-xl rounded-full p-4 text-white">
        <Title title="About" />
      </div>
      <div className="mt-4 text-white text-sm sm:text-left tracking-widest">
        {displayedText}
      </div>
    </div>
  );
}

const tags = [
  "Software",
  "Applications",
  "Cross-platform",
  "Sound Design",
  "Music Production",
  "Interactive Media",
];

const skillset = [
  {
    field: "Software",
    skills: [
      "Develope end-to-end cross-platform apps —web, phone, desktop",
      "Design modern, responsive and user-friendly apps",
      "Create software solutions usign modern flows",
    ],
    keywords: [
      "Full-stack",
      "Cross-platform apps",
      "UX",
      "Solutions",
      "Development",
    ],
    about: "De-coding the future with the lastest techs",
  },
  {
    field: "Audio",
    skills: [
      "Compose, record, mix and master multi-purpose music",
      "Design sound effects and atmospheres",
      "Implement dynamic audio into interactive media",
    ],
    keywords: [
      "Sound design",
      "Video games",
      "Music production",
      "Sound engineering",
    ],
    about: "adios",
  },
] as Skillset[];

export interface Skillset {
  field: string;
  skills: string[];
  keywords: string[];
  about: string;
}
