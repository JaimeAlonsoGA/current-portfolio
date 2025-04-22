import { ReactNode } from "react";
import Background from "./background";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <main
    className={cn(
      "flex flex-col justify-center items-center",
      "min-h-screen h-screen overflow-auto",
      "font-[family-name:var(--font-geist-sans)]",
      "transition-all duration-300"
    )}
    role="main"
    aria-label="Main content"
  >
    {children}
    <Background />
  </main>
);

export default Container;
