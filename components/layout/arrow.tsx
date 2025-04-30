
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

const Arrow: React.FC<{isProject: boolean, isHome: boolean }> = ({ isProject, isHome }) => {
    return (
        <Link
            href={isProject ? "/projects" : "/"}
            className={`${isHome ? "hidden sm:flex" : ""}`}
        >
            <IoIosArrowRoundBack color={"white"} size={"24"} className={`${isHome ? "hidden" : ""}`} />
        </Link>
        )
}

export default Arrow;