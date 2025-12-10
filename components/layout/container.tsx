import { ReactNode } from "react";
import Background from "./background";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <main
    className={cn(
      "relative flex flex-col items-center",
      "min-h-screen w-full",
      "font-[family-name:var(--font-geist-sans)]"
    )}
    role="main"
    aria-label="Main content"
  >
    {children}
    <Background />
  </main>
);

export default Container;