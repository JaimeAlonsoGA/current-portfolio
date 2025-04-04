import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";

const GalleryImage: React.FC<{
  title: string;
  image: string;
  index: number;
  isPhone: boolean;
}> = ({ title, image, index, isPhone }) => {
  return (
    <div key={index} className="flex flex-col gap-2">
      <Dialog>
        {isPhone ? (
          <DialogTrigger>
            <Image
              key={index}
              src={image}
              alt={`image of ${title} project`}
              className="rounded-lg"
              width={200}
              height={200}
            />
          </DialogTrigger>
        ) : (
          <DialogTrigger className="sm:max-w-[800px] max-w-[90vw] border-none shadow-none bg-transparent">
            <Image
              key={index}
              src={image}
              alt={`image of ${title} project`}
              className="rounded-lg"
              width={300}
              height={100}
            />
          </DialogTrigger>
        )}
        {isPhone ? (
          <DialogContent className="sm:max-w-[425px] max-w-[90vw] border-none shadow-none bg-transparent">
            <DialogTitle className="hidden">
                {title}
            </DialogTitle>
            <Image
              key={index}
              src={image}
              alt={`image of ${title} project`}
              className="rounded-lg"
              width={1200}
              height={675}
              quality={100}
              priority={true}
            />
          </DialogContent>
        ) : (
          <DialogContent className="sm:max-w-[800px] max-w-[90vw] border-none shadow-none bg-transparent">
            <DialogTitle className="hidden">
                {title}
            </DialogTitle>  
            <Image
              key={index}
              src={image}
              alt={`image of ${title} project`}
              className="rounded-lg"
              width={1200}
              height={675}
            />
          </DialogContent>
        )}
      </Dialog>
      <p className="text-xs italic text-center text-white">
        {image.includes("figma") ? "Design on Figma" : "Application screen"}
      </p>
    </div>
  );
};

export default GalleryImage;
