import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Arrow: React.FC<{ isProject: boolean; isHome: boolean }> = ({
    isProject,
    isHome,
}) => {
    if (isHome) {
        return <div className="w-6" />; 
    }

    return (
        <Link
            href="/"
            className="text-white/90 hover:text-white transition-colors duration-300"
            aria-label="Volver al inicio"
        >
            <IoIosArrowRoundBack size={24} />
        </Link>
    );
};

export default Arrow;