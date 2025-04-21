"use client";

import { usePathname } from "next/navigation";
import Blanket from "./blanket";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <footer
      className={`${
        pathname !== "/" && "hidden"
      } relative flex w-full font-[family-name:var(--font-geist-sans)]`}
    >
      <Blanket />
    </footer>
  );
};

export default Footer;
