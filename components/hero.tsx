import { text } from "@/data/text";
import Title from "./ui/title";

const Hero = () => {
  const description = text.current.description;
  return (
    <div className="h-1/2 flex flex-col justify-end items-center w-full">
      <div className="text-white p-4 rounded-full backdrop-blur-2xl flex flex-col items-center justify-between">
        <Title title={text.current.name} />
        <p className="text-sm sm:text-left tracking-widest mb-12">
          {description}
        </p>
        <a className="text-xs font-ligt text-blue-400 hover:underline underline-offset-2 after:content-['_↗']">alonsog.jaime@gmail.com</a>
      </div>
    </div>
  );
};

export default Hero;
