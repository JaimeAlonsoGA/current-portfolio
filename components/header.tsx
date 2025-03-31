"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowRoundBack } from "react-icons/io";

const Header: React.FC = () => {
  const pathname = usePathname()
  const routes = ["/"];
  const isHome = routes.includes(pathname);
  return (
    <div
      className={`absolute backdrop-blur-lg z-10 flex flex-row w-full top-0 justify-center items-center py-6 font-[family-name:var(--font-geist-sans)]`}
    >
      {!isHome && <Link href={"/"} className="absolute left-5">
        <IoIosArrowRoundBack color={"white"} size={"24"} />
      </Link>}
      <a
        className="text-white font-light flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/jaime360/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* <FaLinkedinIn /> */}
        <p>LinkedIn</p>
      </a>
    </div>
  );
};

export default Header;
