import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <main className="to-gray-100 px-8 flex flex-col justify-center items-center h-screen font-[family-name:var(--font-geist-sans)]">
    {children}
  </main>
);

export default Container;

// grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen
