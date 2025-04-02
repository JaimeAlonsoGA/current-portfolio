"use client";

import { text } from "@/data/text";
import Title from "./ui/title";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(text.current.name);
    setDescription(text.current.description);
  }, []);

  if (!name || !description) return null;

  return (
    <div className="h-1/2 flex flex-col justify-end items-center w-full">
      <div className="text-white p-4 rounded-full backdrop-blur-2xl flex flex-col items-center justify-between">
        <Title title={name} />
        <p className="text-sm sm:text-left tracking-widest mb-12">
          {description}
        </p>
        <Link
          href="/about"
          className="text-xs font-ligt text-blue-400 hover:underline underline-offset-2 after:content-['_↗']"
        >
          About
        </Link>
        <a
          href="mailto:alonsog.jaime@gmail.com"
          className="text-xs font-light text-blue-400 hover:underline underline-offset-2 after:content-['_↗']"
        >
          alonsog.jaime@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Hero;
