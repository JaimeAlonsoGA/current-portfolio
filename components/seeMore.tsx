import Link from "next/link";

export const SeeMore = () => {
  const button =
    "h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg bg-gray-100 hover:bg-gray-200 hover:text-gray-900";
  return (
    <div className="group justify-center items-center flex w-full absolute bottom-12 z-50">
      <Link href="/projects" className={`${button}`}>
        Ver todos los proyectos
      </Link>
    </div>
  );
};

export const SeeMoreOnProject = () => {
  const button =
    "h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-lg bg-gray-100 hover:bg-gray-200 hover:text-gray-900";
  return (
    <div className="justify-center items-center flex w-full mt-6 mb-16">
      <Link href="/projects" className={button}>
        Ver todos los proyectos
      </Link>
    </div>
  );
};
