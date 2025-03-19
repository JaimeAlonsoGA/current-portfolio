import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <main className="relative flex flex-col justify-center items-center h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    {children}
  </main>
);

export default Container;

// grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
