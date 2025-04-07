"use client";

import { usePathname } from "next/navigation";
import Blanket from "./blanket";
import { SeeMore } from "./seeMore";

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
      <SeeMore />
    </footer>
  );
};

export default Footer;
