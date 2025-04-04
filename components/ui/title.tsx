const Title: React.FC<{ title: string, className?: string }> = ({ title, className }) => <h1 className={`font-bold ${title.length > 12 ? "text-3xl sm:text-5xl md:text-6xl" : "text-5xl sm:text-7xl md:text-8xl"}  text-center ${className} `}>{title}</h1>

export default Title