import Image from "next/image";
import Link from "next/link";

export const SeeMore = () => {
    const button = "h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-gray-300 shadow-lg bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
    return (
        <div className="group justify-center items-center flex w-full absolute bottom-12 z-50">
            <Link href="/projects" className={button}>
                Ver todos los proyectos
            </Link>
            <Image
                src="/RIGHT.png"
                alt="Clouds right"
                width={800}
                height={0}
                className="absolute -bottom-10 right-0"
            />
            <Image
                src="/CENTER.png"
                alt="Clouds right"
                width={800}
                height={0}
                className="absolute -bottom-10 group-hover:opacity-0 transition duration-700 ease-in-out -z-10 hover:-z-20"
            />
            <Image
                src="/LEFT.png"
                alt="Clouds right"
                width={800}
                height={0}
                className="absolute -bottom-10 left-0"
            />
        </div>
    )
}

export const SeeMoreOnProject = () => {
    const button = "h-9 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-gray-300 shadow-lg bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
    return (
        <div className="justify-center items-center flex w-full mt-6 mb-16">
            <Link href="/projects" className={button}>
                Ver todos los proyectos
            </Link>
        </div>
    )
}