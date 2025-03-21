'use client';

import { usePathname } from "next/navigation";
import Blanket from "./blanket";
import { SeeMore } from "./seeMore";

const Footer = () => {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <div className={`${pathname !== "/" && "hidden"} relative flex w-full font-[family-name:var(--font-geist-sans)]`}>
      <Blanket />
      <SeeMore />
    </div>
  );
};

export default Footer;
