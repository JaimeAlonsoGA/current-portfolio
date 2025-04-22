import Link from "next/link";

export const SeeMore = () => {
  const button =
    "h-9 px-4 py-2 inline-flex items-center justify-center text-black bg-white rounded-md text-sm font-medium hover:bg-gray-200 focus:outline-none";
  return (
      <Link href="/projects" className={`${button}`}>
        See all projects
      </Link>
  );
};