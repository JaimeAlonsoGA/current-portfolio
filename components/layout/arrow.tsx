
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";

const Arrow = () => {
    const pathname = usePathname()
    const [isMounted, setIsMounted] = useState(false);
    const isHome = pathname === "/";
    const isProject = pathname.includes("/projects/");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;
    return (
        <Link
            href={isProject ? "/projects" : "/"}
            className={`${isHome ? "hidden sm:flex" : ""}`}
        >
            <IoIosArrowRoundBack color={"white"} size={"24"} className={`${isHome ? "hidden" : ""}`} />
        </Link>
        )
}

export default Arrow;