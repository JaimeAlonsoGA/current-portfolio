"use client";

import { usePathname } from "next/navigation";
import { FaLinkedinIn } from "react-icons/fa";

const Header: React.FC = () => {
  const pathname = usePathname();
  const absoluteHeaderRoutes = ["/", "/projects"];
  return (
    <header
      className={`absolute bg-white flex flex-row w-full top-0 justify-center items-center py-6  font-[family-name:var(--font-geist-sans)]`}
    >
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/jaime360/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
        LinkedIn
      </a>
    </header>
  );
};

// ${
//   absoluteHeaderRoutes.includes(pathname) && "absolute"
// }

export default Header;
