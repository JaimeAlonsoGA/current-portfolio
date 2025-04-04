
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
        !isHome && (<Link href={isProject ? "/projects" : "/"} className="absolute left-5">
            <IoIosArrowRoundBack color={"white"} size={"24"} />
        </Link>)
    )
}

export default Arrow;