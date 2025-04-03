import Arrow from "./layout/arrow";

const Header: React.FC = () => {
  return (
    <div
      className={`absolute backdrop-blur-lg z-10 flex flex-row w-full top-0 justify-center items-center py-6 font-[family-name:var(--font-geist-sans)]`}
    >
      <Arrow />
      <a
        className="text-white font-light flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/jaime360/"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Header;
