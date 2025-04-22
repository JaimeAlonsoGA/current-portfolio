import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export const SeeMore = () => {
  const button =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors bg-zinc-900 group-hover:bg-zinc-800 text-zinc-50 shadow  dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 rounded-md px-3 text-sm border-white/10";
  return (
    <div className="group bg-gradient-to-r from-yellow-500 to-red-500 p-0.5 rounded-md hover:bg-gradient-to-l hover:from-primary/40 hover:to-from-primary/20 colors-transition duration-300">
      <Link href="/projects" className={`${button}`}>
        See all projects 
        <IoIosArrowRoundForward className="h-4 w-4" />
      </Link>
    </div>
  );
};
