import { text } from "@/data/text"
import Title from "./ui/title"

const Hero = () => {
    const description = text.current.description
    const inline = "flex flex-row gap-1 py-4"
    return (
        <div className="h-1/2 flex flex-col justify-end items-center w-full">
            <Title title={text.current.name} />
            <ol className="text-sm text-center sm:text-left tracking-widest mb-12">
                <li><span className={inline}><p>{description.left}</p><p className="italic">{description.decoration}</p><p>{description.right}</p></span></li>
            </ol>
        </div>
    )
}

export default Hero;