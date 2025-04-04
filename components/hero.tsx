import { text } from "@/data/text";
import Title from "./ui/title";

const Hero = () => {
  return (
    <div className="h-1/2 flex flex-col justify-end items-center w-full">
      <div className="text-white p-4 rounded-full backdrop-blur-2xl flex flex-col items-center justify-between">
        <Title title={text.current.name} className="mt-4" />
        <p className="text-sm text-center tracking-widest mb-4 md:mb-10">
          {text.current.description}
        </p>
        {/* <Link
          href="/about"
          className="text-xs font-ligt text-blue-400 hover:underline underline-offset-2 after:content-['_↗']"
        >
          About
        </Link> */}
        <a
          href="mailto:alonsog.jaime@gmail.com"
          className="text-xs font-light text-blue-400 hover:underline underline-offset-2 after:content-['_↗'] mb-4 md:mb-0"
        >
          alonsog.jaime@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Hero;
