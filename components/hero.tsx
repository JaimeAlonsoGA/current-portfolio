import { text } from "@/data/text";
import Title from "./ui/title";

const Hero = () => {
  const description = text.current.description;
  return (
    <div className="h-1/2 flex flex-col justify-end items-center w-full">
      <Title title={text.current.name} />
      <div className="text-sm text-center sm:text-left tracking-widest mb-12">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Hero;
