import { FaLinkedinIn } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row w-full absolute top-5 justify-center items-center p-4">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/jaime360/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
        Linkedin
      </a>
    </header>
  );
};

export default Header;
