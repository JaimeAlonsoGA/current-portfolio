import { text } from "@/data/text";
import Title from "./ui/title";
import { SeeMore } from "./seeMore";

const Hero = () => {
  return (
    <div className="h-1/2 flex flex-col justify-end items-center w-full">
      <div className="text-white p-4 rounded-lg flex flex-col items-center justify-between">
        <Title title={text.current.name} className="mt-4" />
        <p className="text-sm text-center tracking-widest mb-4 md:mb-10">
          {text.current.description}
        </p>
        <div className="flex flex-row items-center gap-4">
          <a
            href="mailto:alonsog.jaime@gmail.com"
            className="text-xs font-light text-blue-400 hover:underline underline-offset-2 mb-4 md:mb-0 border- rounded-md h-9 px-4 py-2 backdrop-blur-md"
          >
            alonsog.jaime@gmail.com
          </a>
          <SeeMore />
        </div>
      </div>
    </div>
  );
};

export default Hero;
