"use client";

import Title from "@/components/ui/title";
import { text } from "@/data/text";
import { useEffect, useState } from "react";

export default function About() {
  const [writer, setWriter] = useState("");
  const about = text.about.text;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < about.length) {
        setWriter((prev) => prev + about[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center gap-8 backdrop-blur-xl rounded-full p-4 text-white">
        <Title title="About" />
      </div>
      <div className="mt-4 text-white text-sm sm:text-left tracking-widest">
        {writer}
      </div>
    </div>
  );
}
